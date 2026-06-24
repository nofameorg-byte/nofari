import { createPipelineId } from "@/core/ids";
import type { MemoryUpdate, PipelineContext, ResponsePayload } from "@/core/types";

export interface MemoryUpdateManager {
  prepareUpdates(context: PipelineContext, response: ResponsePayload): Promise<MemoryUpdate[]>;
}

export class DefaultMemoryUpdateManager implements MemoryUpdateManager {
  async prepareUpdates(
    _context: PipelineContext,
    response: ResponsePayload,
  ): Promise<MemoryUpdate[]> {
    return [
      {
        id: createPipelineId("memory"),
        operation: "none",
        scope: "request",
        content: null,
        reason:
          response.content === null
            ? "No response content was generated for memory preparation."
            : "Memory persistence is not configured for this architecture stage.",
        status: "skipped",
        metadata: {
          responseId: response.id,
        },
      },
    ];
  }
}
