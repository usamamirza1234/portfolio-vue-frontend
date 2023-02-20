<template>
  <div class="col-12 col-md-12 col-xl-9">
    <div class="box-outer">
      <NavBar/>
      <h1 class="title title--h1 title__separate">Resume</h1>

      <MyExperience v-if=" this.time_line.work_places.length > 0 " :errors="time_line_errors"
                    :work_places="this.time_line.work_places"/>
      <MyEducation v-if=" this.time_line.educations.length > 0 " :educations="this.time_line.educations"
                   :errors="time_line_errors"/>
      <MySkills v-if=" this.time_line.skills.length > 0 " :errors="time_line_errors" :skills="this.time_line.skills"/>
    </div>
  </div>
</template>


<script>
import NavBar from "@/components/NavBar.vue";
import MyEducation from "@/components/component_resume/MyEducation.vue";
import MyExperience from "@/components/component_resume/MyExperience.vue";
import MySkills from "@/components/component_resume/MySkills.vue";
import {resume_api_mixin} from '@/mixins/resume_api_mixin'

export default {
  mixins: [resume_api_mixin],
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Resume",
  components: {
    NavBar,
    MyEducation,
    MyExperience,
    MySkills,
  },
  data: function () {
    return {
      // time_line: [],
      // time_line_errors: [],
    }
  }, mounted() {

  }
}
</script>

<style scoped>

</style>