<template>
  <div id="app">
    <div class="footer shadow">
      <div class="aliniando">
        <h1>Tienda virutal &nbsp; <b> LA GRANJA </b></h1>
      </div>
      <div class="buttons-footer">
        <button v-if="!isAuth" v-on:click="loadLogIn" class="btn btn-light">
          Ingresar
        </button>
        <button v-if="!isAuth" v-on:click="loadSignUp" class="btn btn-info">
          Registro
        </button>
        <button v-if="isAuth" v-on:click="signOut" class="btn btn-info">
          Cerrar sesión
        </button>
      </div>
    </div>
    <div>
      <router-view v-on:loginComplete="loginComplete"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      isAuth: false,
    };
  },
  methods: {
    verifyAuth() {
      this.isAuth = localStorage.getItem("isAuth") || false;
      if (this.isAuth) {
        console.log("Pagina de inicio");
      } else {
        this.loadLogIn();
        console.log("Pagina de Login");
      }
    },
    loadLogIn() {
      this.$router.push({ name: "logIn" });
    },
    loadSignUp() {
      this.$router.push({ name: "signUp" });
    },
    loginComplete(data) {
      this.isAuth = true;
      localStorage.setItem("token", data.token);
      localStorage.setItem("isAuth", this.isAuth);
      localStorage.setItem("username", data.username);
      this.verifyAuth();
    },
    signOut() {
      this.loadLogIn();
      this.isAuth = false;
      localStorage.clear();
    },
  },
  created: function () {
    this.verifyAuth();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;300;600&display=swap");
.footer {
  display: flex;
  background: linear-gradient(to right, rgb(57, 58, 57), white);
  justify-content: space-between;
  font-family: "Readex Pro", sans-serif;
  padding: 20px 40px;
}

.aliniando {
  display: flex;
  align-items: center;
}

.footer h1 {
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.buttons-footer {
  width: 180px;
  display: flex;
  justify-content: space-between;
}
.buttons-footer button {
  margin: 0;
}

body {
  margin: 0;
}
</style>
