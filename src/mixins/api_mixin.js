import axios from "axios";


export const api_mixin = {
    created() {
            this.logMessage()
                // , this.getTechStack()
    }, data() {
        return {
            base_url: "http://localhost:3000/",
            // base_url: "http://35.78.199.156/",
            message: 'Index Mixing',
            "tech_stacks": [
                {
                    "id": 1,
                    "name": "Backend Development",
                    "description": "Development",
                    "tech_lang": [
                        {
                            "id": 1,
                            "name": "string",
                            "description": "text",
                            "icon": "http://localhost:3000/api/v1/tech_stacks"
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "Frontend Development",
                    "description": "Development",
                    "tech_lang": [
                        {
                            "id": 2,
                            "name": "string",
                            "description": "text",
                            "icon": "http://localhost:3000/api/v1/tech_stacks"
                        }
                    ]
                }
            ],
            tech_stacks_errors: [],
            profile: undefined,
            profile_errors: []
        }
    }, methods: {
        logMessage() {
            console.log(this.message)
            console.log(this.tech_stacks)
        },
        getTechStack() {
            axios.get(this.base_url + `api/v1/tech_stacks`)
                .then(response => {
                    console.log("API-- getTechStack")
                    this.tech_stacks = response.data.data.tech_stacks
                    console.log(this.tech_stacks)
                    console.log("-- getTechStack --")

                })
                .catch(e => {
                    console.log("API Error-- getTechStack")
                    this.tech_stacks_errors.push(e)
                    console.log( this.tech_stacks_errors)
                    console.log("-- getTechStack --")
                })
        },

    },
}