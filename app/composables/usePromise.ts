

export function usePromise(){
  const _loading = ref<boolean>(false);
  function trigger<T>(fct: Promise<T>){
    _loading.value = true;
    fct.finally(() => _loading.value = false);
  }
  return {
    loading: computed(() => _loading.value),
    trigger
  }
}
