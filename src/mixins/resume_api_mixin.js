import axios from "axios";


export const resume_api_mixin = {
   data() {
        return {
             "time_line": {
                "work_places": [{
                    "id": 1,
                    "last_date": "Present",
                    "joining_date": "December, 2020",
                    "name": "Veroke",
                    "designation": "FullStack Developer",
                    "work_place_logo": require(`../assets/images/veroke.jpeg`),
                    // "work_place_logo": "https://usamamirza-portfolios.s3.eu-central-1.amazonaws.com/veroke.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCmFwLXNvdXRoLTEiSDBGAiEAraM8GDtPPHTq8WX%2BuqUWwPXlLF1W1GBif3UM7Pa%2F6xcCIQCI40BMmB9tQSGdykAUG6EMmd37WrkjnGO0WdKXm2kWjCrtAgjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDgzNTg0NzIxNjg2NiIMSv%2BuM%2FgEp7lf0bYqKsECyV8msE8QLAa2S%2FQcnWIPoh5%2BXBhLwrB6vfMnUav2ZsWygUGEHLfMvoomiOce2Pxl0M3GBmPSYBt8PJcvtx%2BaYmmVjrgrGmh4q5Xe3TVunxJLT9XAMurThuV3W4LU%2BepxgkBSMjm4HXsrsxv6zSyJ00%2FSprBuBgKslpigXFxg45eVO5PpUucQ2Zwe3%2F%2Fxqb%2BIZD7gP3JB7XFcAyfHGcq75IoXuIkPSCjVmEHY2sjgTyWQ6TEkizQ1aM3CBua7hjp0r58ORuqjjiFQADSO8vT8b5%2FLzOfljoVYdfHtX9687DJHpeko9P2%2BiWvbPhXvfy1mq7NDoZxO%2FjwsGyM3tE%2F3HC%2FG1k5h2m2%2FqEc6506FSCPg1XMsMasXkXG10DRJegVtr03mc0GDuYbxCx4qOEiWqeJj0nkJUjSH2dexYughXDC0MNCt0p8GOrICbOVolIWgklgIo5apNQAK9OIYZXoEZr1z0oxzvdb5INSeZZF1CsNru8CVPCwQvxiwygV%2Fcm%2F8DqIgspNQAyEv1CaY4F54YmNTZuasFVmuzCQ9wGQOBVJC1OcIXZ3NVMyULhxaaMzlyXNPVN83QL8AU9n03KxrVJ7BBX3%2F34mhAssecLK%2BDLrItuOHbFm7%2FjsMcL9t8FOOsxzS4DcFza80KKHFS0KrEhMVN1K0PGmtWusKBysxOzv%2FEM63gULYj1WTRF7wUPv0LFDLTGWZ6vZZYiobvuLNgNyzeY9fAUDgH8OjGhlYFYrQFffp85gC3uAQ1rQ77ZPddSo8irhPcSVtF9pQRtDL9YFfrZexd5SKTwmXFCETmvlUeYRRsjt1uDaKjmAhIz0r93tZHsgZDRgXkfhH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230221T151143Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA4FHDAL3RBBH3QB4R%2F20230221%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=f0cb547f264ac67348a2d16331ea63109bfaf513fb77a60383db13f291413c33",
                    "roles": [{
                        "id": 1,
                        "end_date": "Present",
                        "start_date": "August, 2021",
                        "role": "Sr Ruby on Rails Developer",
                        "description": "To be written"
                    }, {
                        "id": 2,
                        "end_date": "August, 2021",
                        "start_date": "December, 2021",
                        "role": "Associate Ruby on Rails Developer",
                        "description": "To be written"
                    }],
                    "location": "Islamabad, Pakistan"
                }, {
                    "id": 2,
                    "last_date": "December, 2020",
                    "joining_date": "June, 2020",
                    "name": "AST",
                    "designation": "FullStack Developer",
                    "work_place_logo": require(`../assets/images/ast.jpg`),
                    "roles": [{
                        "id": 1,
                        "end_date": "December, 2020",
                        "start_date": "September, 2020",
                        "role": "Jr Ruby on Rails Developer",
                        "description": "nil"
                    }, {
                        "id": 2,
                        "end_date": "August, 2020",
                        "start_date": "June, 2020",
                        "role": "Intern ROR Developer",
                        "description": "To be written"
                    }],
                    "location": "Islamabad, Pakistan"
                }], "educations": [{
                    "id": 1,
                    "last_date": "December, 2020",
                    "joining_date": "September, 2016",
                    "name": "Quaid-i-Azam University",
                    "degree_name": "BS Information Technology",
                    "location": "Islamabad, Pakistan",
                    "details": ""
                }, {
                    "id": 2,
                    "last_date": "August, 2016",
                    "joining_date": "March, 2014",
                    "name": "Islamabad Model College for Boys",
                    "degree_name": "Intermediate",
                    "location": "Islamabad, Pakistan",
                    "details": ""
                },
                     {
                         "id": 4,
                         "last_date": "May, 2014",
                         "joining_date": "March, 2012",
                         "name": "Sideeq Public School",
                         "degree_name": "Matriculation",
                         "location": "Rawalpindi, Pakistan",
                         "details": ""
                     }
                ]
                 , "skills": [{
                    "id": 1, "tech_name": "Ruby On Rails", "skill_level": 80
                }, {
                    "id": 2, "tech_name": "Vue.js", "skill_level": 60
                }], "certifications": null
            }, time_line_errors: [],
            base_url: "http://localhost:3000/", // base_url: "http://35.78.199.156/",
            message: 'Resume Mixin Loaded! hurray!!! .',
        }
    },
    created() {
        // this.logMessage(),
        // this.getTimeLine()
    },
    methods: {
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