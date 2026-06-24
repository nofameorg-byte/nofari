import { DefaultIntentDetector, type IntentDetector } from "@/intent";
import { DefaultMemoryUpdateManager, type MemoryUpdateManager } from "@/memory-manager";
import { DefaultExecutionPlanner, type ExecutionPlanner } from "@/planner";
import { DefaultReasoningEngine, type ReasoningEngine } from "@/reasoning";
import { DefaultResponseBuilder, type ResponseBuilder } from "@/response";
import { DefaultResourceRouter, type ResourceRouter } from "@/router";
import { DefaultPipelineVerifier, type PipelineVerifier } from "@/verification";

import { createPipelineId } from "./ids";
import type { PipelineContext, PipelineRequest, PipelineResult } from "./types";

export interface IntelligencePipelineModules {
  intentDetector: IntentDetector;
  executionPlanner: ExecutionPlanner;
  resourceRouter: ResourceRouter;
  reasoningEngine: ReasoningEngine;
  verifier: PipelineVerifier;
  responseBuilder: ResponseBuilder;
  memoryManager: MemoryUpdateManager;
}

export class IntelligencePipeline {
  private readonly modules: IntelligencePipelineModules;

  constructor(modules: Partial<IntelligencePipelineModules> = {}) {
    this.modules = {
      intentDetector: modules.intentDetector ?? new DefaultIntentDetector(),
      executionPlanner: modules.executionPlanner ?? new DefaultExecutionPlanner(),
      resourceRouter: modules.resourceRouter ?? new DefaultResourceRouter(),
      reasoningEngine: modules.reasoningEngine ?? new DefaultReasoningEngine(),
      verifier: modules.verifier ?? new DefaultPipelineVerifier(),
      responseBuilder: modules.responseBuilder ?? new DefaultResponseBuilder(),
      memoryManager: modules.memoryManager ?? new DefaultMemoryUpdateManager(),
    };
  }

  async run(request: PipelineRequest): Promise<PipelineResult> {
    const context = this.createContext(request);

    const intent = await this.modules.intentDetector.detect(context);
    context.intent = intent;

    const initialPlan = await this.modules.executionPlanner.buildPlan(context, intent);
    context.executionPlan = initialPlan;
    context.status = "planned";

    const resourceRequirements = await this.modules.resourceRouter.determineResources(
      context,
      initialPlan,
    );
    const executionPlan = {
      ...initialPlan,
      requiredResources: resourceRequirements,
    };
    context.executionPlan = executionPlan;
    context.resourceRequirements = resourceRequirements;

    const reasoningResult = await this.modules.reasoningEngine.execute(
      context,
      executionPlan,
      resourceRequirements,
    );
    context.reasoningResult = reasoningResult;
    context.status = "executed";

    const verificationResult = await this.modules.verifier.verify(
      context,
      executionPlan,
      reasoningResult,
    );
    context.verificationResult = verificationResult;
    context.status = "verified";

    const responsePayload = await this.modules.responseBuilder.buildResponse({
      requestId: context.requestId,
      intent,
      plan: executionPlan,
      reasoning: reasoningResult,
      verification: verificationResult,
    });
    context.responsePayload = responsePayload;
    context.status = "responded";

    const memoryUpdates = await this.modules.memoryManager.prepareUpdates(context, responsePayload);
    context.memoryUpdates = memoryUpdates;

    return {
      context,
      response: responsePayload,
      memoryUpdates,
    };
  }

  private createContext(request: PipelineRequest): PipelineContext {
    return {
      requestId: request.requestId ?? createPipelineId("request"),
      input: request.input,
      createdAt: new Date().toISOString(),
      status: "initialized",
      attachments: request.attachments ?? [],
      metadata: request.metadata ?? {},
    };
  }
}
