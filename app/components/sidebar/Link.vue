<script setup lang="ts">
defineProps<{
  label: string,
  icon: string,
  beta?: boolean
}>()
</script>

<template>
  <NuxtLink
    to=""
    class="flex items-center gap-2 px-2 py-1 rounded hover:(text-white bg-primary-3)"
  >
    <Icon :name="icon"/>
    <div>
      {{ label }}
    </div>
    <div v-if="beta" class="badge">
      bêta
    </div>
  </NuxtLink>
</template>