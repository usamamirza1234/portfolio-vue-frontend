<template>
  <div>
    <h2 class="title title--h2 ">
      <span class="box icon-box"><i class="font-icon"><MdLaptopIcon/></i></span>
      Professional Experience
    </h2>

    <MyWorkPlaces
        v-for="(x, index) in work_places "
        v-bind:key="index"
        :last_date=x.last_date
        :joining_date=x.joining_date
        :name=x.name
        :designation=x.designation
        :work_place_logo=x.work_place_logo
        :roles= x.roles
    />
  </div>

</template>

<script>
import MdLaptopIcon from 'vue-ionicons/dist/md-laptop.vue'
import MyWorkPlaces from "@/components/component_resume/MyWorkPlaces.vue";


export default {
  name: "MyExperience",
  components: {
    MdLaptopIcon,
    MyWorkPlaces,
  },
  props: {
    work_places: Array,
    errors: Array,
  },
}
</script>

<style>
</style>