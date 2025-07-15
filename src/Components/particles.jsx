"use client";

import React, { useRef, useEffect } from "react";

export default function Particles({ className = "", quantity = 30 }) {
  const canvasRef = useRef(null);
  const context = useRef(null);
  const particles = useRef([]);
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  const createParticle = (w, h) => ({
    x: Math.random() * w,
    y: Math.random() * h,
    radius: Math.random() * 2 + 0.5,
    alpha: Math.random() * 0.5 + 0.3,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    context.current = ctx;

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);

      particles.current = Array.from({ length: quantity }, () =>
        createParticle(window.innerWidth, window.innerHeight)
      );
    };

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      particles.current.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        // bounce
        if (p.x < 0 || p.x > window.innerWidth) p.dx *= -1;
        if (p.y < 0 || p.y > window.innerHeight) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [quantity]);

  return (
    <div className={className} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
