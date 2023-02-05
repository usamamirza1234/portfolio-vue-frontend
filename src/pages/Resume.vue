<template>
  <div class="col-12 col-md-12 col-xl-9">
    <div class="box-outer">
      <NavBar/>
      <MySelf/>
    </div>
  </div>
</template>


<script>
import NavBar from "@/components/NavBar.vue";
import MySelf from "@/components/component_index/MySelf.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Resume",
  components: {
    NavBar,
    MySelf,
  },
}
</script>

<style scoped>

</style>