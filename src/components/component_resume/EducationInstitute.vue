<template>
    <div class="timeline">
      <article class="timeline__item">
        <h5 class="title title--h4 timeline__title"> {{ institute_name }} <span class="timeline__period"> {{ location }}  </span> </h5>
        <br>
        <h5 class="title title--h5 timeline__title"> {{ degree_name }}  </h5>
        <span class="timeline__period"> {{ joining_date }}  - {{last_date}} </span>
        <p class="timeline__description"> {{ education_details }} </p>
      </article>
    </div>
</template>

<script>
export default {
  name: "EducationInstitute",
  props: {
    last_date: undefined,
    joining_date: undefined,
    institute_name: undefined,
    degree_name: undefined,
    location: undefined,
    education_details: undefined,
    educations: Array,
    errors: Array,
  },
}
</script>

<style>
</style>