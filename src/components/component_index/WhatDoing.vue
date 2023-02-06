<template>
<div>
  <h2 class="title title--h2 mt-3">What I'm Doing</h2>
  <div class="row" v-for="x in technologies" v-bind:key="x">
    <!-- Case Item -->
    <DoingItems
        :name= x.name
        :description= x.description
        :images= x.images
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
  data: function () {
    return {
      technologies: [
        {
          name: "Backend Development",
          description: 'Some Details',
          images: [("ror.svg"), ("node.svg"),]
        },
        {
          name: "Cloud Technologies",
          description: 'Some Details',
          images: [("ansible.svg"), ("aws.svg"), ("docker.svg"), ("elastic.svg"), ("terraform.svg"), ("puppet.svg"),]
        },
        {
          name: "Frontend Development",
          description: 'Some Details',
          images: [("react.svg"), ("vue.svg"), ("java.svg"),]
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>