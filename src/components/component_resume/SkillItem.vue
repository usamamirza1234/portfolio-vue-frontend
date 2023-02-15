<template>
  <div class="box box-inner mb-0">
    <div class="progress">
      <div class="progress-text"><span> {{tech_name}} </span> {{skill_level}}%</div>
      <div class="progress-bar"><span role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%; z-index: 2;"></span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillItem",
  props: {
    skill_level: undefined,
    tech_name: undefined,
    errors: Array,
  },
}
</script>

<style>
</style>