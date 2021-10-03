<template>
  <div id="main">
    <div class="Encabezado">
      <h1>BIBLIOTECA PÚBLICA FILANDIA</h1>
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>

</script>

<style>
body {
    background-color: #FADCD9;
}
.Encabezado {
    background-color: #A49393;
}
.Cuerpo {
    background-color: #E8B4B8;
}
h1 {
    text-align: center;
    font-size: 50px;
}


</style>
