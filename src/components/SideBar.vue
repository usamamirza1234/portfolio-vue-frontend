<template>
  <aside class="col-12 col-md-12  col-xl-3">
    <div v-if=" profile_errors.length == 0 " :errors="profile_errors" :profile="profile"
         class="sidebar box-outer sticky-column">
      <!-- My photo -->
      <div class="sidebar__base-info">
        <figure class="avatar-box">
          <img alt="Usama Mirza" v-bind:src=this.profile.profile_image>
        </figure>

        <div class="text-xl-center">
          <h3 class="title title--h3 sidebar__name"> {{ this.profile.name }} </h3>
          <div class="badge"> {{ this.profile.headline }}</div>
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
              <a class="text-overflow" href="mailto:usama@example.com" title="usama@example.com">
                {{ this.profile.email }} </a>
            </div>
          </li>
          <li class="details-info__item">
            <span class="box icon-box"><i class="font-icon"><MdPhonePortraitIcon/></i></span>
            <div class="contacts-block__info">
              <span class="overhead">Phone</span>
              <span class="text-overflow" title="(051) 123-4567">{{ this.profile.phone_number }}</span>
            </div>
          </li>
          <li class="details-info__item">
            <span class="box icon-box"><i class="font-icon"><MdCalendarIcon/></i></span>
            <div class="contacts-block__info">
              <span class="overhead">Wish me on</span>
              <span class="text-overflow" title="June 2"> {{ this.profile.dob }} </span>
            </div>
          </li>
          <li class="details-info__item">
            <span class="box icon-box"><i class="font-icon"><MdLocateIcon/></i></span>
            <div class="contacts-block__info">
              <span class="overhead">Lives in</span>
              <span class="text-overflow" title="June 2">{{ this.profile.city + ", " + this.profile.country }}</span>
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

// import axios from "axios";
import {profile_api_mixin} from '@/mixins/profile_api_mixin'

export default {
  mixins: [profile_api_mixin],
  name: "SideBar",
  components: {
    MailIcon,
    MdCalendarIcon,
    MdPhonePortraitIcon,
    MdLocateIcon,
  },
  created() {
    // this.set_profile()
  },
  data: function () {
    return {
      // profile: [],
      // profile_errors: [],
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>