<template>
  <div id="app">
    <Nav />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import Nav from './components/nav.vue';
  export default {
    name        : 'App',
    components  : {
      Nav
    }
  }
</script>
