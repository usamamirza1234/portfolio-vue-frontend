<template>
  <div>
    <h2 class="title title--h2 ">
      <span class="box icon-box"><i class="font-icon"><MdLaptopIcon/></i></span>
      Professional Experience
    </h2>
    <div class="company_timeline">
      <div class="company_details">
        <span class="box icon-box"><i class="font-icon"></i></span>
        <div class="company_details_info">
          <span class="title title--h2">Veroke</span>
          <h5 class="title title--h4 company_details_role_title"> Software Engineer </h5>
          <span class="professional_timeline__period">2020 — Present</span>
        </div>
      </div>
      <div class="professional_timeline">
        <article class="professional_timeline__item">
          <h5 class="title title--h4 professional_timeline__title">Sr. Ruby on Rails <span class="professional_timeline__period">2021 — Present</span> </h5>
          <p class="professional_timeline__description">sdfsfd sdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfd sdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfd sdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfd sdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfdsdfsfd</p>
        </article>
      </div>
      <div class="professional_timeline">
        <article class="professional_timeline__item">
          <h5 class="title title--h4 professional_timeline__title">Jr. Ruby on Rails <span class="professional_timeline__period">2020 — 2020</span> </h5>
          <p class="professional_timeline__description">sdfsfd</p>
        </article>
      </div>
    </div>

    <!--    <div class="professional_timeline">-->
    <!--      &lt;!&ndash; Item &ndash;&gt;-->
    <!--      <article class="professional_timeline__item">-->
    <!--       <div>-->
    <!--         <span class="box "><i class=" "><MailIcon/></i></span>-->
    <!--         <div>-->
    <!--           <h5 class="title title&#45;&#45;h4 timeline__title">University School of the Arts</h5>-->
    <!--           <span class="timeline__period">2117 — 2111</span>-->
    <!--           <p class="timeline__description">sdfsfd</p>-->
    <!--         </div>-->
    <!--       </div>-->
    <!--      </article>-->

    <!--    </div>-->
  </div>

</template>

<script>
import MdLaptopIcon from 'vue-ionicons/dist/md-laptop.vue'


export default {
  name: "MyExperience",
  components: {
    MdLaptopIcon,
  },
}
</script>

<style>
</style>