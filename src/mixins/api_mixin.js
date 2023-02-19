import axios from "axios";


export const api_mixin = {
    created() {
            this.logMessage(),
            this.getTechStack()
    }, data() {
        return {
            // base_url: "http://localhost:3000/",
            base_url: "http://35.78.199.156/",
            message: 'I am such a nice mixin.',
            tech_stacks: [],
            tech_stacks_errors: [],
            profile: undefined,
            profile_errors: []
        }
    }, methods: {
        logMessage() {
            console.log(this.message)
        },
        getTechStack() {
            axios.get(this.base_url + `api/v1/tech_stacks`)
                .then(response => {
                    this.tech_stacks = response.data.data.tech_stacks
                })
                .catch(e => {
                    this.tech_stacks_errors.push(e)
                })
        },

    },
}