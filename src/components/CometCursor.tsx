import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
};

function CometCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mouse = useRef<Point>({ x: 0, y: 0 });
  const current = useRef<Point>({ x: 0, y: 0 });
  const previous = useRef<Point>({ x: 0, y: 0 });
  const trail = useRef<Point[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );

      // Smooth cursor movement
      previous.current.x = current.current.x;
      previous.current.y = current.current.y;

      current.current.x +=
        (mouse.current.x - current.current.x) * 0.28;

      current.current.y +=
        (mouse.current.y - current.current.y) * 0.28;

      // Movement velocity
      const dx = current.current.x - previous.current.x;
      const dy = current.current.y - previous.current.y;

      const speed = Math.sqrt(dx * dx + dy * dy);

      // Tail gets longer with speed
      const targetLength = Math.min(
        90,
        Math.max(8, speed * 4)
      );

      // Add current position
      trail.current.unshift({
        x: current.current.x,
        y: current.current.y,
      });

      // Keep enough points for smooth tail
      trail.current = trail.current.slice(
        0,
        Math.floor(targetLength)
      );

      if (trail.current.length > 1) {
        /*
         * =========================
         * OUTER GLOW
         * =========================
         */

        ctx.save();

        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.lineWidth = 12;

        ctx.shadowBlur = 18;
        ctx.shadowColor = "rgba(120, 190, 255, 0.8)";

        const glowGradient = ctx.createLinearGradient(
          trail.current[trail.current.length - 1].x,
          trail.current[trail.current.length - 1].y,
          trail.current[0].x,
          trail.current[0].y
        );

        glowGradient.addColorStop(
          0,
          "rgba(180, 230, 255, 0)"
        );

        glowGradient.addColorStop(
          0.55,
          "rgba(120, 190, 255, 0.12)"
        );

        glowGradient.addColorStop(
          1,
          "rgba(220, 245, 255, 0.7)"
        );

        ctx.strokeStyle = glowGradient;

        ctx.beginPath();

        ctx.moveTo(
          trail.current[trail.current.length - 1].x,
          trail.current[trail.current.length - 1].y
        );

        // Smooth quadratic curve
        for (
          let i = trail.current.length - 2;
          i >= 0;
          i--
        ) {
          const point = trail.current[i];

          ctx.lineTo(point.x, point.y);
        }

        ctx.stroke();

        ctx.restore();

        /*
         * =========================
         * BRIGHT CORE
         * =========================
         */

        ctx.save();

        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.lineWidth = 3;

        const coreGradient = ctx.createLinearGradient(
          trail.current[trail.current.length - 1].x,
          trail.current[trail.current.length - 1].y,
          trail.current[0].x,
          trail.current[0].y
        );

        coreGradient.addColorStop(
          0,
          "rgba(180, 220, 255, 0)"
        );

        coreGradient.addColorStop(
          0.65,
          "rgba(210, 235, 255, 0.4)"
        );

        coreGradient.addColorStop(
          1,
          "rgba(255, 255, 255, 1)"
        );

        ctx.strokeStyle = coreGradient;

        ctx.beginPath();

        ctx.moveTo(
          trail.current[trail.current.length - 1].x,
          trail.current[trail.current.length - 1].y
        );

        for (
          let i = trail.current.length - 2;
          i >= 0;
          i--
        ) {
          const point = trail.current[i];

          ctx.lineTo(point.x, point.y);
        }

        ctx.stroke();

        ctx.restore();
      }

      /*
       * =========================
       * COMET HEAD
       * =========================
       */

      const headGradient = ctx.createRadialGradient(
        current.current.x,
        current.current.y,
        0,
        current.current.x,
        current.current.y,
        14
      );

      headGradient.addColorStop(
        0,
        "rgba(255,255,255,1)"
      );

      headGradient.addColorStop(
        0.2,
        "rgba(240,250,255,1)"
      );

      headGradient.addColorStop(
        0.45,
        "rgba(150,210,255,0.6)"
      );

      headGradient.addColorStop(
        1,
        "rgba(100,180,255,0)"
      );

      ctx.beginPath();

      ctx.arc(
        current.current.x,
        current.current.y,
        14,
        0,
        Math.PI * 2
      );

      ctx.fillStyle = headGradient;
      ctx.fill();

      // Tiny bright core
      ctx.beginPath();

      ctx.arc(
        current.current.x,
        current.current.y,
        2.5,
        0,
        Math.PI * 2
      );

      ctx.fillStyle = "white";
      ctx.fill();

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 1000,
      }}
    />
  );
}

export default CometCursor;