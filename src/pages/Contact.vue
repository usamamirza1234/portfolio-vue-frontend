<template>
  <div class="col-12 col-md-12 col-xl-9">
    <div class="box-outer">
      <NavBar/>
      <h1 class="title title--h1 title__separate">Contact</h1>
      <h2 class="title title--h2">Contact Form</h2>
      <form id="contact-form" class="contact-form" data-toggle="validator"  @submit.prevent="handleSubmit">
        <div class="row">
          <div class="form-group col-12 col-md-6">
            <input type="text" class="input form-control" id="nameContact"   v-model="nameContact"  name="nameContact" placeholder="Full name" required="required" autocomplete="on" oninvalid="setCustomValidity('Fill in the field')" onkeyup="setCustomValidity('')">
            <div class="help-block with-errors"></div>
          </div>
          <div class="form-group col-12 col-md-6">
            <input type="email" class="input form-control" id="emailContact"  v-model="emailContact"  name="emailContact" placeholder="Email address" required="required" autocomplete="on" oninvalid="setCustomValidity('Email is incorrect')" onkeyup="setCustomValidity('')">
            <div class="help-block with-errors"></div>
          </div>
          <div class="form-group col-12 col-md-12">
            <textarea class="textarea form-control" id="messageContact"  v-model="messageContact"  name="messageContact" placeholder="Your Message" rows="4" required="required" oninvalid="setCustomValidity('Fill in the field')" onkeyup="setCustomValidity('')"></textarea>
            <div class="help-block with-errors"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6 order-2 order-md-1 text-center text-md-start">
            <div id="validator-contact" class="hidden"></div>
          </div>
          <div class="col-12 col-md-6 order-1 order-md-2 text-end">
            <button type="submit" class="btn"><i class="font-icon icon-send"></i> Send Message</button>
          </div>
        </div>
      </form>
      <p v-if="submitting">Submitting...</p>
      <p v-if="loading">Loading...</p>
    </div>
</div>
</template>



<script>
import axios from "axios";
import NavBar from "@/components/NavBar.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contact",
  components: {
    NavBar,
  },
  data() {
    return {
      users: [],
      messageContact: "",
      nameContact: "",
      emailContact: "",
      loading: false,
      submitting: false,
      base_url: "http://localhost:3000/"
    };
  },
  methods: {
    handleSubmit() {
      this.submitting = true;
      axios
          .post(this.base_url + `/api/v1/user_messages`, {
            user_name: this.nameContact,
            message: this.messageContact,
            email: this.emailContact,
          })
          .then((response) => {
            const data = response.data;
            this.users.push(data);
            this.messageContact = "";
            this.nameContact = "";
            this.emailContact = "";
            this.submitting = false;
          });
    },
  }
}
</script>

<style scoped>

</style>