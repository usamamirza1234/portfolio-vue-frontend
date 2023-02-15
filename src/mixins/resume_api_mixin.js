import axios from "axios";


export const resume_api_mixin = {
    created() {
            this.logMessage(),
            this.getTimeLine()
            // this.getProfile()
    }, data() {
        return {
            base_url: "http://localhost:3000/",
            message: 'Resume Mixin Loaded! hurray!!! .', work_places: [],  time_line: [], time_line_errors: [],
        }
    }, methods: {
        logMessage() {
            console.log(this.message)
        },
        getTimeLine() {
            axios.defaults.headers.common['Authorization'] = "Bearer 5KTYX0qc3tSL7oYAWJx4_f1EghTUIiaCF6Wo2adFcuU";
            axios.get(this.base_url + `api/v1/time_line/get_time_line`)
                .then(response => {
                    // console.log(response)
                    // JSON responses are automatically parsed.
                    console.log("API-- getTimeLine")
                    this.time_line = response.data.data.time_line
                    console.log(this.time_line)
                    console.log("-- getTimeLine --")
                })
                .catch(e => {
                    this.time_line_errors.push(e)
                    console.log("API Error-- getTimeLine")
                    console.log( this.time_line_errors)
                    console.log("-- getTimeLine --")
                })
        },

    },
}