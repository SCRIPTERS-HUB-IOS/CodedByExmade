import React from "react";

const methods = [
  { name: "Splunk", link: "https://app.splunk.gg/u/exmadeGG" },
  { name: "Injuries", link: "https://www.logged.tg/auth/exmade" },
  { name: "Cookie Bypasser", link: "https://app.splunk.gg/u/exmadeGG" },
  { name: "Hyperlink Gen", link: "https://dsprs.vercel.app/hyperlink" },
];

export default function Methods() {
  return (
    <>
      <main className="glass-container methods-page">
        <h1 className="neon-title">Methods</h1>
        <div className="methods-list">
          {methods.map(({ name, link }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button"
            >
              {name}
            </a>
          ))}
        </div>
      </main>

      <style jsx>{`
        .glass-container {
          position: relative;
          z-index: 2;
          height: 100vh;
          margin: 2rem auto;
          padding: 2rem 0;
          width: 360px;
          backdrop-filter: blur(12px);
          background: rgba(26, 0, 0, 0.35);
          border-radius: 24px;
          border: 1.5px solid rgba(255, 0, 0, 0.3);
          box-shadow:
            0 0 15px rgba(255, 0, 0, 0.8),
            inset 0 0 15px rgba(255, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          align-items: center;
          user-select: none;
        }

        .methods-page {
          gap: 2rem;
        }

        .neon-title {
          color: #ff1a1a;
          font-size: 3rem;
          font-weight: 900;
          text-shadow:
            0 0 6px #ff1a1a,
            0 0 12px #ff1a1a,
            0 0 24px #ff0000,
            0 0 48px #ff0000;
          margin-bottom: 2rem;
          letter-spacing: 0.1em;
          user-select: none;
        }

        .methods-list {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }

        .glass-button {
          display: block;
          padding: 1.2rem 0;
          border-radius: 20px;
          background: rgba(51, 0, 0, 0.5);
          border: 2.5px solid #ff0000;
          box-shadow:
            0 0 10px #ff0000,
            inset 0 0 10px #ff0000;
          text-align: center;
          color: #ff0000;
          font-weight: 700;
          font-size: 1.5rem;
          text-decoration: none;
          cursor: pointer;
          user-select: none;
          transition: background-color 0.3s ease;
          text-shadow: 0 0 10px #ff1a1a;
        }

        .glass-button:hover {
          background: rgba(77, 0, 0, 0.75);
        }
      `}</style>
    </>
  );
}
