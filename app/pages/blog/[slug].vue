<template>
  <form @submit.prevent="hello">
    <Input v-model="message"/>
    <button type="submit">Say Hello</button>
  </form>
  <h2>message {{ message }}</h2>
</template>
<script setup lang="ts">
import {Input} from '~/components/ui/input'
const {slug} = useRoute().params
const {data: post} = await useFetch(`/api/cms/blog/${slug}`)
const message = ref<string>();
const hello = () => sayHello(message.value)
const layout = "custom";
</script>
