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
                    "work_place_logo": "https://usamamirza-portfolios.s3.eu-central-1.amazonaws.com/1b6zy4mix84snqojfpv2eifxkn4g?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCmFwLXNvdXRoLTEiRzBFAiEApt6wc1bgp%2FtyuRbjf%2B0edvy6whCeOzXmYbUQwW9TBBkCICR5D8Y88kBRIy6jglRAidEHwRlPmwWG45s2Ze0RxQRsKu0CCKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMODM1ODQ3MjE2ODY2IgzwX5jOPr93MMvLwKoqwQI2Qww0qchtlhafzOiIE2AdMSXd%2FAZ4oTFv9qt%2FJsXNNFu42plrJkDK%2FAjWFoKnPgSGZHCcRL4ngnWNDCX5j6KopQW8qLdwaME0GmknoWgo4yO4JCTPaHPpvITvCRBXWhiWvkdldef%2BzUTyU%2BkPKmaZiJC12oKahycRNgpj9NaqnBdvKts1vPDa5AUjpcfpwmjrBpANH4wKXPD95usgDmeabeEYnnJjtKfYzkIZ5o1qNisdusDnEvBL%2F9XEZPv%2Bkp%2FNJNMwlBEyiBj3bjgsS5xkc89qGC78%2FyfKTztzTWW9GxyLQxLIadCJiSfXCgkp%2BAjv0geRhwOqrXW%2Frk5ja8eI5zDZQqTHI6JoqHo%2BRHa6CLVJ0N9HA5t5dYAfi1SAHX3PY8SqYzp6bsW%2B1%2FvUjvrD2zcMH7Id1vnwA2%2BJLLoueNAw1rTMnwY6swI3AiEOSMATYQrm%2F1GUoVN%2FmvqCdRjbvDKosUL569HJFTT0EYQng5XaptR7MFZHALQycc85%2FQ2q1FzPVq99EobEvJnIlOGihMe%2Bnuu82T1DMa%2BvPH0eRXGkVOXWCSAEqaTYifLyBnsewJ3yc90Ng17s2d0leM949Zb%2FGlHw5elSmrzvf59kvCoiAsvHDWmc426vflkCjCiuVYOhvDA%2B582xltbNuFhMWhL3OtPGh9ejEXQ0OlJ8cNGSEJAL8jcIimth22tgr3EYy7cMlXyfhBmAnt6ayIOIcB7ILIpNd12fqct9cHofu%2BwoEhYcJ7T0RjEGU%2FqFkmO4lEVf7yry%2FjfoehDyJBknFK%2F48FzpV24HE%2F9aMRrhl3nzRQdg5jWHVpSOFyNutaPRFpr47BsnI%2FN6upPY&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230220T173426Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA4FHDAL3RLQJROBLE%2F20230220%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=9ef1eec53e6c26b6122c80374b292fe8ab4e62519d33c670316216c4290fb948",
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
                        "role": "Jr Ruby on Rails Developer",
                        "description": "To be written"
                    }],
                    "location": "nil, nil"
                }, {
                    "id": 2,
                    "last_date": "February, 2023",
                    "joining_date": "February, 2023",
                    "name": "nil2",
                    "designation": "nil",
                    "work_place_logo": "https://usamamirza-portfolios.s3.eu-central-1.amazonaws.com/y0uha1c9m09365lgsqboiez5itea?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCmFwLXNvdXRoLTEiRzBFAiEApt6wc1bgp%2FtyuRbjf%2B0edvy6whCeOzXmYbUQwW9TBBkCICR5D8Y88kBRIy6jglRAidEHwRlPmwWG45s2Ze0RxQRsKu0CCKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMODM1ODQ3MjE2ODY2IgzwX5jOPr93MMvLwKoqwQI2Qww0qchtlhafzOiIE2AdMSXd%2FAZ4oTFv9qt%2FJsXNNFu42plrJkDK%2FAjWFoKnPgSGZHCcRL4ngnWNDCX5j6KopQW8qLdwaME0GmknoWgo4yO4JCTPaHPpvITvCRBXWhiWvkdldef%2BzUTyU%2BkPKmaZiJC12oKahycRNgpj9NaqnBdvKts1vPDa5AUjpcfpwmjrBpANH4wKXPD95usgDmeabeEYnnJjtKfYzkIZ5o1qNisdusDnEvBL%2F9XEZPv%2Bkp%2FNJNMwlBEyiBj3bjgsS5xkc89qGC78%2FyfKTztzTWW9GxyLQxLIadCJiSfXCgkp%2BAjv0geRhwOqrXW%2Frk5ja8eI5zDZQqTHI6JoqHo%2BRHa6CLVJ0N9HA5t5dYAfi1SAHX3PY8SqYzp6bsW%2B1%2FvUjvrD2zcMH7Id1vnwA2%2BJLLoueNAw1rTMnwY6swI3AiEOSMATYQrm%2F1GUoVN%2FmvqCdRjbvDKosUL569HJFTT0EYQng5XaptR7MFZHALQycc85%2FQ2q1FzPVq99EobEvJnIlOGihMe%2Bnuu82T1DMa%2BvPH0eRXGkVOXWCSAEqaTYifLyBnsewJ3yc90Ng17s2d0leM949Zb%2FGlHw5elSmrzvf59kvCoiAsvHDWmc426vflkCjCiuVYOhvDA%2B582xltbNuFhMWhL3OtPGh9ejEXQ0OlJ8cNGSEJAL8jcIimth22tgr3EYy7cMlXyfhBmAnt6ayIOIcB7ILIpNd12fqct9cHofu%2BwoEhYcJ7T0RjEGU%2FqFkmO4lEVf7yry%2FjfoehDyJBknFK%2F48FzpV24HE%2F9aMRrhl3nzRQdg5jWHVpSOFyNutaPRFpr47BsnI%2FN6upPY&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230220T173715Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA4FHDAL3RLQJROBLE%2F20230220%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=e3370aa388e09ae6b2f11a91bdbb183cd85807a302f51ed688d828e1bb630f21",
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