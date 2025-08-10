import React from "react";

export default function OurDiscordButton() {
  return (
    <a
      href="https://discord.gg/skDSzwCScu"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Join our Discord"
      className="discord-button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        fill="#00a2ff"
        className="discord-icon"
      >
        <path d="M20 3.5A17.9 17.9 0 0 0 17.5 2 15.3 15.3 0 0 0 12 1C6.48 1 2 5.48 2 11c0 5.52 4.48 10 10 10 5.52 0 10-4.48 10-10 0-1.9-.62-3.65-1.68-5.09l.66-.41a2 2 0 1 0-2.98-2.99z" />
      </svg>
      Our Discord
      <style jsx>{`
        .discord-button {
          position: fixed;
          top: 1rem;
          left: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.85rem;
          background: rgba(0, 114, 255, 0.85);
          border-radius: 14px;
          box-shadow: 0 0 15px rgba(0, 114, 255, 0.9);
          color: white;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          user-select: none;
          z-index: 5;
          transition: background 0.3s ease;
          cursor: pointer;
        }
        .discord-button:hover {
          background: rgba(0, 114, 255, 1);
          box-shadow: 0 0 25px rgba(0, 114, 255, 1);
        }
        .discord-icon {
          filter: drop-shadow(0 0 5px #00a2ff);
        }
      `}</style>
    </a>
  );
}
