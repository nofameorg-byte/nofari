import { createPipelineId } from "@/core/ids";
import type {
  ExecutionPlan,
  PipelineContext,
  ReasoningResult,
  VerificationResult,
} from "@/core/types";

export interface PipelineVerifier {
  verify(
    context: PipelineContext,
    plan: ExecutionPlan,
    reasoning: ReasoningResult,
  ): Promise<VerificationResult>;
}

export class DefaultPipelineVerifier implements PipelineVerifier {
  async verify(
    context: PipelineContext,
    plan: ExecutionPlan,
    reasoning: ReasoningResult,
  ): Promise<VerificationResult> {
    const checks = [
      {
        id: createPipelineId("check"),
        label: "intent-detected",
        passed: Boolean(context.intent),
        detail: "Pipeline context includes an intent object.",
      },
      {
        id: createPipelineId("check"),
        label: "plan-created",
        passed: plan.steps.length > 0,
        detail: "Execution plan contains one or more orchestration steps.",
      },
      {
        id: createPipelineId("check"),
        label: "reasoning-not-blocked",
        passed: reasoning.status !== "blocked",
        detail: "Reasoning stage completed without unresolved required resources.",
      },
    ];

    const issues = checks
      .filter((check) => !check.passed)
      .map((check) => `${check.label}: ${check.detail}`);

    return {
      id: createPipelineId("verification"),
      status: issues.length > 0 ? "blocked" : "passed",
      passed: issues.length === 0,
      checks,
      issues,
    };
  }
}
