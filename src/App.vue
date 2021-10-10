<template>
  <div id="main">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>
<script>

export default{
  name: 'App'
}
</script>

<style>
body {
  background-color: #FADCD9;

}

#main{
  max-width: 1100px;
  margin: 0 auto;
}

.Cuerpo {
    background-color: #E8B4B8;
}
</style>
