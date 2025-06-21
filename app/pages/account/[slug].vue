<template>
  <page-view title="Account">
    <template #tools>
      <NuxtLink to="/">
        Home
      </NuxtLink>
    </template>
  </page-view>
  <NuxtLayout :name="layout">
    <template #title>
      {{ `Blog post ${ $route.params.slug }` }}
    </template>
    <template #tools>
      <NuxtLink to="/">
        Home
      </NuxtLink>
    </template>
    <template #default>
     <p>Account</p>
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
const { slug } = useRoute().params
const { data: post } = await useFetch(`/api/cms/blog/${slug}`)
const message = ref<string>();
const hello = () => sayHello(message.value)
const layout = "custom";
</script>
