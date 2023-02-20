import axios from "axios";


export const resume_api_mixin = {
    created() {
        // this.logMessage(),
        // this.getTimeLine()
    }, data() {
        return {
            base_url: "http://localhost:3000/", // base_url: "http://35.78.199.156/",
            message: 'Resume Mixin Loaded! hurray!!! .', work_places: [], "time_line": {
                "work_places": [{
                    "id": 1,
                    "last_date": "February, 2023",
                    "joining_date": "February, 2023",
                    "name": "nil1",
                    "designation": "nil",
                    "work_place_logo": "http://localhost:3000/api/v1/time_line/get_time_line",
                    "roles": [{
                        "id": 1,
                        "end_date": "February, 2023",
                        "start_date": "February, 2023",
                        "role": "nil",
                        "description": "nil"
                    }, {
                        "id": 2,
                        "end_date": "February, 2023",
                        "start_date": "February, 2023",
                        "role": "nil",
                        "description": "nil"
                    }],
                    "location": "nil, nil"
                }, {
                    "id": 2,
                    "last_date": "February, 2023",
                    "joining_date": "February, 2023",
                    "name": "nil2",
                    "designation": "nil",
                    "work_place_logo": "http://localhost:3000/api/v1/time_line/get_time_line",
                    "roles": [{
                        "id": 3,
                        "end_date": "February, 2023",
                        "start_date": "February, 2023",
                        "role": "nil",
                        "description": "nil"
                    }, {
                        "id": 4,
                        "end_date": "February, 2023",
                        "start_date": "February, 2023",
                        "role": "nil",
                        "description": "nil"
                    }],
                    "location": "nil, nil"
                }], "educations": [{
                    "id": 1,
                    "last_date": "February, 2023",
                    "joining_date": "February, 2023",
                    "name": "nil",
                    "degree_name": "nil",
                    "location": "nil, nil",
                    "details": "nil"
                }, {
                    "id": 2,
                    "last_date": "February, 2023",
                    "joining_date": "February, 2023",
                    "name": "nil",
                    "degree_name": "nil",
                    "location": "nil, nil",
                    "details": "nil"
                }], "skills": [{
                    "id": 1, "tech_name": "string", "skill_level": 20
                }, {
                    "id": 2, "tech_name": "string", "skill_level": 60
                }], "certifications": null
            }, time_line_errors: [],
        }
    }, methods: {
        logMessage() {
            console.log(this.message)
        },
        getTimeLine() {
            // axios.defaults.headers.common['Authorization'] = "Bearer ";
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