<template>
  <div>Personnes</div>
  <div v-if="loading">Chargement</div>
  <template v-else>
    <div v-for="(person, index) in persons" :key="index">
      <p>{{ person.firstName }}</p>
      <p>{{ person.lastName }}</p>
      <p>{{ person.email }}</p>
    </div>
  </template>

</template>
<script lang="ts" setup>
import type {Person} from "~~/server/api/person/person.dto";
import {getAllPerson} from "~~/server/api/person/person.api";
import {usePromise} from "~/composables";

const {trigger, loading} = usePromise();
const persons = ref<Person[]>([])

onMounted(async () => {
  trigger(getAllPerson().then(res => persons.value = res));
})
</script>
