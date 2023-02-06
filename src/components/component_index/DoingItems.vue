<template>
  <div class="col-12 col-lg-6">
    <div class="case-item box box-inner">
      <div>
        <h3 class="title title--h3"> {{ name }} </h3>
        <p class="case-item__caption"> {{ description }} </p>
        <div class="case_items_array"  v-for="x in images" v-bind:key="x">
          <img  class="case-item__icon" :src="require('@/assets/images/' + x + '')"  alt="tech"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DoingItems",
  props: {
    name: String,
    description: String,
    images: Array
  },
  data: function() {
    return {

    }
  }
}
</script>

<style scoped>

</style>