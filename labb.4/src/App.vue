<template>
  <div>
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/navigation/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>

</style>
