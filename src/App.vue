<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <div class="navbar bg-base-100">
    <router-link to="/" class="btn btn-ghost normal-case text-xl">UESR LIST --- Sample Page --- Vite + Vue + Vue Router
    </router-link>
  </div>
  <div class="content">
    <router-view />
  </div>
</template>

<style scoped>
.content {
  width: 50vw;
  margin: 0 auto;
}
</style>
