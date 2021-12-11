<template>
  <div>
    <div class="background"></div>
    <div class="formulario shadow-lg">
      <h3>Iniciar sesión</h3>
      <form id="myform" v-on:submit.prevent="processLogIn">
        <input
          name="username"
          v-model="credentials.username"
          class="form-control"
          type="text"
          placeholder="Usuario"
        />
        <input
          name="password"
          v-model="credentials.password"
          class="form-control"
          type="password"
          placeholder="Contraseña"
        />
        <p v-if="show_error">Usuario o contraseña incorrecta</p>
        <button class="btn btn-dark">
          <span v-if="!is_loading">Ingresar</span>
          <div
            v-if="is_loading"
            class="spinner-border text-light"
            role="status"
          ></div>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "LogIn",
  data: function () {
    return {
      is_loading: false,
      show_error: false,
      credentials: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    processLogIn: async function () {
      this.is_loading = true;
      console.log("Entrando");
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation LogIn($credentials: LoginInput!) {
              logIn(credentials: $credentials) {
                key
              }
            }
          `,
          variables: {
            credentials: this.credentials,
          },
        })
        .then((result) => {
          console.log(result);
          document.getElementById("myform").reset();
          let dataLogin = {
            username: this.credentials.username,
            token: result.data.logIn.key,
          };
          this.is_loading = false;
          this.$emit("loginComplete", dataLogin);
        })
        .catch((error) => {
          this.is_loading = false;
          this.show_error = true;
          console.log(error);
        });
    },
  },
  created: function () {},
};
</script>

<style>
.background {
  background-image: url("https://images.pexels.com/photos/4054850/pexels-photo-4054850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  height: calc(100vh - 78px);
}

.formulario {
  position: absolute;
  top: 40%;
  right: 32%;
  transform: translate(-25%, -25%);
  background: rgb(251, 255, 251);
  padding: 80px 50px;
  border-radius: 10px;
}
.formulario input,
button {
  margin-top: 20px;
}
.formulario label {
  margin-right: 20px;
}

.formulario h3 {
  text-align: center;
}
.formulario button {
  width: 220px;
}

.formulario p {
  color: red;
  font-size: 12px;
  text-align: center;
}

@media (max-width: 426px) {
  .formulario {
    position: absolute;
    top: 50%;
    right: -14%;
  }
}
</style>