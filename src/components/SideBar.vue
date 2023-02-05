<template>
  <aside class="col-12 col-md-12  col-xl-3">
    <div class="sidebar box-outer sticky-column">

      <!-- My photo -->
      <div class="sidebar__base-info">
        <figure class="avatar-box">
          <img
              src="data:image/png;base64,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" alt="Usama Mirza"/>
        </figure>

        <div class="text-xl-center">
          <h3 class="title title--h3 sidebar__name"> Usama Mirza</h3>
          <div class="badge">Staff ROR / Vue Developer</div>
        </div>
      </div>

      <!-- My Information -->
      <div class="sidebar__additional-info js-show">
        <div class="separation"></div>
        <ul class="details-info">
          <!-- Email -->
          <li class="details-info__item">
          <span class="box icon-box"><i class="font-icon icon-envelope"></i></span>
          <div class="contacts-block__info">
            <span class="overhead">Email</span>
            <a class="text-overflow" href="mailto:usama@example.com" title="usama@example.com">usama@example.com</a>
          </div>
          </li>
          <li class="details-info__item">
            <span class="box icon-box"><i class="font-icon icon-phone"></i></span>
            <div class="contacts-block__info">
              <span class="overhead">Phone</span>
              <span class="text-overflow" title="(051) 123-4567">(051) 123-4567</span>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </aside>

</template>

<script>
export default {
  name: "SideBar"
}
</script>

<style scoped>
</style>