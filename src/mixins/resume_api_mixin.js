import axios from "axios";


export const resume_api_mixin = {
    created() {
            this.logMessage(),
            this.getTimeLine()
    }, data() {
        return {
            // base_url: "http://localhost:3000/",
            base_url: "http://35.78.199.156/",
            message: 'Resume Mixin Loaded! hurray!!! .',
            work_places: [],
            time_line: [],
            time_line_errors: [],
        }
    }, methods: {
        logMessage() {
            console.log(this.message)
        },
        getTimeLine() {
            // axios.defaults.headers.common['Authorization'] = "Bearer _gzB2YOLyYm2xwrxkunNf4URY9iEX3v51e5Q7yHG4Sk";
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