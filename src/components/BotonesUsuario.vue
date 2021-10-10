<template>
    <div id="botones-usuario">
        <div id="boton-login" type="button" class="btn btn-primary">
            <router-link to="login">
                <button>
                    Iniciar Sesion
                </button>
            </router-link>
        </div>
        <div id="boton-registro" type="button" class="btn btn-outline-primary">
            <router-link to="registro">
                <button>
                    Registrate
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BotonesUsuario'
}
</script>

<style scoped>
#botones-usuario{
    display: flex;
    justify-content:right;
}

button{
    padding: 10px;
    cursor: pointer;
    width: 100%;
    font-weight: bold;
}

#boton-login, #boton-registro{
    margin-right: 30px;
}

#boton-login button{
    background-color: #ce7e0000;
    border: 0;
    border-bottom: 1px solid #2986cc;
}

#boton-registro button{
    background-color: #ce7e0000;
    border: 2px solid #2986cc;
    padding: 10px 20px;
}
</style>