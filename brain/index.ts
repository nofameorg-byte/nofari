import {
  IntelligencePipeline,
  type IntelligencePipelineModules,
} from "@/core/intelligence-pipeline";
import type { PipelineRequest, PipelineResult } from "@/core/types";

export interface Brain {
  process(request: PipelineRequest): Promise<PipelineResult>;
}

export class NofariBrain implements Brain {
  constructor(private readonly pipeline: IntelligencePipeline = new IntelligencePipeline()) {}

  async process(request: PipelineRequest): Promise<PipelineResult> {
    return this.pipeline.run(request);
  }
}

export function createNofariBrain(modules: Partial<IntelligencePipelineModules> = {}) {
  return new NofariBrain(new IntelligencePipeline(modules));
}
