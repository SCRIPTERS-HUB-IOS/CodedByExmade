import React from "react";
import { useRouter } from "next/router";
import NeonParticleBackground from "../components/NeonParticleBackground";
import OurDiscordButton from "../components/OurDiscordButton";
import BrightnessSlider from "../components/BrightnessSlider";
import NeonButton from "../components/NeonButton";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <NeonParticleBackground />
      <OurDiscordButton />
      <BrightnessSlider />

      <main className="glass-container">
        <h1 className="neon-title">exmadeW</h1>

        <NeonButton
          onClick={() => router.push("/methods")}
          className="methods-button"
          aria-label="Go to Methods"
        >
          Methods
        </NeonButton>
      </main>

      <style jsx>{`
        .glass-container {
          position: relative;
          z-index: 2;
          height: 100vh;
          backdrop-filter: blur(12px);
          background: rgba(26, 0, 0, 0.35);
          border-radius: 24px;
          border: 1.5px solid rgba(255, 0, 0, 0.3);
          box-shadow:
            0 0 15px rgba(255, 0, 0, 0.8),
            inset 0 0 15px rgba(255, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 3rem;
          margin: 2rem auto;
          width: 320px;
          user-select: none;
          padding: 2rem 0;
        }

        .neon-title {
          color: #ff1a1a;
          font-size: 4rem;
          font-weight: 900;
          text-shadow:
            0 0 6px #ff1a1a,
            0 0 12px #ff1a1a,
            0 0 24px #ff0000,
            0 0 48px #ff0000;
          margin: 0;
          letter-spacing: 0.12em;
          user-select: none;
        }

        .methods-button {
          width: 260px;
          font-size: 2.4rem;
          padding: 1.6rem 0;
        }
      `}</style>
    </>
  );
}
