import { createPipelineId } from "@/core/ids";
import type {
  ExecutionPlan,
  Intent,
  ReasoningResult,
  ResponsePayload,
  VerificationResult,
} from "@/core/types";

export interface ResponseBuilder {
  buildResponse(input: {
    requestId: string;
    intent: Intent;
    plan: ExecutionPlan;
    reasoning: ReasoningResult;
    verification: VerificationResult;
  }): Promise<ResponsePayload>;
}

export class DefaultResponseBuilder implements ResponseBuilder {
  async buildResponse({
    requestId,
    intent,
    plan,
    reasoning,
    verification,
  }: {
    requestId: string;
    intent: Intent;
    plan: ExecutionPlan;
    reasoning: ReasoningResult;
    verification: VerificationResult;
  }): Promise<ResponsePayload> {
    return {
      id: createPipelineId("response"),
      requestId,
      status: verification.passed ? "empty" : "blocked",
      intent,
      plan,
      verification,
      artifacts: reasoning.artifacts,
      content: null,
    };
  }
}
