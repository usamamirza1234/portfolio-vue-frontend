<template>
  <div>
    <h2 class="title title--h2 ">
      <span class="box icon-box"><i class="font-icon"><MdLaptopIcon/></i></span>
      Professional Experience
    </h2>

    <MyWorkPlaces
        v-for="x in work_places"
        v-bind:key="x"
        :last_date=x.last_date
        :joining_date=x.joining_date
        :name=x.name
        :designation=x.designation
        :work_place_logo=x.work_place_logo
        :roles= x.roles
    />


<!--    <div class="company_timeline">-->
<!--      <div class="company_details">-->
<!--        <span class="box icon-box"><i class="font-icon"></i></span>-->
<!--        <div class="company_details_info">-->
<!--          <span class="title title&#45;&#45;h2">Veroke</span>-->
<!--          <h5 class="title title&#45;&#45;h4 company_details_role_title"> Software Engineer </h5>-->
<!--          <span class="professional_timeline__period">2020 — Present</span>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="professional_timeline">-->
<!--        <article class="professional_timeline__item">-->
<!--          <h5 class="title title&#45;&#45;h4 professional_timeline__title">Sr. Ruby on Rails <span class="professional_timeline__period">2021 — Present</span> </h5>-->
<!--          <p class="professional_timeline__description">sdfsfd sdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfd sdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfd sdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfd sdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfd</p>-->
<!--        </article>-->
<!--      </div>-->
<!--      <div class="professional_timeline">-->
<!--        <article class="professional_timeline__item">-->
<!--          <h5 class="title title&#45;&#45;h4 professional_timeline__title">Jr. Ruby on Rails <span class="professional_timeline__period">2020 — 2020</span> </h5>-->
<!--          <p class="professional_timeline__description">sdfsfd</p>-->
<!--        </article>-->
<!--      </div>-->
<!--    </div>-->
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