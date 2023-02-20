<template>
  <div class="company_timeline">
    <div class="company_details">
      <img class="box icon-box font-icon"  v-bind:src=work_place_logo alt="Usama Mirza" >
      <div class="company_details_info">
        <span class="title title--h2"> {{name}} </span>
        <h5 class="title title--h4 company_details_role_title"> {{ designation }} </h5>
        <span class="professional_timeline__period"> {{ joining_date }} — {{ last_date }} </span>
      </div>
    </div>
    <MyRoles
        v-for="(x,index) in roles"
        v-bind:key="index"
        :end_date=x.end_date
        :start_date=x.start_date
        :role=x.role
        :description=x.description
    />
  </div>

</template>

<script>

import MyRoles from "@/components/component_resume/MyRoles.vue";


export default {
  name: "MyExperience",
  components: {
    MyRoles,
  },
  props: {
    last_date: undefined,
    joining_date: undefined,
    name: undefined,
    designation: undefined,
    work_place_logo: undefined,
    roles: Array,
    errors: Array,
  },
}
</script>

<style>
</style>