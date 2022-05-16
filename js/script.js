const app = new Vue(
    {
        el: '#root',
        data: {
            emailArray: [],
            emailsNumber: 10
        },
        created() {
            for (let i = 1; i <= this.emailsNumber; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( (resp) => {
                    const thisEmail = resp.data.response;
                    console.log(thisEmail);
                    this.emailArray.push(thisEmail);
                })
            }
        }
    }
)