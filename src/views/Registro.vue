<template>
    <router-link class="inicio" to="/">
    Inicio
    </router-link>
    <section class="form">
        <h4>Registro de usuario</h4>
        <div class="grupo2">
            <input class="controls" v-model="nombre" type="text" name="nombres" id="nombres" placeholder="Ingrese su nombre ">
        </div>
        <div class="grupo2">
            <input class="controls" v-model="email" type="email" name="e-mail" id="email " placeholder="Ingrese su e-mail ">
        </div>
        <div class="grupo2">
            <input class="controls" v-model="password" type="password" name="contrasena" id="pass1" placeholder="Ingrese su contraseña ">
        </div>
        <br>
        <h2>La contraseña debe contener numeros y letras</h2>
        <br>
        <button type="submit " class="registrar" v-on:click="registro">Registrar</button>
        <h3> <router-link to="login">¿Ya tienes una cuenta? Inicia Sesion</router-link>
        </h3>
    </section>
</template>

<script>
import {createUser, auth, configPersistencia, persistenciaNavegador, actualizarUsuario} from '../firebase';

export default {
    name: 'Registro',
    data(){
        return {
            user: {},
            email: '',
            password: '',
            nombre:''
        }
    },
    methods:{
        async registro(){
            try {
                let persistencia = await configPersistencia(auth, persistenciaNavegador)
                let userCredential = await createUser(auth, this.email, this.password);
                this.user = userCredential.user;
                await actualizarUsuario(auth.currentUser, {
                    displayName: this.nombre,
                    photoURL: "https://example.com/jane-q-user/profile.jpg"
                });
                alert('Registro con exito: ' + this.user.displayName + ", tu sesion se ha iniciado");
                this.$router.push({path: '/'});

            } catch (error) {
                console.log(error);
                if (error.code == "auth/email-already-in-use"){
                    alert('El email ' + this.email + ' ya está en uso');
                } else if (error.code == 'auth/invalid-email'){
                    alert('El formato del email no es correcto');
                } else if (error.code == 'auth/weak-password'){
                    alert('La contraseña debe tener mas de 6 caracteres');
                }
            }

        }
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