export function createPipelineId(prefix: string) {
  return `${prefix}_${globalThis.crypto.randomUUID()}`;
}
