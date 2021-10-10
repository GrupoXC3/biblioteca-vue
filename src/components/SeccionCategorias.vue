<template>
    <div id="categorias">
        <h2>Libros por categorías</h2>
        <div class="generos">
            <router-link to="/busqueda?categoria=Novela" class="options">Novela</router-link>
            <router-link to="/busqueda?categoria=Cuento" class="options">Cuento</router-link>
            <router-link to="/busqueda?categoria=Mitos y leyendas" class="options">Mitos y Leyendas</router-link>
            <router-link to="/busqueda?categoria=Poesia" class="options">Poesía</router-link>
            <!-- <router-link to="#" class="options">c5</router-link> -->
        </div>

        <div class="generos">
            <router-link to="/busqueda?categoria=Teatro" class="options">Teatro</router-link>
            <router-link to="/busqueda?categoria=Libro Album" class="options">Libro Album</router-link>
            <router-link to="/busqueda?categoria=Historieta" class="options">Historieta</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SeccionCategorias'
}
</script>

<style scoped>
#categorias{
    margin: 40px 0;
}

#categorías h2{
    margin-bottom: 10px;
}

.generos{
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
}

.options{
    text-align: center;
    font-size: 18px;
    background:#FB9F89;
    padding: 11px 20px;
    margin:0 5px;
    border-radius: 10px;
    text-decoration: none;
    line-height: 20px;
}
</style>