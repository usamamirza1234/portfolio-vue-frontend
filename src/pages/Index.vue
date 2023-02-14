<template>
  <div class="col-12 col-md-12 col-xl-9">
    <div class="box-outer">

      <NavBar />
      <MySelf />
      <WhatDoing v-if=" tech_stacks_errors.length == 0 "  :tech_stacks="tech_stacks" :errors="tech_stacks_errors" />
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
import { api_mixin } from '@/mixins/api_mixin'



// import GithubIcon from "vue-ionicons/dist/logo-github.vue";
// import LinkedinIcon from "vue-ionicons/dist/logo-linkedin.vue";
// import TwitterIcon from "vue-ionicons/dist/logo-twitter.vue";
// import FacebookIcon from "vue-ionicons/dist/logo-facebook.vue";
// import YoutubeIcon from "vue-ionicons/dist/logo-youtube.vue";
// import MailIcon from "vue-ionicons/dist/md-mail.vue";


export default {
  mixins: [api_mixin],
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Index",
  components: {
    NavBar,
    MySelf,
    WhatDoing,
    MyTestimonials,
    MyClients,
  },
  data: function () {
    return {
      //images: [("react.svg"), ("vue.svg"), ("java.svg"),]
      tech_stacks: [],
      tech_stacks_errors: [],
    }
  }
}
</script>

<style>


</style>