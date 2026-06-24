import type { ExecutionPlan, PipelineContext, ResourceRequirement } from "@/core/types";

export interface ResourceRouter {
  determineResources(context: PipelineContext, plan: ExecutionPlan): Promise<ResourceRequirement[]>;
}

export class DefaultResourceRouter implements ResourceRouter {
  async determineResources(
    context: PipelineContext,
    plan: ExecutionPlan,
  ): Promise<ResourceRequirement[]> {
    const hasDocuments = context.attachments.some((attachment) => attachment.kind === "document");
    const hasImages = context.attachments.some((attachment) => attachment.kind === "image");
    const plannedRequirements = new Map(
      plan.requiredResources.map((resource) => [resource.kind, resource]),
    );

    const defaultRequirements: ResourceRequirement[] = [
      {
        kind: "memory",
        required: false,
        reason: "No memory retrieval contract is configured for this architecture stage.",
        status: "not_requested",
      },
      {
        kind: "knowledge",
        required: false,
        reason: "No knowledge source contract is configured for this architecture stage.",
        status: "not_requested",
      },
      {
        kind: "tools",
        required: false,
        reason: "No tool execution contract is configured for this architecture stage.",
        status: "not_requested",
      },
      {
        kind: "documents",
        required: hasDocuments,
        reason: hasDocuments
          ? "Document attachments are present in the pipeline context."
          : "No document attachments are present in the pipeline context.",
        status: hasDocuments ? "requested" : "not_requested",
      },
      {
        kind: "images",
        required: hasImages,
        reason: hasImages
          ? "Image attachments are present in the pipeline context."
          : "No image attachments are present in the pipeline context.",
        status: hasImages ? "requested" : "not_requested",
      },
    ];

    return defaultRequirements.map(
      (requirement) => plannedRequirements.get(requirement.kind) ?? requirement,
    );
  }
}
