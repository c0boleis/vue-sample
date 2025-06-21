<template>
  <div class="tools flex flex-row justify-between">
    <div>Personne N°{{personId}}</div>
    <button @click.prevent="savePerson">Enregistrer</button>
  </div>

  <div v-if="loading">
    Chargement
  </div>
  <div v-else-if="person">
      <TextInput v-model="person.firstName" label="Prénom" />
     <TextInput v-model="person.lastName" label="Nom" />
  </div>
  <div v-else>
    Aucune personne trouvée
  </div>
</template>
<script lang="ts" setup>

import {usePromise} from "~/composables";
import {getAllPerson, getPersonById, type Person} from "~~/server/api";

const route = useRoute()
const personId = computed<number>(() => +(route.params.id as string))
const {trigger, loading} = usePromise();
const person = ref<Person>()

watch(personId, (newPersonId) => {
  if(newPersonId){
    trigger(getPersonById(newPersonId).then(res => person.value = res));
  }else {
    person.value = undefined;
  }
}, { immediate: true })

function savePerson(){

}
</script>
