import axios from "axios";


export const resume_api_mixin = {
    created() {
            this.logMessage(),
            this.getProfessionalExperience()
            // this.getProfile()
    }, data() {
        return {
            base_url: "http://localhost:3000/",
            message: 'Resume Mixin Loaded! hurray!!! .', work_places: [], work_places_errors: []
        }
    }, methods: {
        logMessage() {
            console.log(this.message)
        },
        getProfessionalExperience() {
            axios.defaults.headers.common['Authorization'] = "Bearer 5KTYX0qc3tSL7oYAWJx4_f1EghTUIiaCF6Wo2adFcuU";
            axios.get(this.base_url + `api/v1/time_line/get_professional_experience`)
                .then(response => {
                    // console.log(response)
                    // JSON responses are automatically parsed.
                    console.log("API-- getProfessionalExperience")
                    this.work_places = response.data.data.work_places
                    console.log(this.work_places)
                    console.log("-- getProfessionalExperience --")
                })
                .catch(e => {
                    this.work_places_errors.push(e)
                    // console.log( this.errors)
                })
        },

    },
}