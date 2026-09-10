<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const canvasRef = ref(null);
const mouse = { x: 0, y: 0 };
let cleanup = () => {};
const config = {
  count: 1000,
  speed: 0.0008,
  steering: 1.6,
  opacity: 0.3,
  bgColor: "#000000",
  starColor: "rgba(210,225,255,<alpha>)"
};

function move(event) {
  mouse.x = event.clientX / window.innerWidth - 0.5;
  mouse.y = event.clientY / window.innerHeight - 0.5;
}

function leave() {
  mouse.x = 0;
  mouse.y = 0;
}

onMounted(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;
  const canvas = canvasRef.value;
  const ctx = canvas.getContext("2d");
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  let frame = 0;
  let width = 0;
  let height = 0;
  const makeStar = () => ({ x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2, z: Math.random() });
  const stars = Array.from({ length: config.count }, makeStar);

  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = Math.max(1, Math.floor(width * pixelRatio));
    canvas.height = Math.max(1, Math.floor(height * pixelRatio));
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  }

  function draw() {
    const centerX = width / 2;
    const centerY = height / 2;
    ctx.fillStyle = config.bgColor;
    ctx.fillRect(0, 0, width, height);

    for (const star of stars) {
      star.z -= config.speed;
      star.x += mouse.x * config.speed * config.steering;
      star.y += mouse.y * config.speed * config.steering;
      if (star.z <= 0) Object.assign(star, makeStar());

      const sx = (star.x / star.z) * width * 0.5 + centerX;
      const sy = (star.y / star.z) * height * 0.5 + centerY;
      if (sx < 0 || sx > width || sy < 0 || sy > height) {
        Object.assign(star, makeStar());
        continue;
      }

      const oldZ = star.z + config.speed;
      const osx = (star.x / oldZ) * width * 0.5 + centerX;
      const osy = (star.y / oldZ) * height * 0.5 + centerY;
      const alpha = Math.min(1, (1 - star.z) * 1.4) * config.opacity;
      ctx.beginPath();
      ctx.moveTo(osx, osy);
      ctx.lineTo(sx, sy);
      ctx.strokeStyle = config.starColor.replace("<alpha>", String(alpha));
      ctx.lineWidth = Math.max(0.3, (1 - star.z) * 2.5);
      ctx.stroke();
    }

    frame = requestAnimationFrame(draw);
  }

  resize();
  draw();
  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  window.addEventListener("pointermove", move);
  window.addEventListener("pointerleave", leave);
  cleanup = () => {
    cancelAnimationFrame(frame);
    observer.disconnect();
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerleave", leave);
  };
});

onUnmounted(() => cleanup());
</script>

<template>
  <canvas
    ref="canvasRef"
    style="display:block;width:100%;height:100%;"
  />
</template>
