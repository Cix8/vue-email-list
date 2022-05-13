const app = new Vue(
    {
        el: '#root',
        data: {
            emailArray: [],
            emailsNumber: 10
        },
        methods: {
            emailGenerator: function() {
                const thisArray = [];
                for (let i = 1; i <= this.emailsNumber; i++) {
                    let thisEmail = '';
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then( (resp) => {
                        thisEmail = (resp.data.response);
                    })
                    .finally( () => {
                        console.log(thisEmail);
                        thisArray.push(thisEmail);
                        // this.emailArray = thisArray // display updated every time each email is generated
                        if (i === this.emailsNumber) {
                            this.emailArray = thisArray; // display updated only when emailArray.length = 10
                        }
                    })
                }
            }
        }
    }
)