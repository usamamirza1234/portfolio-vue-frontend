<template>
<div class="nav-container">
  <ul class="nav">
    <li class="nav__item"><a class="active" href="#"> <router-link to="/">Home</router-link></a></li>
    <li class="nav__item"><a href="#"><router-link to="/resume">Resume</router-link></a></li>
    <li class="nav__item"><a href="#"><router-link to="/contact">Contact</router-link></a></li>
  </ul>
</div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>