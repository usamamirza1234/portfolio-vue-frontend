import axios from "axios";


export const api_mixin = {
    created() {
            // this.logMessage()
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
                            "name": "Ruby on Rails",
                            "description": "text",
                            "icon": "https://usamamirza-portfolios.s3.eu-central-1.amazonaws.com/2ow8lfunlamlz6ekox4v57ve8tki?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCmFwLXNvdXRoLTEiRzBFAiEApt6wc1bgp%2FtyuRbjf%2B0edvy6whCeOzXmYbUQwW9TBBkCICR5D8Y88kBRIy6jglRAidEHwRlPmwWG45s2Ze0RxQRsKu0CCKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMODM1ODQ3MjE2ODY2IgzwX5jOPr93MMvLwKoqwQI2Qww0qchtlhafzOiIE2AdMSXd%2FAZ4oTFv9qt%2FJsXNNFu42plrJkDK%2FAjWFoKnPgSGZHCcRL4ngnWNDCX5j6KopQW8qLdwaME0GmknoWgo4yO4JCTPaHPpvITvCRBXWhiWvkdldef%2BzUTyU%2BkPKmaZiJC12oKahycRNgpj9NaqnBdvKts1vPDa5AUjpcfpwmjrBpANH4wKXPD95usgDmeabeEYnnJjtKfYzkIZ5o1qNisdusDnEvBL%2F9XEZPv%2Bkp%2FNJNMwlBEyiBj3bjgsS5xkc89qGC78%2FyfKTztzTWW9GxyLQxLIadCJiSfXCgkp%2BAjv0geRhwOqrXW%2Frk5ja8eI5zDZQqTHI6JoqHo%2BRHa6CLVJ0N9HA5t5dYAfi1SAHX3PY8SqYzp6bsW%2B1%2FvUjvrD2zcMH7Id1vnwA2%2BJLLoueNAw1rTMnwY6swI3AiEOSMATYQrm%2F1GUoVN%2FmvqCdRjbvDKosUL569HJFTT0EYQng5XaptR7MFZHALQycc85%2FQ2q1FzPVq99EobEvJnIlOGihMe%2Bnuu82T1DMa%2BvPH0eRXGkVOXWCSAEqaTYifLyBnsewJ3yc90Ng17s2d0leM949Zb%2FGlHw5elSmrzvf59kvCoiAsvHDWmc426vflkCjCiuVYOhvDA%2B582xltbNuFhMWhL3OtPGh9ejEXQ0OlJ8cNGSEJAL8jcIimth22tgr3EYy7cMlXyfhBmAnt6ayIOIcB7ILIpNd12fqct9cHofu%2BwoEhYcJ7T0RjEGU%2FqFkmO4lEVf7yry%2FjfoehDyJBknFK%2F48FzpV24HE%2F9aMRrhl3nzRQdg5jWHVpSOFyNutaPRFpr47BsnI%2FN6upPY&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230220T174137Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIA4FHDAL3RLQJROBLE%2F20230220%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=221d5c37f44995cb52e331df5c964135250887acc8f506a391206db8c21a8260"
                        },                        {
                            "id": 2,
                            "name": "Node.js",
                            "description": "text",
                            "icon": "https://usamamirza-portfolios.s3.eu-central-1.amazonaws.com/grz5arkeour5owpkdmb4pfulbs94?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCmFwLXNvdXRoLTEiRzBFAiEApt6wc1bgp%2FtyuRbjf%2B0edvy6whCeOzXmYbUQwW9TBBkCICR5D8Y88kBRIy6jglRAidEHwRlPmwWG45s2Ze0RxQRsKu0CCKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMODM1ODQ3MjE2ODY2IgzwX5jOPr93MMvLwKoqwQI2Qww0qchtlhafzOiIE2AdMSXd%2FAZ4oTFv9qt%2FJsXNNFu42plrJkDK%2FAjWFoKnPgSGZHCcRL4ngnWNDCX5j6KopQW8qLdwaME0GmknoWgo4yO4JCTPaHPpvITvCRBXWhiWvkdldef%2BzUTyU%2BkPKmaZiJC12oKahycRNgpj9NaqnBdvKts1vPDa5AUjpcfpwmjrBpANH4wKXPD95usgDmeabeEYnnJjtKfYzkIZ5o1qNisdusDnEvBL%2F9XEZPv%2Bkp%2FNJNMwlBEyiBj3bjgsS5xkc89qGC78%2FyfKTztzTWW9GxyLQxLIadCJiSfXCgkp%2BAjv0geRhwOqrXW%2Frk5ja8eI5zDZQqTHI6JoqHo%2BRHa6CLVJ0N9HA5t5dYAfi1SAHX3PY8SqYzp6bsW%2B1%2FvUjvrD2zcMH7Id1vnwA2%2BJLLoueNAw1rTMnwY6swI3AiEOSMATYQrm%2F1GUoVN%2FmvqCdRjbvDKosUL569HJFTT0EYQng5XaptR7MFZHALQycc85%2FQ2q1FzPVq99EobEvJnIlOGihMe%2Bnuu82T1DMa%2BvPH0eRXGkVOXWCSAEqaTYifLyBnsewJ3yc90Ng17s2d0leM949Zb%2FGlHw5elSmrzvf59kvCoiAsvHDWmc426vflkCjCiuVYOhvDA%2B582xltbNuFhMWhL3OtPGh9ejEXQ0OlJ8cNGSEJAL8jcIimth22tgr3EYy7cMlXyfhBmAnt6ayIOIcB7ILIpNd12fqct9cHofu%2BwoEhYcJ7T0RjEGU%2FqFkmO4lEVf7yry%2FjfoehDyJBknFK%2F48FzpV24HE%2F9aMRrhl3nzRQdg5jWHVpSOFyNutaPRFpr47BsnI%2FN6upPY&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230220T174134Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA4FHDAL3RLQJROBLE%2F20230220%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=178c4ff30eb855244ec10184f6d76d17c737b4793b568ee375578a1dba2ce94f"
                        },
                    ]
                },
                {
                    "id": 2,
                    "name": "Cloud Stack",
                    "description": "Development",
                    "tech_lang": [
                        {
                            "id": 1,
                            "name": "AWS",
                            "description": "text",
                            "icon": "https://usamamirza-portfolios.s3.eu-central-1.amazonaws.com/434427ii5lm75i09tj0a36ylu41n?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCmFwLXNvdXRoLTEiRzBFAiEApt6wc1bgp%2FtyuRbjf%2B0edvy6whCeOzXmYbUQwW9TBBkCICR5D8Y88kBRIy6jglRAidEHwRlPmwWG45s2Ze0RxQRsKu0CCKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMODM1ODQ3MjE2ODY2IgzwX5jOPr93MMvLwKoqwQI2Qww0qchtlhafzOiIE2AdMSXd%2FAZ4oTFv9qt%2FJsXNNFu42plrJkDK%2FAjWFoKnPgSGZHCcRL4ngnWNDCX5j6KopQW8qLdwaME0GmknoWgo4yO4JCTPaHPpvITvCRBXWhiWvkdldef%2BzUTyU%2BkPKmaZiJC12oKahycRNgpj9NaqnBdvKts1vPDa5AUjpcfpwmjrBpANH4wKXPD95usgDmeabeEYnnJjtKfYzkIZ5o1qNisdusDnEvBL%2F9XEZPv%2Bkp%2FNJNMwlBEyiBj3bjgsS5xkc89qGC78%2FyfKTztzTWW9GxyLQxLIadCJiSfXCgkp%2BAjv0geRhwOqrXW%2Frk5ja8eI5zDZQqTHI6JoqHo%2BRHa6CLVJ0N9HA5t5dYAfi1SAHX3PY8SqYzp6bsW%2B1%2FvUjvrD2zcMH7Id1vnwA2%2BJLLoueNAw1rTMnwY6swI3AiEOSMATYQrm%2F1GUoVN%2FmvqCdRjbvDKosUL569HJFTT0EYQng5XaptR7MFZHALQycc85%2FQ2q1FzPVq99EobEvJnIlOGihMe%2Bnuu82T1DMa%2BvPH0eRXGkVOXWCSAEqaTYifLyBnsewJ3yc90Ng17s2d0leM949Zb%2FGlHw5elSmrzvf59kvCoiAsvHDWmc426vflkCjCiuVYOhvDA%2B582xltbNuFhMWhL3OtPGh9ejEXQ0OlJ8cNGSEJAL8jcIimth22tgr3EYy7cMlXyfhBmAnt6ayIOIcB7ILIpNd12fqct9cHofu%2BwoEhYcJ7T0RjEGU%2FqFkmO4lEVf7yry%2FjfoehDyJBknFK%2F48FzpV24HE%2F9aMRrhl3nzRQdg5jWHVpSOFyNutaPRFpr47BsnI%2FN6upPY&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230220T173835Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA4FHDAL3RLQJROBLE%2F20230220%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=1e83e32f3754c9cb2f859268f28bd41b55b90424e521c840d15f143691038210"
                        },
                        {
                            "id": 2,
                            "name": "Ansible",
                            "description": "text",
                            "icon": "https://usamamirza-portfolios.s3.eu-central-1.amazonaws.com/59igqh48azm5ngt12p639gkt1q6t?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCmFwLXNvdXRoLTEiRzBFAiEApt6wc1bgp%2FtyuRbjf%2B0edvy6whCeOzXmYbUQwW9TBBkCICR5D8Y88kBRIy6jglRAidEHwRlPmwWG45s2Ze0RxQRsKu0CCKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMODM1ODQ3MjE2ODY2IgzwX5jOPr93MMvLwKoqwQI2Qww0qchtlhafzOiIE2AdMSXd%2FAZ4oTFv9qt%2FJsXNNFu42plrJkDK%2FAjWFoKnPgSGZHCcRL4ngnWNDCX5j6KopQW8qLdwaME0GmknoWgo4yO4JCTPaHPpvITvCRBXWhiWvkdldef%2BzUTyU%2BkPKmaZiJC12oKahycRNgpj9NaqnBdvKts1vPDa5AUjpcfpwmjrBpANH4wKXPD95usgDmeabeEYnnJjtKfYzkIZ5o1qNisdusDnEvBL%2F9XEZPv%2Bkp%2FNJNMwlBEyiBj3bjgsS5xkc89qGC78%2FyfKTztzTWW9GxyLQxLIadCJiSfXCgkp%2BAjv0geRhwOqrXW%2Frk5ja8eI5zDZQqTHI6JoqHo%2BRHa6CLVJ0N9HA5t5dYAfi1SAHX3PY8SqYzp6bsW%2B1%2FvUjvrD2zcMH7Id1vnwA2%2BJLLoueNAw1rTMnwY6swI3AiEOSMATYQrm%2F1GUoVN%2FmvqCdRjbvDKosUL569HJFTT0EYQng5XaptR7MFZHALQycc85%2FQ2q1FzPVq99EobEvJnIlOGihMe%2Bnuu82T1DMa%2BvPH0eRXGkVOXWCSAEqaTYifLyBnsewJ3yc90Ng17s2d0leM949Zb%2FGlHw5elSmrzvf59kvCoiAsvHDWmc426vflkCjCiuVYOhvDA%2B582xltbNuFhMWhL3OtPGh9ejEXQ0OlJ8cNGSEJAL8jcIimth22tgr3EYy7cMlXyfhBmAnt6ayIOIcB7ILIpNd12fqct9cHofu%2BwoEhYcJ7T0RjEGU%2FqFkmO4lEVf7yry%2FjfoehDyJBknFK%2F48FzpV24HE%2F9aMRrhl3nzRQdg5jWHVpSOFyNutaPRFpr47BsnI%2FN6upPY&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230220T173958Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA4FHDAL3RLQJROBLE%2F20230220%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=7d04ccc2c7535e8d998c4452d39e25d25fe3a45ef0a9d54634000b22bef3b5c3"
                        },
                    ]
                },  {
                    "id": 3,
                    "name": "Frontend Development",
                    "description": "Development",
                    "tech_lang": [
                        {
                            "id": 1,
                            "name": "Vue.js",
                            "description": "text",
                            "icon": "https://usamamirza-portfolios.s3.eu-central-1.amazonaws.com/locyf2rq1p7wv4xvja80xnag2ijo?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCmFwLXNvdXRoLTEiRzBFAiEApt6wc1bgp%2FtyuRbjf%2B0edvy6whCeOzXmYbUQwW9TBBkCICR5D8Y88kBRIy6jglRAidEHwRlPmwWG45s2Ze0RxQRsKu0CCKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMODM1ODQ3MjE2ODY2IgzwX5jOPr93MMvLwKoqwQI2Qww0qchtlhafzOiIE2AdMSXd%2FAZ4oTFv9qt%2FJsXNNFu42plrJkDK%2FAjWFoKnPgSGZHCcRL4ngnWNDCX5j6KopQW8qLdwaME0GmknoWgo4yO4JCTPaHPpvITvCRBXWhiWvkdldef%2BzUTyU%2BkPKmaZiJC12oKahycRNgpj9NaqnBdvKts1vPDa5AUjpcfpwmjrBpANH4wKXPD95usgDmeabeEYnnJjtKfYzkIZ5o1qNisdusDnEvBL%2F9XEZPv%2Bkp%2FNJNMwlBEyiBj3bjgsS5xkc89qGC78%2FyfKTztzTWW9GxyLQxLIadCJiSfXCgkp%2BAjv0geRhwOqrXW%2Frk5ja8eI5zDZQqTHI6JoqHo%2BRHa6CLVJ0N9HA5t5dYAfi1SAHX3PY8SqYzp6bsW%2B1%2FvUjvrD2zcMH7Id1vnwA2%2BJLLoueNAw1rTMnwY6swI3AiEOSMATYQrm%2F1GUoVN%2FmvqCdRjbvDKosUL569HJFTT0EYQng5XaptR7MFZHALQycc85%2FQ2q1FzPVq99EobEvJnIlOGihMe%2Bnuu82T1DMa%2BvPH0eRXGkVOXWCSAEqaTYifLyBnsewJ3yc90Ng17s2d0leM949Zb%2FGlHw5elSmrzvf59kvCoiAsvHDWmc426vflkCjCiuVYOhvDA%2B582xltbNuFhMWhL3OtPGh9ejEXQ0OlJ8cNGSEJAL8jcIimth22tgr3EYy7cMlXyfhBmAnt6ayIOIcB7ILIpNd12fqct9cHofu%2BwoEhYcJ7T0RjEGU%2FqFkmO4lEVf7yry%2FjfoehDyJBknFK%2F48FzpV24HE%2F9aMRrhl3nzRQdg5jWHVpSOFyNutaPRFpr47BsnI%2FN6upPY&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230220T174048Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA4FHDAL3RLQJROBLE%2F20230220%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=7dbf7ec574712912af0364b651f7b2e739c697c150e7da873ca8c1a38b544083"
                        }
                    ]
                },
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