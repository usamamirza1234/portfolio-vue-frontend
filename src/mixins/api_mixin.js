import axios from "axios";


export const api_mixin = {
    created() {
            this.logMessage(),
            this.getTechStack()
            // this.getProfile()
    }, data() {
        return {
            base_url: "http://localhost:3000/",
            message: 'I am such a nice mixin.', tech_stacks: [], tech_stacks_errors: [], profile: undefined, profile_errors: []
        }
    }, methods: {
        logMessage() {
            console.log(this.message)
        },

        getProfile() {
            // axios.defaults.headers.common['Authorization'] = "Bearer 5KTYX0qc3tSL7oYAWJx4_f1EghTUIiaCF6Wo2adFcuU";
            // axios.get(this.base_url + `api/v1/users/get_profile`)
            //     .then(response => {
            //         // console.log(response)
            //         // JSON responses are automatically parsed.
            //         this.profile = response.data.data.user
            //         localStorage.setItem("user_profile", JSON.stringify(this.profile));
            //     })
            //     .catch(e => {
            //         this.profile_errors.push(e)
            //         // console.log( this.errors)
            //     })
        },

        getTechStack() {
            axios.defaults.headers.common['Authorization'] = "Bearer 5KTYX0qc3tSL7oYAWJx4_f1EghTUIiaCF6Wo2adFcuU";
            axios.get(this.base_url + `api/v1/tech_stacks`)
                .then(response => {
                    // console.log(response)
                    // JSON responses are automatically parsed.
                    this.tech_stacks = response.data.data.tech_stacks
                })
                .catch(e => {
                    this.tech_stacks_errors.push(e)
                    // console.log( this.errors)
                })
        },

    },
}