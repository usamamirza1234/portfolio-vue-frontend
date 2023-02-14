import axios from "axios";


export const api_mixin = {
    created() {
        this.logMessage(), this.getTechStack()
    }, data() {
        return {
            message: 'I am such a nice mixin.', tech_stacks: [], tech_stacks_errors: []
        }
    }, methods: {
        logMessage() {
            console.log(this.message)
        }, getTechStack() {
            axios.defaults.headers.common['Authorization'] = "Bearer 5KTYX0qc3tSL7oYAWJx4_f1EghTUIiaCF6Wo2adFcuU";
            axios.get(`http://localhost:3000/api/v1/tech_stacks`)
                .then(response => {
                    // console.log(response)
                    // JSON responses are automatically parsed.
                    this.tech_stacks = response.data.data.tech_stacks
                })
                .catch(e => {
                    this.tech_stacks_errors.push(e)
                    // console.log( this.errors)
                })
        }
    }
}