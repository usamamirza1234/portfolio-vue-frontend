<template>
  <div class="box box-inner mb-0">
    <div class="progress">
      <div class="progress-text"><span> {{ tech_name }} </span> {{ skill_level }}%</div>
      <div class="progress-bar"><span :style="{'width': skill_level + '%'} " aria-valuemax="100" aria-valuemin="0"
                                      role="progressbar"
      ></span></div>
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