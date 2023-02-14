<template>
  <div class="pb-0 pb-sm-2">
    <h1 class="title title--h1 title__separate">About Me</h1>
    <p>{{ user_profile.about_me }}</p>
  </div>
</template>

<script>
export default {
  name: "MySelf",
  created() {
    this.user_profile = JSON.parse(localStorage.getItem("user_profile"));
  }, data: function () {
    return{
      about: ''
    }
  }
}
</script>

<style>
</style>