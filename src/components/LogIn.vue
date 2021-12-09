<template>
    <div>
        <div class="background"></div>
        <div class="formulario shadow-lg">
            <h3>Iniciar sesion </h3>
            <form id="myform" v-on:submit.prevent="processLogIn">
                    <input name="username" v-model="credentials.username" class="form-control" type="text" placeholder="Ingrese su usuario">
                    <input name="password" v-model="credentials.password" class="form-control" type="password" placeholder="**************" >
                    <p v-if="show_error">Usuario o contraseña incorrecta</p>
                <button class="btn btn-dark">Ingresar</button>
            </form>
        </div>
    </div>
</template>

<script>
import gql from "graphql-tag";

    export default{
        name: "LogIn",
        data:function(){
            return{
                show_error:false,
                credentials:{
                    username:"", 
                    password:""
                }
            }
        },
        methods: {
            processLogIn: async function () {
            console.log("Entrando")
            await this.$apollo.mutate({
                mutation: gql`
                mutation LogIn($credentials: LoginInput!) {
                    logIn(credentials: $credentials) {
                        key
                    }
                }
                `,
                variables: {
                credentials: this.credentials
                }
            })
            .then((result) => {
                console.log(result)
                document.getElementById('myform').reset();
                let dataLogin={
                    username: this.credentials.username,
                    token:result.data.logIn.key
                }
                
                this.$emit("loginComplete", dataLogin)
                
            })
            .catch((error) => {
                this.show_error=true
                console.log(error) 
            })
            }
        },
        created: function(){} 
    }
</script>

<style>
.background{
    background-image: url("https://images.pexels.com/photos/4054850/pexels-photo-4054850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    height: calc(100vh - 78px);
}

.formulario{
    position: absolute;
    top: 50%;
    right: 33%;
    transform: translate(-25%,-25%);
    background: rgb(251, 255, 251);
    padding: 80px 70px;
    border-radius: 10px

}
.formulario input,button{
    margin-top: 20px;
}
.formulario label{
    margin-right: 20px;
}


.formulario h3{
    text-align: center;
}
.formulario button{
    width: 220px;
    
}

.formulario p{
        color: red;
        font-size: 12px;
        text-align: center;
}

@media(max-width:426px){
.formulario{
    position: absolute;
    top: 50%;
    right: -14%;
}
}


</style>