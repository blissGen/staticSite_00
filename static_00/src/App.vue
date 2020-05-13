<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: '00' }">00</router-link> |
      <router-link to="{ name: '01' }">01</router-link> |
      <router-link to="{ name: '02' }">02</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
  text-align: left;
}

#nav a {
  text-decoration: none;
  font-weight: thin;
  color: #ff3ae5;
}

#nav a.router-link-exact-active {
  color: #00bcff;
}
</style>
