<template>
  <div id="app">
      <p>Hello Vue!</p>
      <header/>
      <v-main-wrapper/>
      <footer/>
  </div>
</template>

<script>
import './assets/styles/styles.scss'

import  footer from './components/footer.vue'
import  header from './components/header.vue'
import vMainWrapper from './components/v-main-wrapper.vue'


export default {
  name: "App",
  components: {
      vMainWrapper,
      footer,
      header
  },
    data(){
      return {

      }
    },
    methods:{

    }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
