<template>
  <div class="home">
    <div v-if="user == null">
      <BotonesUsuario/>
    </div>
    <div id="sesion-iniciada" v-else>
      <div id="nombre-usuario">
        Bienvenido {{this.user.displayName}}
      </div>
      <div id="boton-cerrarsesion">
        <button v-on:click="deslogearse">Cerrar sesion</button>
      </div>
    </div>
    <Encabezado />
    <BarraDeBusqueda/>
    <SeccionCategorias/>
    <LibrosDestacados />
  </div>
</template>

<script>
// @ is an alias to /src
import BarraDeBusqueda from '../components/BarraDeBusqueda.vue'
import Encabezado from '../components/Encabezado.vue';
import SeccionCategorias from '../components/SeccionCategorias.vue'
import LibrosDestacados from '../components/LibrosDestacados.vue';
import BotonesUsuario from '../components/BotonesUsuario.vue';
import { auth, logout } from '../firebase';

export default {
  name: 'Home',
  data(){
    return {
      user: auth.currentUser
    }
  },
  methods:{
    async deslogearse(){
      try{
        await logout(auth);
        console.log(this.user);
        alert("Has cerrado sesion");
        this.user = null;
      }catch(error){
        console.log(error);
      }
    }
  },
  components: {
    BarraDeBusqueda,
    SeccionCategorias,
    LibrosDestacados,
    Encabezado,
    BotonesUsuario
  },
  mounted(){
    console.log(this.user);
  }
}
</script>

<style scoped>
#sesion-iniciada{
    display: flex;
    justify-content:right;
}

button{
    padding: 10px;
    cursor: pointer;
    width: 100%;
    font-weight: bold;
}

#boton-cerrarsesion, #nombre-usuario{
    margin-right: 30px;
    align-self: center;
}

#boton-cerrarsesion button{
    background-color: #ce7e0000;
    border: 2px solid #2986cc;
    padding: 10px 20px;
}

</style>