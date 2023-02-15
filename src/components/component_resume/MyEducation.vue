<template>
  <div>
    <div class="education"> <h2 class="title title--h2 "><span class="box icon-box"><i class="font-icon"><MdBookIcon/></i></span>Education</h2></div>
    <EducationInstitute  v-for="x in educations"
                         v-bind:key="x"
                         :last_date=x.last_date
                         :joining_date=x.joining_date
                         :institute_name=x.name
                         :degree_name=x.degree_name
                         :location=x.location
                         :education_details= x.details
    />
  </div>
</template>

<script>
import EducationInstitute from "@/components/component_resume/EducationInstitute.vue";
import MdBookIcon from 'vue-ionicons/dist/md-book.vue'

export default {
  name: "MyEducation",
  props: {
    educations: Array,
    errors: Array,
  },
  components:{
    EducationInstitute,
    MdBookIcon
  }
}
</script>

<style>
</style>