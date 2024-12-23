"use client";

import { useState, useEffect } from "react";

interface Position {
  x: number;
  y: number;
}

export default function Home() {
  const [what, setWhat] = useState<Position[]>([]);

  useEffect(() => {
    setWhat(
      Array.from({ length: 200 }, () => ({
        x: Math.floor(Math.random() * window.innerWidth) - 50,
        y: Math.floor(Math.random() * window.innerHeight) - 50,
      })),
    );
  }, []);

  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-[text-rotate_1s_linear_infinite] mx-auto inline-block text-9xl [text-shadow:_0_4px_8px_#00BCD4] text-[#00BCD4] leading-snug font-manrope font-extrabold">
        啥 ?
      </div>
      {what.map((item, index) => {
        return (
          <div
            key={index}
            className="absolute text-xl animate-[text-flash_2s_ease-in-out_var(--i)_infinite] opacity-0"
            style={{
              top: item.y,
              left: item.x,
              "--i": `${index * 200}ms` 
            }}
          >
            啥
          </div>
        );
      })}
    </div>
  );
}
