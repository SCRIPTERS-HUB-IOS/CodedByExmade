import React, { useEffect, useRef } from "react";

export default function NeonParticleBackground() {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // Deep red background color
    const bgColor = "#1a0000";

    const particleCount = 70;
    particles.current = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 1 + Math.random() * 1.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      colorVariation: 150 + Math.floor(Math.random() * 100),
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // draw background - no opaque overlay, just fill once
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);

      particles.current.forEach((p) => {
        const r = p.colorVariation;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${r}, 77, 77, 0.9)`;
        ctx.shadowColor = `rgba(${r}, 77, 77, 1)`;
        ctx.shadowBlur = 16;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;
      });

      requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
