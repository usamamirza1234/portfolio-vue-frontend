<template>
<div>
  <h2 class="title title--h2 mt-3">My Skills</h2>
  <SkillItem
      v-for="(x, index) in skills"
      v-bind:key="index"
      :tech_name=x.tech_name
      :skill_level=x.skill_level
  />

</div>
</template>

<script>

import SkillItem from "@/components/component_resume/SkillItem.vue";

export default {
  name: "MySkills",
  components: {
    SkillItem,
  },
  props: {
    skills: Array,
    errors: Array,
  },
}
</script>

<style>
</style>