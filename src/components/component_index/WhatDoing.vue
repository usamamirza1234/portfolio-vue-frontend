<template>
<div>
  <h2 class="title title--h2 mt-3">What I'm Doing</h2>
  <div class="row">
    <!-- Case Item -->
    <DoingItems/>

  </div>
</div>
</template>

<script>
import DoingItems from "@/components/component_index/DoingItems.vue";
export default {
  name: "WhatDoing",
  components:{
    DoingItems
  }
}
</script>

<style scoped>

</style>