<template>
    <Encabezado/>
    <BarraDeBusqueda />

    <div id="resultados">
        <div v-for="libro in libros_filtrados" v-bind:key="libro.id">
            <router-link v-bind:to="`/libros/${libro.id}`" class="libro-filtrado">
                <div class="img">
                    <img v-bind:src="libro.imagen" alt="">
                </div>
                <div class="libro-info">
                    <h3>{{libro.titulo}}</h3>
                    <h4>{{libro.autor}}</h4>
                    <div class="descripcion">{{libro.descripcion}}</div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
    import BarraDeBusqueda from '../components/BarraDeBusqueda.vue'
    import Encabezado from '../components/Encabezado.vue';
    import axios from 'axios';

    export default {
        name: 'Home',
        data(){
            return {
                libros_filtrados: [
                    // {
                    //     autor: "Autor Lorem Ipsum 1",
                    //     año: 2018,
                    //     categoria: "Libro Album",
                    //     descripcion: "Velit mollit consectetur aute labore cillum voluptate reprehenderit. Est elit eu nulla elit ex exercitation esse. Adipisicing quis ipsum laboris. Aliqua officia do amet consectetur fugiat excepteur exercitation reprehenderit fugiat veniam labore culpa dolor nulla. Duis amet laboris amet reprehenderit ullamco. Qui deserunt minim sit. Non ut fugiat quis labore id sunt. Tempor anim quis dolor do duis mollit dolor fugiat Lorem ad labore occaecat.\r\nSit sit sint elit ex occaecat Lorem pariatur ut reprehenderit duis proident qui culpa aliquip eu. Enim Lorem ullamco adipisicing duis amet tempor ullamco incididunt quis nisi excepteur incididunt. Do anim sit do culpa. Aliqua culpa occaecat duis dolor aliquip irure. In aliquip aute nisi.\r\nSint dolor non consequat duis amet aute nulla tempor Lorem esse irure velit ut officia. Eu veniam excepteur aute pariatur ex et anim non labore mollit. In officia et proident consequat commodo nulla ad proident in ut consectetur occaecat. Ad non deserunt aliquip non proident magna aliqua et et nisi sunt aliqua nulla nulla. Tempor exercitation reprehenderit ut officia eu quis aliqua proident.",
                    //     id: 1,
                    //     imagen: "https://via.placeholder.com/245x360/000000/FFFFFF/?text=Titulo%20libro%20lorem%201",
                    //     puntaje: 15,
                    //     titulo: "Titulo libro lorem 1"
                    // },
                    // {
                    //     autor: "Autor Lorem Ipsum 1",
                    //     año: 2018,
                    //     categoria: "Libro Album",
                    //     descripcion: "Velit mollit consectetur aute labore cillum voluptate reprehenderit. Est elit eu nulla elit ex exercitation esse. Adipisicing quis ipsum laboris. Aliqua officia do amet consectetur fugiat excepteur exercitation reprehenderit fugiat veniam labore culpa dolor nulla. Duis amet laboris amet reprehenderit ullamco. Qui deserunt minim sit. Non ut fugiat quis labore id sunt. Tempor anim quis dolor do duis mollit dolor fugiat Lorem ad labore occaecat.\r\nSit sit sint elit ex occaecat Lorem pariatur ut reprehenderit duis proident qui culpa aliquip eu. Enim Lorem ullamco adipisicing duis amet tempor ullamco incididunt quis nisi excepteur incididunt. Do anim sit do culpa. Aliqua culpa occaecat duis dolor aliquip irure. In aliquip aute nisi.\r\nSint dolor non consequat duis amet aute nulla tempor Lorem esse irure velit ut officia. Eu veniam excepteur aute pariatur ex et anim non labore mollit. In officia et proident consequat commodo nulla ad proident in ut consectetur occaecat. Ad non deserunt aliquip non proident magna aliqua et et nisi sunt aliqua nulla nulla. Tempor exercitation reprehenderit ut officia eu quis aliqua proident.",
                    //     id: 2,
                    //     imagen: "https://via.placeholder.com/245x360/000000/FFFFFF/?text=Titulo%20libro%20lorem%201",
                    //     puntaje: 15,
                    //     titulo: "Titulo libro lorem 1"
                    // },
                    // {
                    //     autor: "Autor Lorem Ipsum 1",
                    //     año: 2018,
                    //     categoria: "Libro Album",
                    //     descripcion: "Velit mollit consectetur aute labore cillum voluptate reprehenderit. Est elit eu nulla elit ex exercitation esse. Adipisicing quis ipsum laboris. Aliqua officia do amet consectetur fugiat excepteur exercitation reprehenderit fugiat veniam labore culpa dolor nulla. Duis amet laboris amet reprehenderit ullamco. Qui deserunt minim sit. Non ut fugiat quis labore id sunt. Tempor anim quis dolor do duis mollit dolor fugiat Lorem ad labore occaecat.\r\nSit sit sint elit ex occaecat Lorem pariatur ut reprehenderit duis proident qui culpa aliquip eu. Enim Lorem ullamco adipisicing duis amet tempor ullamco incididunt quis nisi excepteur incididunt. Do anim sit do culpa. Aliqua culpa occaecat duis dolor aliquip irure. In aliquip aute nisi.\r\nSint dolor non consequat duis amet aute nulla tempor Lorem esse irure velit ut officia. Eu veniam excepteur aute pariatur ex et anim non labore mollit. In officia et proident consequat commodo nulla ad proident in ut consectetur occaecat. Ad non deserunt aliquip non proident magna aliqua et et nisi sunt aliqua nulla nulla. Tempor exercitation reprehenderit ut officia eu quis aliqua proident.",
                    //     id: 3,
                    //     imagen: "https://via.placeholder.com/245x360/000000/FFFFFF/?text=Titulo%20libro%20lorem%201",
                    //     puntaje: 15,
                    //     titulo: "Titulo libro lorem 1"
                    // }
                ]
            }
        },
        components:{
            Encabezado,
            BarraDeBusqueda
        },
        mounted(){
            console.log(this.$route.query.categoria);
            axios.get(`https://basededatos-api.vercel.app/libros/?categoria=${this.$route.query.categoria}`)
            .then((response)=>{
                console.log(response.data);
                this.libros_filtrados = response.data;
            })
            .catch((error) => {
                console.log(error);
            })
        }
        }

</script>

<style>
    a{
        color: black;
        text-decoration: none;
    }

    #resultados{
        border: 1px solid grey;
        margin-top: 100px;
        padding: 30px;
    }

    .libro-filtrado{
        display: flex;
        margin-bottom: 20px;
        border-bottom: 1px solid grey;
        width: 100%;
        height: 150px;
    }

    #resultados img{
        width:100px;
        height:130px;
    }

    #resultados h3, #resultados h4{
        margin: 0;
    }

    .libro-info{
        margin-left: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .libro-filtrado .descripcion{
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>