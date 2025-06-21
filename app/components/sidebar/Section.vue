<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <CollapsibleRoot>
    <CollapsibleTrigger class="w-full flex items-center justify-between gap-1">
      <div class="truncate">{{ label }}</div>
      <Icon name="fa-solid:chevron-down" class="flex-none text-neutral-3"/>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <slot/>
    </CollapsibleContent>
  </CollapsibleRoot>
</template>

<style>

</style>