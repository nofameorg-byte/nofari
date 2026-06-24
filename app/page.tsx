import { Avatar, ChatInput, SectionContainer, UploadButton } from "@/components/ui";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090909] text-[#F5F0E6]">
      <SectionContainer className="min-h-screen justify-center gap-14 text-center">
        <header className="space-y-4">
          <p className="text-sm font-semibold tracking-[0.45em] text-[#D4AF37] uppercase">NOFARI</p>
          <h1 className="font-serif text-4xl tracking-tight text-[#F5F0E6] sm:text-6xl">
            Built to Think.
          </h1>
        </header>

        <div className="flex w-full flex-col items-center gap-10">
          <Avatar size="lg" />

          <h2 className="font-serif text-3xl tracking-tight text-[#F5F0E6] sm:text-5xl">
            What should we think through?
          </h2>

          <ChatInput
            aria-label="Conversation input"
            placeholder="Start the conversation..."
            containerClassName="w-full max-w-3xl"
          />

          <div className="grid w-full max-w-3xl gap-4 sm:grid-cols-2">
            <UploadButton label="Upload Document" />
            <UploadButton label="Upload Context" />
          </div>
        </div>
      </SectionContainer>
    </main>
  );
}
