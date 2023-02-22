import axios from "axios";

export const profile_api_mixin = {
    created() {
            this.logProfile()
        //, this.getProfile()
    }, data() {
        return {
            base_url: "http://localhost:3000/", // base_url: "http://35.78.199.156/",
            message: 'Profile Mixin Loaded! hurray!!! .', profile: {
                "name": "Usama Mirza",
                "headline": "Staff ROR / Vue.js Developer",
                "email": "usamak.mirza@gmail.com",
                "phone_number": "(92) 331 567 1991",
                "dob": "June 02",
                "city": "Islamabad",
                "country": "Pakistan",
                "about_me": "You need more time to know me",
                "gender": "(his/him)",
                "profile_image": require(`../assets/images/dp.jpeg`)
            }, profile_errors: [],
        }
    }, methods: {
        logProfile() {
            console.log("-- getProfile --")
            console.log(this.profile)
            localStorage.setItem("user_profile", JSON.stringify(this.profile));
        }, getProfile() {
            // axios.defaults.headers.common['Authorization'] = "Bearer";
            axios.get(this.base_url + `api/v1/users/get_profile`)
                .then(response => {
                    console.log("API-- getProfile")
                    this.profile = response.data.data.user
                    console.log(this.profile)
                    console.log("-- getProfile --")
                    localStorage.setItem("user_profile", JSON.stringify(this.profile));
                    console.log(JSON.stringify(this.profile))
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