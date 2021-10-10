<template>
    <section class="form">
        <div class="from">
            <div class="card-title">
                <h1>Inicio de sesion</h1>
                <section class="form-logo">
                    <img src="../assets/pngwing.com.png" width="100" height="100" alt="120" />
                </section>
            </div>
            <div class="grupo">
                <input type="email" id="exampleInputEmail1" v-model="email" aria-describedby="emailHelp" placeholder="Ingrese su email" required>
            </div>
            <div class="grupo">
                <input type="password" id="Input" v-model="password" placeholder="Ingrese su contraseña" required>
                <img v-on:click="ojo" src="../assets/Show.png" width="20" height="20" alt="2" class="icon" id="Ojo">
            </div>
            <br>
                <h2>Nunca compartiremos su correo electrónico con nadie.</h2>
            <br>
                <button v-on:click="login">Confirmar</button>
            <br>
            <h3>
                <router-link to="registro">No tienes cuenta?, Registrate</router-link>
            </h3>
        </div>
    </section>
</template>

<script>

import {loginUsuario, auth, configPersistencia, persistenciaNavegador, actualizarUsuario} from '../firebase';


export default {
    name: 'Login',
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods:{
        async login(){
            try {
                let persistencia = await configPersistencia(auth, persistenciaNavegador)
                let userCredential = await loginUsuario(auth, this.email, this.password);
                this.user = userCredential.user;
                await actualizarUsuario(auth.currentUser, {
                        displayName: this.nombre,
                        photoURL: "https://example.com/jane-q-user/profile.jpg"
                    });
                console.log(this.user);
                alert('Bienvenido: ' + this.user.displayName);
                this.$router.push({path: '/'});

            } catch(error){
                console.log(error);
                if (error.code === "auth/user-not-found"){
                    alert("El email no se encuentra registrado")
                } else if (error.code === "auth/wrong-password"){
                    alert("Contraseña incorrecta");
                }
            }
        },
        ojo(){
            var ojo = document.getElementById('Ojo');
            var input = document.getElementById('Input');

            if (input.type === "password") {
                input.type = "text";
                ojo.style.opacity = 1;
            } else {
                input.type = "password";
                ojo.style.opacity = 0.6;
            }
        }
    }
}
</script>

<style scoped>

h1 {
    text-align: center;
    font-weight: 700;
    color: #686868;
}

h2 {
    color: black;
    text-align: left;
    opacity: 60%;
    font-size: 15px;
}

h3 {
    color: black;
    text-align: center;
    opacity: 60%;
    font-size: 15px;
}

h4 {
    margin-top: 12px;
    text-align: center;
    color: #686868;
    font-size: 25px;
    margin-bottom: 60px;
}

.form {
    width: 400px;
    background-color: #ffffff;
    padding: 30px;
    margin: auto;
    margin-top: 15px;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.8);
    font-size: 18px;
}

.grupo {
    margin-top: 12px;
    width: 400px auto;
    position: relative;
    margin-bottom: 12px;
}

.grupo2 {
    margin-top: 12px;
    width: 400px auto;
    position: relative;
    margin-bottom: 30px;
}

.form-logo {
    margin-top: 25px;
    text-align: center;
    padding: 10px;
}

input {
    font-family: "Arial";
    background: white;
    color: black;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
}

button {
    font-family: 'Arial';
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #b67878, #67595E);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #b67878, #67595E);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border: none;
    display: block;
    width: 80%;
    margin: 10px auto;
    height: 40px;
    font-size: 18px;
    cursor: pointer;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 6.8);
    color: white;
}

@media screen and (max-width:500px) {
    .form {
        width: 80%;
    }
}

</style>