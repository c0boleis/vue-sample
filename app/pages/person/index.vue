<template>
  <div>Personnes</div>
  <div v-if="loading">Chargement</div>
  <div v-else class="flex flex-col gap-2 ma-2">
    <Card v-for="(person, index) in persons" :key="index" :to="`/person/${person.id}`">
      <template #title>
        {{ `${person.firstName} ${person.lastName}` }}
      </template>
      <template #text>
        <p>{{ person.email }}</p>
      </template>
    </Card>
  </div>
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
