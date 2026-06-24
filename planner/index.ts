import { createPipelineId } from "@/core/ids";
import type { ExecutionPlan, Intent, PipelineContext } from "@/core/types";

export interface ExecutionPlanner {
  buildPlan(context: PipelineContext, intent: Intent): Promise<ExecutionPlan>;
}

export class DefaultExecutionPlanner implements ExecutionPlanner {
  async buildPlan(_context: PipelineContext, intent: Intent): Promise<ExecutionPlan> {
    const resolveResourcesStepId = createPipelineId("step");
    const executeReasoningStepId = createPipelineId("step");
    const verifyOutputStepId = createPipelineId("step");
    const prepareResponseStepId = createPipelineId("step");

    return {
      id: createPipelineId("plan"),
      intentId: intent.id,
      objective: "Prepare a provider-neutral execution plan for the incoming request.",
      steps: [
        {
          id: resolveResourcesStepId,
          name: "resolve-resources",
          description: "Identify memory, knowledge, tool, document, and image requirements.",
          dependsOn: [],
        },
        {
          id: executeReasoningStepId,
          name: "execute-reasoning",
          description: "Run the request through the configured reasoning interface.",
          dependsOn: [resolveResourcesStepId],
        },
        {
          id: verifyOutputStepId,
          name: "verify-output",
          description: "Verify artifacts and execution results before response shaping.",
          dependsOn: [executeReasoningStepId],
        },
        {
          id: prepareResponseStepId,
          name: "prepare-response",
          description: "Build the structured response payload.",
          dependsOn: [verifyOutputStepId],
        },
        {
          id: createPipelineId("step"),
          name: "prepare-memory-updates",
          description: "Prepare memory update instructions for downstream persistence.",
          dependsOn: [prepareResponseStepId],
        },
      ],
      requiredResources: [],
      constraints: [
        "No AI provider is configured in Sprint 003.",
        "No chat, upload, authentication, or persistence behavior is executed.",
      ],
    };
  }
}
