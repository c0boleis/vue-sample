<script setup lang="ts">
import '@unocss/reset/tailwind-compat.css'
</script>

<template>
  <SplitterGroup
    id="splitter-group-1"
    direction="horizontal"
    class="bg-stone-100"
  >
    <SplitterPanel
      id="splitter-group-1-panel-1"
      :min-size="16"
      :max-size="24"
      class="bg-white"
    >
      <Sidebar/>
    </SplitterPanel>
    <SplitterResizeHandle id="splitter-group-1-resize-handle-1" />
    <SplitterPanel
      id="splitter-group-1-panel-2"
      :min-size="60"
    >
      <NuxtPage/>
    </SplitterPanel>
  </SplitterGroup>
</template>

<style lang="postcss">
html,
body,
#__nuxt {
  width: 100dvw;
  height: 100dvh;
  background: white;
}

:root {
  --color-primary-1: oklch(0.28 0.0666 220); /* Fallback #00303f */
  --color-primary-2: oklch(0.42 0.0968 210); /* Fallback #005a69 */
  --color-primary-3: oklch(0.54 0.1230 200); /* Fallback #008188 */
  --color-primary-4: oklch(0.72 0.1430 184); /* Fallback #00c1af */
  --color-primary-5: oklch(0.87 0.0900 175); /* Fallback #8FE9D2 */
  --color-primary-6: oklch(0.93 0.0496 172); /* Fallback #C8F4E5 */

  --color-neutral-1: oklch(0.22 0.040 280); /* Fallback #17182d */
  --color-neutral-2: oklch(0.32 0.027 285); /* Fallback #313140 */
  --color-neutral-3: oklch(0.45 0.018 290); /* Fallback #55545f */
  --color-neutral-4: oklch(0.84 0.012 295); /* Fallback #cbc9d2 */
  --color-neutral-5: oklch(0.92 0.008 300); /* Fallback #e5e3e9 */
  --color-neutral-6: oklch(0.98 0.004 305); /* Fallback #f9f8fb */

  --color-white: #FFFFFF;
  --color-black: #000000;
}
</style>