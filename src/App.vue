<template>
  <div id="app" class="flex flex-col justify-center">
    <NavBar />
    <div>
      <router-view :key="$route.path" />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './components/organisms/AppFooter'
import NavBar from './components/organisms/NavBar'
export default {
  name: 'app',
  components: {
    AppFooter,
    NavBar,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.content {
  flex: 1;
  display: flex;
}
.view {
  width: 100%;
  margin: 0 auto 0 auto;
}
</style>