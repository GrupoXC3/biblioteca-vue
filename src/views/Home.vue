<template>
  <div class="home">
    <BarraDeBusqueda/>
    <SeccionCategorias/>
    <LibrosDestacados />
  </div>
</template>

<script>
// @ is an alias to /src
import BarraDeBusqueda from '../components/BarraDeBusqueda.vue'
import SeccionCategorias from '../components/SeccionCategorias.vue'
import LibrosDestacados from '../components/LibrosDestacados.vue';

export default {
  name: 'Home',
  components: {
    BarraDeBusqueda,
    SeccionCategorias,
    LibrosDestacados
  }
}
</script>
