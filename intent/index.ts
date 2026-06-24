import { createPipelineId } from "@/core/ids";
import type { Intent, PipelineContext } from "@/core/types";

export interface IntentDetector {
  detect(context: PipelineContext): Promise<Intent>;
}

export class DefaultIntentDetector implements IntentDetector {
  async detect(context: PipelineContext): Promise<Intent> {
    const normalizedInput = context.input.trim();

    return {
      id: createPipelineId("intent"),
      category: "unclassified",
      confidence: 0,
      summary:
        normalizedInput.length > 0
          ? "Input received; no provider-backed intent classifier is configured."
          : "No input content was provided for intent detection.",
      signals: [
        {
          source: "input.length",
          value: String(normalizedInput.length),
          weight: 0,
        },
      ],
    };
  }
}
