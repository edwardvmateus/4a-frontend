<template>
    <div>
        <div class="background"></div>
        <div class="formularioSignup formulario shadow-lg">
            <h3>Registrate Aqui </h3>
                <form  >
                    <div class="formFlex">
                        <div class="div-izq" >
                            <input name="username" class="form-control" type="text" placeholder="USUARIO">
                            <input name="name" class="form-control" type="text" placeholder="Nombre">
                            <input name="lastname" class="form-control" type="text" placeholder="Apellido">

                            <select name="gender" class="form-control">
                                <option value="M">Hombre</option> 
                                <option value="F">Mujer</option>     
                            </select>
                        </div>
                        <div>
                            <input name="phone"  class="form-control" type="tel" placeholder="Celular" >
                            <input name="email" class="form-control" type="email" placeholder="Email" multiple>
                            <input name="password1" class="form-control" type="password" placeholder="Ingresa password" >
                            <input name="password1" class="form-control" type="password" placeholder="Confirma password" >
                        </div>
                    </div>
                <button class="btn btn-dark buttonSignup">Ingresar</button>
            </form>
        </div>
    </div>
</template>

<script>
export default{
        name: "SingUp",
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
.formFlex{
    display: flex;
}
.div-izq{
    margin-right: 20px
}

.formularioSignup{
    position: absolute;
    top: 60%;
    right: 13%;
    transform: translate(-50%,-50%);
    background: rgb(251, 255, 251);
    padding: 80px 70px;
    border-radius: 10px

}
.formulario input,button,select{
    margin-top: 20px;
}
.formulario label{
    margin-right: 20px;
}

.formulario h3{
    text-align: center;
}
.buttonSignup{
    width: 220px;
    margin-left: 105px;
    margin-top: 40px;

    
}
</style>