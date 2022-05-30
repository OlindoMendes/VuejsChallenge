<template>
  <div>
    <MainApp>
      <router-view />
    </MainApp>
  </div>
</template>

<script>

import MainApp from './components/MainApp.vue'

export default {
  name: 'App',
  components: {
    MainApp
  }

}
</script>

<style>

</style>
