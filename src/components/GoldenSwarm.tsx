"use client";

import React, { useEffect, useRef } from "react";

export default function GoldenSwarm() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let particles: Particle[] = [];
    let frame = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", resize);

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      angle: number;
      radius: number;
      speed: number;
      life: number;
      maxLife: number;
      color: string;
      wobbleSpeed: number;
      wobbleAngle: number;

      constructor(startX: number, startY: number) {
        this.baseX = startX;
        this.baseY = startY;
        this.angle = Math.random() * Math.PI * 2;
        // Vortex is wide but concentrates at endpoints
        this.radius = Math.random() * 120 + 30; 
        
        this.wobbleSpeed = Math.random() * 0.05;
        this.wobbleAngle = Math.random() * Math.PI * 2;

        this.x = this.baseX + Math.cos(this.angle) * this.radius;
        this.y = this.baseY + Math.sin(this.angle) * this.radius;

        this.size = Math.random() * 3 + 0.5;
        this.speed = Math.random() * 0.08 + 0.02;
        this.life = 0;
        this.maxLife = Math.random() * 120 + 60;

        // Luxurious golden/amber colors for "caustic sparkle path"
        const colors = [
          "rgba(251, 191, 36, {a})", // Amber 400
          "rgba(252, 211, 77, {a})", // Amber 300
          "rgba(255, 255, 255, {a})", // Pure white glint
          "rgba(245, 158, 11, {a})", // Amber 500
          "rgba(253, 230, 138, {a})" // Amber 200
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(flowX: number, flowY: number) {
        this.angle += this.speed;
        this.wobbleAngle += this.wobbleSpeed;
        
        // Emitter moves, particle trails behind
        this.baseX += flowX;
        this.baseY += flowY;

        // Helix logic => radius gets smaller as life increases (trailing cone)
        const currentRadius = this.radius * (1 - (this.life / this.maxLife) * 0.5); 
        
        // Complex swirling path
        this.x = this.baseX + Math.cos(this.angle) * currentRadius * 1.5 + Math.sin(this.wobbleAngle) * 20; 
        this.y = this.baseY + Math.sin(this.angle) * currentRadius * 0.8 + Math.cos(this.wobbleAngle) * 20;

        this.life++;
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Fade in quickly, fade out slowly
        const opacity = this.life < 10 
          ? this.life / 10 
          : 1 - ((this.life - 10) / (this.maxLife - 10));

        // Random caustic sparkle
        const sparkle = Math.random() > 0.95 ? 1.5 : 1;
        
        const currentOpacity = Math.max(0, opacity * sparkle);
        const c = this.color.replace("{a}", currentOpacity.toString());
        
        ctx.fillStyle = c;
        // High quality ray-traced feel uses overlapping additive blending
        ctx.globalCompositeOperation = "lighter";
        
        // Inner core
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Outer glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = this.color.replace("{a}", (currentOpacity * 0.2).toString());
        ctx.fill();
        
        ctx.globalCompositeOperation = "source-over"; // Reset
      }
    }

    const animate = () => {
      frame++;
      
      // Clear with slight trail for motion blur
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'source-over';

      // Mimics a volumetric ray of light arcing
      const cycleTime = 500; // frames per cycle
      let cycle = (frame % cycleTime) / cycleTime; // 0.0 to 1.0
      
      // Arc path: Starts slightly off-screen left, sweeps across, dips toward center-bottom (laptop)
      const emitterX = width * -0.1 + cycle * (width * 1.2); 
      
      // Y follows a subtle wave initially, then plunges towards the center/bottom
      const wave = Math.sin(cycle * Math.PI * 3) * 60;
      const dive = Math.pow(cycle, 3) * (height * 0.5);
      const emitterY = height * 0.35 + wave + dive; 
      
      // Spawn new particles around the moving emitter
      // Intensity spikes in the middle
      const spawnCount = Math.floor(15 + Math.sin(cycle * Math.PI) * 25);
      
      for (let i = 0; i < spawnCount; i++) {
        // Stagger positions slightly
        particles.push(new Particle(
          emitterX + (Math.random() - 0.5) * 40, 
          emitterY + (Math.random() - 0.5) * 40
        ));
      }

      // Update and draw existing particles
      for (let i = 0; i < particles.length; i++) {
        // Let the particles drift slowly left-up while emitter sweeps right-down,
        // enhancing the "dust cloud" trail effect
        particles[i].update(-1.5, -0.5); 
        particles[i].draw(ctx);

        if (particles[i].life >= particles[i].maxLife) {
          particles.splice(i, 1);
          i--;
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-x-0 top-0 w-full h-screen pointer-events-none z-[5] opacity-90" 
    />
  );
}
