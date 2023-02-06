<template>
<div class="nav-container">
  <ul class="nav">
<!--    <router-link tag="li" active-class="active nav__item" to="/" exact><a>Home</a></router-link>-->
<!--    <router-link tag="li" active-class="active nav__item"  to="/resume"><a>About</a></router-link>-->
<!--    <router-link tag="li" active-class="active nav__item" to="/contact"><a>Permisison</a></router-link>-->

    <li class="nav__item"> <router-link active-class="active-link" exact-active-class="exact-active-link" to="/">About</router-link></li>
    <li class="nav__item"> <router-link active-class="active-link" exact-active-class="exact-active-link" to="/resume">Resume</router-link></li>
    <li class="nav__item"> <router-link active-class="active-link" exact-active-class="exact-active-link" to="/contact">Contact</router-link></li>

    <!--    <li class="nav__item"> <router-link to="/">Home</router-link></li>-->
<!--    <li class="nav__item"> <router-link to="/resume">Resume</router-link></li>-->
<!--    <li class="nav__item"> <router-link to="/contact">Contact</router-link></li>-->
<!--    <li class="nav__item"><a href="#"><router-link to="/resume">Resume</router-link></a></li>-->
<!--    <li class="nav__item"><a href="#"><router-link to="/contact">Contact</router-link></a></li>-->
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