import axios from "axios";

export const profile_api_mixin = {
    created() {
            // this.logMessage()
            //, this.getProfile()
    }, data() {
        return {
            base_url: "http://localhost:3000/",
            // base_url: "http://35.78.199.156/",
            message: 'Profile Mixin Loaded! hurray!!! .',
            profile: [
                {"name":" ","headline":"New:","email":"usamak.mirza@gmail.com","phone_number":null,"dob":null,"city":null,"country":null,"about_me":null,"profile_image":"https://usamamirza-portfolios.s3.eu-central-1.amazonaws.com/1b6zy4mix84snqojfpv2eifxkn4g?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCmFwLXNvdXRoLTEiRzBFAiEApt6wc1bgp%2FtyuRbjf%2B0edvy6whCeOzXmYbUQwW9TBBkCICR5D8Y88kBRIy6jglRAidEHwRlPmwWG45s2Ze0RxQRsKu0CCKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMODM1ODQ3MjE2ODY2IgzwX5jOPr93MMvLwKoqwQI2Qww0qchtlhafzOiIE2AdMSXd%2FAZ4oTFv9qt%2FJsXNNFu42plrJkDK%2FAjWFoKnPgSGZHCcRL4ngnWNDCX5j6KopQW8qLdwaME0GmknoWgo4yO4JCTPaHPpvITvCRBXWhiWvkdldef%2BzUTyU%2BkPKmaZiJC12oKahycRNgpj9NaqnBdvKts1vPDa5AUjpcfpwmjrBpANH4wKXPD95usgDmeabeEYnnJjtKfYzkIZ5o1qNisdusDnEvBL%2F9XEZPv%2Bkp%2FNJNMwlBEyiBj3bjgsS5xkc89qGC78%2FyfKTztzTWW9GxyLQxLIadCJiSfXCgkp%2BAjv0geRhwOqrXW%2Frk5ja8eI5zDZQqTHI6JoqHo%2BRHa6CLVJ0N9HA5t5dYAfi1SAHX3PY8SqYzp6bsW%2B1%2FvUjvrD2zcMH7Id1vnwA2%2BJLLoueNAw1rTMnwY6swI3AiEOSMATYQrm%2F1GUoVN%2FmvqCdRjbvDKosUL569HJFTT0EYQng5XaptR7MFZHALQycc85%2FQ2q1FzPVq99EobEvJnIlOGihMe%2Bnuu82T1DMa%2BvPH0eRXGkVOXWCSAEqaTYifLyBnsewJ3yc90Ng17s2d0leM949Zb%2FGlHw5elSmrzvf59kvCoiAsvHDWmc426vflkCjCiuVYOhvDA%2B582xltbNuFhMWhL3OtPGh9ejEXQ0OlJ8cNGSEJAL8jcIimth22tgr3EYy7cMlXyfhBmAnt6ayIOIcB7ILIpNd12fqct9cHofu%2BwoEhYcJ7T0RjEGU%2FqFkmO4lEVf7yry%2FjfoehDyJBknFK%2F48FzpV24HE%2F9aMRrhl3nzRQdg5jWHVpSOFyNutaPRFpr47BsnI%2FN6upPY&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230220T173426Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA4FHDAL3RLQJROBLE%2F20230220%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=9ef1eec53e6c26b6122c80374b292fe8ab4e62519d33c670316216c4290fb948"}
            ],
            profile_errors: [],
        }
    }, methods: {
        logMessage() {
            console.log(this.message)
        },
        getProfile() {
            // axios.defaults.headers.common['Authorization'] = "Bearer";
            axios.get(this.base_url + `api/v1/users/get_profile`)
                .then(response => {
                    console.log("API-- getProfile")
                    this.profile = response.data.data.user
                    console.log(this.profile)
                    console.log("-- getProfile --")
                    localStorage.setItem("user_profile", JSON.stringify(this.profile));
                    console.log(JSON.stringify(this.profile))
                })
                .catch(e => {
                    this.profile_errors.push(e)
                    console.log("API Error-- getProfile")
                    console.log( this.profile_errors)
                    console.log("-- getProfile --")
                })
        },

    },
}