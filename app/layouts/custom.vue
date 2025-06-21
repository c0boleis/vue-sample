
<template>
  <div class="main-container flex flex-row">
    <div>
      <NuxtPage />
    </div>
    <div class="page-view">
      <div class="header">
        <slot name="title"/>
      </div>
      <div class="tools">
        <slot name="tools"/>
      </div>
      <div>
        <slot />
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
</script>

<style lang="scss" scoped>
.page-view {
  width: 100%;
  height: 100%;
  .header {
    background: #406aff;
    padding: 10px 20px;
    font-weight: bold;
  }
  .tools {
    box-shadow: 1px 5px 5px black;
  }
}
</style>
