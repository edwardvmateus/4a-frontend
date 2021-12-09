<template>
  <div id="app">
    <div class="footer shadow">
      <div class="aliniando">
        <h1>Tienda virutal <b> LA GRANJA </b></h1>
      </div>
      <div class="buttons-footer">
        <button v-on:click="loadLogIn" class="btn btn-light">Login</button>

        <button v-on:click="loadSignUp" class="btn btn-info">Signup</button>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return{
      
    }
  },
  methods: {
    loadLogIn() {
      this.$router.push({ name: "logIn" });
    },
    loadSignUp(){
      this.$router.push({name:"signUp"})
    }
  },
  created: function () {
    this.loadLogIn();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;300;600&display=swap");
.footer {
  display: flex;
  background: linear-gradient(to right, rgb(58, 57, 57), white);
  justify-content: space-between;
  font-family: "Readex Pro", sans-serif;
  padding: 20px 40px;
}
.aliniando{
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
.buttons-footer button{
  margin: 0;
}

body {
  margin: 0;
}
</style>
