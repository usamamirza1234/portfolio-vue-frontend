<template>
  <div class="col-12 col-md-12 col-xl-9">
    <div class="box-outer">
      <NavBar/>
      <MySelf/>
      <WhatDoing/>
      <MyTestimonials/>
      <MyClients/>
    </div>
  </div>
</template>

<script>
// import SideBar from "@/components/component_root/SideBar.vue";
import NavBar from "@/components/NavBar.vue";
import MySelf from "@/components/component_index/MySelf.vue";
import WhatDoing from "@/components/component_index/WhatDoing.vue";
import MyTestimonials from "@/components/component_index/MyTestimonials.vue";
import MyClients from "@/components/component_index/MyClients.vue";

// import GithubIcon from "vue-ionicons/dist/logo-github.vue";
// import LinkedinIcon from "vue-ionicons/dist/logo-linkedin.vue";
// import TwitterIcon from "vue-ionicons/dist/logo-twitter.vue";
// import FacebookIcon from "vue-ionicons/dist/logo-facebook.vue";
// import YoutubeIcon from "vue-ionicons/dist/logo-youtube.vue";
// import MailIcon from "vue-ionicons/dist/md-mail.vue";


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Index",
  components: {
    NavBar,
    MySelf,
    WhatDoing,
    MyTestimonials,
    MyClients,
  },
}
</script>

<style>


</style>