<template>
  <form v-on:submit.prevent="">
      <input placeholder=" Buscar libro, género, autor..." v-model="buscar"/>
      <button>Buscar</button>
  </form>
</template>

<script>
export default {
  name: 'BarraDeBusqueda',
  data () {
    return {
      buscar:''
    }
  }
}
</script>

<style scoped>

</style>
