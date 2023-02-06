<template>
  <aside class="col-12 col-md-12  col-xl-3">
    <div class="sidebar box-outer sticky-column">

      <!-- My photo -->
      <div class="sidebar__base-info">
        <figure class="avatar-box">
          <img
              src="https://scontent.fmfg1-1.fna.fbcdn.net/v/t39.30808-6/310449519_1440392206469951_7620538697093453164_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=9zmu8YyKV9MAX8a9fOP&_nc_ht=scontent.fmfg1-1.fna&oh=00_AfBro_CeqAWGmL01istQSDVFu4k4qH0RxCP-RcmzDkiX3A&oe=63E51E8D" alt="Usama Mirza"/>
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
          <span class="box icon-box"><i class="font-icon "><MailIcon/></i></span>
          <div class="contacts-block__info">
            <span class="overhead">Email</span>
            <a class="text-overflow" href="mailto:usama@example.com" title="usama@example.com">usama@example.com</a>
          </div>
          </li>
          <li class="details-info__item">
            <span class="box icon-box"><i class="font-icon"><MdPhonePortraitIcon/></i></span>
            <div class="contacts-block__info">
              <span class="overhead">Phone</span>
              <span class="text-overflow" title="(051) 123-4567">(+92) 331 567 1991</span>
            </div>
          </li>
          <li class="details-info__item">
            <span class="box icon-box"><i class="font-icon"><MdCalendarIcon/></i></span>
            <div class="contacts-block__info">
              <span class="overhead">Wish me on</span>
              <span class="text-overflow" title="June 2">June 2</span>
            </div>
          </li>
          <li class="details-info__item">
            <span class="box icon-box"><i class="font-icon"><MdLocateIcon/></i></span>
            <div class="contacts-block__info">
              <span class="overhead">Lives in</span>
              <span class="text-overflow" title="June 2">Islamabad, Pakistan</span>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </aside>

</template>

<script>

// import GithubIcon from "vue-ionicons/dist/logo-github.vue";
// import LinkedinIcon from "vue-ionicons/dist/logo-linkedin.vue";
// import TwitterIcon from "vue-ionicons/dist/logo-twitter.vue";
// import FacebookIcon from "vue-ionicons/dist/logo-facebook.vue";
// import YoutubeIcon from "vue-ionicons/dist/logo-youtube.vue";
import MailIcon from "vue-ionicons/dist/md-mail.vue";
import MdCalendarIcon from 'vue-ionicons/dist/md-calendar.vue'
import MdPhonePortraitIcon from 'vue-ionicons/dist/md-phone-portrait.vue'
import MdLocateIcon from 'vue-ionicons/dist/md-locate.vue'
export default {
  name: "SideBar",
  components: {
    MailIcon,
    MdCalendarIcon,
    MdPhonePortraitIcon,
    MdLocateIcon,
  }
}
</script>

<style scoped>
</style>