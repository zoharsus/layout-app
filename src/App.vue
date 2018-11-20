<template>
  <div id="app">
    <b-navbar fixed="top" toggleable="xxl" type="light" variant="primary">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-navbar-brand to="/">All Layouts</b-navbar-brand>
          <b-navbar-brand to="/configure/0">Configuration</b-navbar-brand>
        </b-navbar-nav>
      </b-collapse>
      <img src="./assets/elbitlogo.png">
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

img {
  float: right;
  height: 30px;
  
}
</style>
