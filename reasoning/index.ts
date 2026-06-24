import type {
  ExecutionPlan,
  PipelineContext,
  ReasoningResult,
  ResourceRequirement,
} from "@/core/types";

export interface ReasoningEngine {
  execute(
    context: PipelineContext,
    plan: ExecutionPlan,
    resources: ResourceRequirement[],
  ): Promise<ReasoningResult>;
}

export class DefaultReasoningEngine implements ReasoningEngine {
  async execute(
    _context: PipelineContext,
    plan: ExecutionPlan,
    resources: ResourceRequirement[],
  ): Promise<ReasoningResult> {
    const blockedResources = resources.filter(
      (resource) => resource.required && resource.status !== "resolved",
    );

    return {
      planId: plan.id,
      status: blockedResources.length > 0 ? "blocked" : "completed",
      stepResults: plan.steps.map((step) => ({
        stepId: step.id,
        status: blockedResources.length > 0 ? "blocked" : "completed",
        detail:
          blockedResources.length > 0
            ? "Execution is blocked until required resources are resolved by a concrete module."
            : "Execution completed through the provider-neutral reasoning interface.",
        artifacts: [],
      })),
      artifacts: [],
      notes: [
        "No AI model, LLM provider, chat runtime, upload handler, or backend integration is configured.",
      ],
    };
  }
}
