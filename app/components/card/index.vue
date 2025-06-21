<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="card"
  >
    <div v-if="$slots.title" class="card-title">
      <slot name="title"></slot>
    </div>
    <div v-if="$slots.text" class="card-text">
      <slot name="text"></slot>
    </div>
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </NuxtLink>
  <div v-else class="card">
    <div v-if="$slots.title" class="card-title">
      <slot name="title"></slot>
    </div>
    <div v-if="$slots.text" class="card-text">
      <slot name="text"></slot>
    </div>
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
.card {
  border-radius: 8px;
  border: solid 1px black;

  .card-title {
    padding: 8px;
    font-weight: bold;
  }

  .card-text {
    margin-left: 8px;
    margin-right: 8px;
  }
}
</style>

<script lang="ts" setup>
defineProps({
  to: String
})
</script>
