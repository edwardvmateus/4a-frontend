<template>
    <div>
        <div class="background"></div>
        <div class="formulario shadow-lg">
            <h3>Iniciar sesion </h3>
            <form >
                    <input name="username" class="form-control" type="text" placeholder="Ingrese su usuario">
                    <input name="password" class="form-control" type="password" placeholder="**************" >
                <button class="btn btn-dark">Ingresar</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default{
        name: "LogIn",
        data:function(){},
        methods:{},
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
</style>