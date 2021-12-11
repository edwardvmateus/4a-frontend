<template>
  <div id="singup">
    <div class="background"></div>
    <div class="formularioSignup formulario shadow-lg">
      <h3>Regístrate aquí</h3>
      <form id="myform2" v-on:submit.prevent="processSignUp">
        <div class="formFlex">
          <div class="div-izq">
            <input
              v-model="credentials.username"
              name="username"
              class="form-control"
              type="text"
              placeholder="Usuario"
            />
            <input
              v-model="credentials.first_name"
              name="name"
              class="form-control"
              type="text"
              placeholder="Nombre"
            />
            <input
              v-model="credentials.last_name"
              name="lastname"
              class="form-control"
              type="text"
              placeholder="Apellido"
            />

            <select
              v-model="credentials.gender"
              name="gender"
              class="form-control"
            >
              <option value="" disabled selected>Género</option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
            </select>
          </div>
          <div>
            <input
              v-model="credentials.phone_number"
              name="phone"
              class="form-control"
              type="tel"
              placeholder="Celular"
            />
            <input
              v-model="credentials.email"
              name="email"
              class="form-control"
              type="email"
              placeholder="Correo electrónico"
              multiple
            />
            <input
              v-model="credentials.password1"
              name="password1"
              class="form-control"
              type="password"
              placeholder="Contraseña"
            />
            <input
              v-model="credentials.password2"
              name="password1"
              class="form-control"
              type="password"
              placeholder="Confirmar contraseña"
            />
          </div>
        </div>
        <button class="btn btn-dark buttonSignup">Crear cuenta</button>
      </form>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "SignUp",
  data: function () {
    return {
      credentials: {
        username: "",
        first_name: "",
        last_name: "",
        gender: "",
        phone_number: "",
        email: "",
        password1: "",
        password2: "",
      },
    };
  },
  methods: {
    processSignUp: async function () {
      console.log("Entrando");
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation Mutation($credentials: RegisterUserInput!) {
              Register(credentials: $credentials) {
                key
              }
            }
          `,
          variables: {
            credentials: this.credentials,
          },
        })
        .then((result) => {
          document.getElementById("myform2").reset();
          console.log(result);
          let dataLogin = {
            username: this.credentials.username,
            token: result.data.Register.key,
          };
          this.$emit("loginComplete", dataLogin);
        })
        .catch((error) => {
          console.log(error);
          alert("Paila");
        });
    },
  },
  created: function () {},
};
</script>

<style>
#signup .background {
  background-image: url("https://images.pexels.com/photos/4054850/pexels-photo-4054850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  height: calc(100vh - 78px);
}
.formFlex {
  display: flex;
}
.div-izq {
  margin-right: 20px;
}

.formularioSignup {
  position: absolute;
  top: 57%;
  right: 10%;
  transform: translate(-50%, -50%);
  background: rgb(251, 255, 251);
  padding: 55px 40px;
  border-radius: 10px;
}

.formulario input,
button,
select {
  margin-top: 25px;
}
.formulario label {
  margin-right: 20px;
}

.formulario h3 {
  text-align: center;
}
.buttonSignup {
  width: 220px;
  margin-left: 130px;
  margin-top: 40px;
}
@media (max-width: 426px) {
  .formularioSignup {
    width: 400px;
    padding: 20px 10px;
    position: absolute;
    top: 58%;
    right: -45%;
  }
  .buttonSignup {
    margin: 20px;
    margin-left: 80px;
  }
}
</style>