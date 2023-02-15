<template>
  <div class="professional_timeline">
    <article class="professional_timeline__item">
      <h5 class="title title--h4 professional_timeline__title">{{role}} <span class="professional_timeline__period">{{start_date}} — {{end_date}}</span> </h5>
      <p class="professional_timeline__description">{{description}}</p>
    </article>
  </div>

</template>

<script>


export default {
  name: "MyRoles",
  components: {
  },
  props: {
    end_date: undefined,
    start_date: undefined,
    role: undefined,
    description: undefined,
    work_places: Array,
    errors: Array,
  },
}
</script>

<style>
</style>