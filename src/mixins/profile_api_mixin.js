import axios from "axios";

export const profile_api_mixin = {
    created() {
            this.logMessage(),
            this.getProfile()
    }, data() {
        return {
            base_url: "http://localhost:3000/",
            message: 'Profile Mixin Loaded! hurray!!! .', profile: [],  profile_errors: [],
        }
    }, methods: {
        logMessage() {
            console.log(this.message)
        },
        getProfile() {
            axios.defaults.headers.common['Authorization'] = "Bearer 5KTYX0qc3tSL7oYAWJx4_f1EghTUIiaCF6Wo2adFcuU";
            axios.get(this.base_url + `api/v1/users/get_profile`)
                .then(response => {
                    console.log("API-- getProfile")
                    this.profile = response.data.data.user
                    console.log(this.profile)
                    console.log("-- getProfile --")
                    localStorage.setItem("user_profile", JSON.stringify(this.profile));
                })
                .catch(e => {
                    this.profile_errors.push(e)
                    console.log("API Error-- getProfile")
                    console.log( this.profile_errors)
                    console.log("-- getProfile --")
                })
        },

    },
}