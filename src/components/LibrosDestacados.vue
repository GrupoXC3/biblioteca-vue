<template>
  <div class="destacados">
    <br>
    <div id="centro">
      <h2>Destacados</h2>
    </div>
    <div v-for="libro in librosDestacados" v-bind:key="libro.id" class="libros">
      <router-link v-bind:to="`/libros/${libro.id}`">
        <div class="img">
          <img v-bind:src="libro.imagen"/>
        </div>
        <h2>
          {{libro.titulo}}
        </h2>
      </router-link>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LibrosDestacados',
  data(){
    return {
      librosDestacados: [
        // {
        //   id: 1,
        //   imagen: 'https://via.placeholder.com/150',
        //   titulo: 'Lorem improvisado'
        // }
      ],
    }
  },
  created(){
    axios.get('https://basededatos-api.vercel.app/mas-destacados')
      .then((response)=>{
        console.log(response.data);
        this.librosDestacados = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
  color: black;
}

.destacados {
    text-align: center;
    border-top: 50px auto;
    /* height: 500px; */
    background-color: #E8B4B8;
    margin: 8px;
}

#centro {
    background-color: white;
    margin: auto;
    padding: 8px;
    border: 2px solid #E8B4B8;
    width: 200px;
}

#centro h2{
  margin: 0
}

.libros {
    width: 250px;
    display: inline-block;
    margin: 5px auto;
    text-align: center;
    background-color: white;
    border: 10px solid white;
    cursor: pointer;

}

.libros h2{
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.img {
    margin: 10px auto;
    border-radius: 5px;
    border: 2px solid #999;
    padding: 13px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-size: cover;
}

.img img {
    width: 100%;
    height: 360px;
}

.PiePagina {
    background-color: #67595E;
}

@media screen and (max-width: 480px) {
    #encabezado {
        height: auto;
    }
    #cuerpo {
        width: auto;
    }
    #libros {
        display: none;
    }
}
</style>