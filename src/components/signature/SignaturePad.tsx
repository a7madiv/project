import React, { forwardRef, useEffect, useRef } from "react";

const SignaturePad = forwardRef((props, ref: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);
  const ctx = useRef<CanvasRenderingContext2D | null>(null);
  const lastPoint = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    ctx.current = canvas.getContext("2d");
    if (!ctx.current) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    ctx.current.strokeStyle = "#000";
    ctx.current.lineWidth = 2;
    ctx.current.lineCap = "round";
    ctx.current.lineJoin = "round";

    const handleStart = (e: MouseEvent | TouchEvent) => {
      isDrawing.current = true;
      const point = getPoint(e);
      if (point) {
        lastPoint.current = point;
      }
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDrawing.current || !ctx.current || !lastPoint.current) return;

      const point = getPoint(e);
      if (point) {
        ctx.current.beginPath();
        ctx.current.moveTo(lastPoint.current.x, lastPoint.current.y);
        ctx.current.lineTo(point.x, point.y);
        ctx.current.stroke();
        lastPoint.current = point;
      }
    };

    const handleEnd = () => {
      isDrawing.current = false;
      lastPoint.current = null;
    };

    canvas.addEventListener("mousedown", handleStart);
    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("mouseup", handleEnd);
    canvas.addEventListener("touchstart", handleStart);
    canvas.addEventListener("touchmove", handleMove);
    canvas.addEventListener("touchend", handleEnd);

    return () => {
      canvas.removeEventListener("mousedown", handleStart);
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("mouseup", handleEnd);
      canvas.removeEventListener("touchstart", handleStart);
      canvas.removeEventListener("touchmove", handleMove);
      canvas.removeEventListener("touchend", handleEnd);
    };
  }, []);

  const getPoint = (e: MouseEvent | TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  // Expose canvas methods to parent
  React.useImperativeHandle(ref, () => ({
    clear: () => {
      if (ctx.current && canvasRef.current) {
        ctx.current.clearRect(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
      }
    },
    toDataURL: () => {
      return canvasRef.current?.toDataURL();
    },
  }));

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full border border-gray-300 rounded touch-none"
    />
  );
});
export default SignaturePad; // Use default export
