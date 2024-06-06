createApp({
    data() {
        return {
            arrayEmail: [],
        }
    },
    methods: {
        generateEmail: function(){
            for (let index=0; index < 10; index++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) =>{
                    let email = risultato.data.response;
                    this.arrayEmail.push(email);
                })
            }
        }
    },
    created () {
        this.generateEmail
    }
})