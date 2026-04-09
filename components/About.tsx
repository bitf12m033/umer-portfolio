import { SectionWrapper } from "@/components/SectionWrapper";

export function About() {
  return (
    <SectionWrapper id="about">
      <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        About
      </h2>
      <p className="max-w-3xl text-pretty text-base leading-relaxed text-zinc-400 md:text-lg">
        I am a full-stack engineer with 8+ years building production systems—from
        interfaces and APIs to CMS-driven experiences and third-party integrations.
        I focus on software that stays reliable as requirements change. Recently I
        have concentrated on AI-enabled products: speech-to-text, real-time
        transcription, and Vertex AI on Google Cloud, integrated carefully with the
        rest of the stack.
      </p>
    </SectionWrapper>
  );
}
