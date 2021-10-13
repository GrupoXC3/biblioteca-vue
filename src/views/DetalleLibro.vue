<template>
    <router-link class="inicio" to="/">
      Inicio
    </router-link>
  <Encabezado />
  <div id="detalle-libro" v-cloak>
    <div id="imagen-libro">
      <img v-bind:src="libro.imagen" alt="">
      <div id="boton">
        <button v-on:click="mostrar(this.libro.descarga)">Descarga</button>
      </div>
    </div>
    <div id="datos-libro">
      <h2>{{libro.titulo}}</h2>
      <h3>{{libro.autor}}</h3>
      <p>{{libro.descripcion}}</p>
      <table>
        <tr>
          <td>Año</td>
          <td>{{libro.año}}</td>
        </tr>
        <tr>
          <td>Paginas</td>
          <td>{{libro.numero_de_paginas}}</td>
        </tr>
        <tr>
          <td>Categoría</td>
          <td>{{libro.categoria}}</td>
        </tr>
        <tr>
          <!-- <td>ISBN</td>
          <td>1234567</td> -->
        </tr>
    </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Encabezado from '../components/Encabezado.vue';

export default {
  name: 'DetalleLibro',
  data(){
    return {
      libro: {
        // autor: "Autor Lorem Ipsum 1",
        // año: 2018,
        // categoria: "Libro Album",
        // descripcion: "Velit mollit consectetur aute labore cillum voluptate reprehenderit. Est elit eu nulla elit ex exercitation esse. Adipisicing quis ipsum laboris. Aliqua officia do amet consectetur fugiat excepteur exercitation reprehenderit fugiat veniam labore culpa dolor nulla. Duis amet laboris amet reprehenderit ullamco. Qui deserunt minim sit. Non ut fugiat quis labore id sunt. Tempor anim quis dolor do duis mollit dolor fugiat Lorem ad labore occaecat.\r\nSit sit sint elit ex occaecat Lorem pariatur ut reprehenderit duis proident qui culpa aliquip eu. Enim Lorem ullamco adipisicing duis amet tempor ullamco incididunt quis nisi excepteur incididunt. Do anim sit do culpa. Aliqua culpa occaecat duis dolor aliquip irure. In aliquip aute nisi.\r\nSint dolor non consequat duis amet aute nulla tempor Lorem esse irure velit ut officia. Eu veniam excepteur aute pariatur ex et anim non labore mollit. In officia et proident consequat commodo nulla ad proident in ut consectetur occaecat. Ad non deserunt aliquip non proident magna aliqua et et nisi sunt aliqua nulla nulla. Tempor exercitation reprehenderit ut officia eu quis aliqua proident.",
        // id: 1,
        // imagen: "https://via.placeholder.com/245x360/000000/FFFFFF/?text=Titulo%20libro%20lorem%201",
        // puntaje: 15,
        // titulo: "Titulo libro lorem 1"
      }
    }
  },
  components:{
    Encabezado
  },

  methods:{
    mostrar(link){
      window.open(link);
    }
  },

  mounted(){
    axios.get(`https://basededatos-api.vercel.app/libros/${this.$route.params.id}`)
      .then((response)=>{
        this.libro = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
</script>

<style scoped>
.inicio{
  font-weight: bold;
  font-size: 16;
  border: 1px black solid;
  border-radius: 5px;
  display: inline-block;
  padding: 8px 15px;
}

[v-cloak]{
  display:none;
}

button{
  display: block;
  text-align: center;
}

#detalle-libro{
  display: flex;

}

#datos-libro{
  margin-left: 30px;
}

h2{
  margin-top: 0;
  text-align: center;
}

#imagen-libro{
  margin-bottom: 50px;
}

td{
  width: 100px;
}

@media screen and (max-width: 600px) {
    #imagen-libro{
      text-align: center;
      display: flex;
      align-items: center;
    }
    #detalle-libro {
      display: block;
    }
    #boton{
      flex-grow: 1;
    }
    button{
      max-height: 30px;
      max-width: 80px;
      margin: auto;
    }
}

</style>