export type PipelineResourceKind = "memory" | "knowledge" | "tools" | "documents" | "images";

export type PipelineStatus = "initialized" | "planned" | "executed" | "verified" | "responded";

export type IntentCategory =
  | "unclassified"
  | "information_request"
  | "analysis_request"
  | "action_request"
  | "creative_request"
  | "system_request";

export type VerificationStatus = "passed" | "needs_review" | "blocked";

export type ResponseStatus = "ready" | "blocked" | "empty";

export type MemoryUpdateOperation = "none" | "append" | "revise" | "delete";

export type PipelineMetadataValue = string | number | boolean | null;

export type PipelineMetadata = Record<string, PipelineMetadataValue>;

export interface PipelineAttachment {
  id: string;
  kind: "document" | "image" | "file";
  name?: string;
  mediaType?: string;
  uri?: string;
  metadata?: PipelineMetadata;
}

export interface PipelineRequest {
  input: string;
  requestId?: string;
  attachments?: PipelineAttachment[];
  metadata?: PipelineMetadata;
}

export interface IntentSignal {
  source: string;
  value: string;
  weight: number;
}

export interface Intent {
  id: string;
  category: IntentCategory;
  confidence: number;
  summary: string;
  signals: IntentSignal[];
}

export interface ResourceRequirement {
  kind: PipelineResourceKind;
  required: boolean;
  reason: string;
  status: "not_requested" | "requested" | "resolved" | "unavailable";
}

export interface ExecutionStep {
  id: string;
  name: string;
  description: string;
  dependsOn: string[];
}

export interface ExecutionPlan {
  id: string;
  intentId: string;
  objective: string;
  steps: ExecutionStep[];
  requiredResources: ResourceRequirement[];
  constraints: string[];
}

export interface PipelineArtifact {
  id: string;
  kind: "text" | "data" | "reference" | "decision";
  label: string;
  value: unknown;
}

export interface ExecutionStepResult {
  stepId: string;
  status: "completed" | "skipped" | "blocked";
  detail: string;
  artifacts: PipelineArtifact[];
}

export interface ReasoningResult {
  planId: string;
  status: "completed" | "blocked";
  stepResults: ExecutionStepResult[];
  artifacts: PipelineArtifact[];
  notes: string[];
}

export interface VerificationCheck {
  id: string;
  label: string;
  passed: boolean;
  detail: string;
}

export interface VerificationResult {
  id: string;
  status: VerificationStatus;
  passed: boolean;
  checks: VerificationCheck[];
  issues: string[];
}

export interface ResponsePayload {
  id: string;
  requestId: string;
  status: ResponseStatus;
  intent: Intent;
  plan: ExecutionPlan;
  verification: VerificationResult;
  artifacts: PipelineArtifact[];
  content: string | null;
}

export interface MemoryUpdate {
  id: string;
  operation: MemoryUpdateOperation;
  scope: "request" | "session" | "long_term";
  content: string | null;
  reason: string;
  status: "prepared" | "skipped";
  metadata: PipelineMetadata;
}

export interface PipelineContext {
  requestId: string;
  input: string;
  createdAt: string;
  status: PipelineStatus;
  attachments: PipelineAttachment[];
  metadata: PipelineMetadata;
  intent?: Intent;
  executionPlan?: ExecutionPlan;
  resourceRequirements?: ResourceRequirement[];
  reasoningResult?: ReasoningResult;
  verificationResult?: VerificationResult;
  responsePayload?: ResponsePayload;
  memoryUpdates?: MemoryUpdate[];
}

export interface PipelineResult {
  context: PipelineContext;
  response: ResponsePayload;
  memoryUpdates: MemoryUpdate[];
}
