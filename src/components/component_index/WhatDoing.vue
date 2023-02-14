<template>
<div>
  <h2 class="title title--h2 mt-3">What I'm Doing</h2>
  <div class="row">
        <DoingItems
            v-for="x in tech_stacks"
            v-bind:key="x"
            :description=x.description
            :tech_lang= x.tech_lang
            :name=x.name
        />
  </div>
</div>
</template>

<script>
import DoingItems from "@/components/component_index/DoingItems.vue";
export default {
  name: "WhatDoing",
  components: {
    DoingItems
  },
  props: {
    tech_stacks: Array,
    errors: Array,
    // images: Array
  },
  data: function () {
    return {}
  },
}
</script>

<style scoped>

</style>