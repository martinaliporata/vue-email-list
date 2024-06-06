const {createApp} = Vue


createApp ({
    data(){
        return {
            arrayEmail: [],
        }
    },
    methods: {
        getData(){
            for (let index=0; index < 10; index++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) =>{
                    console.log(response.data.response);
                    this.arrayEmail.push(response.data.response);
                });
            }
        }
    },
    created(){
        this.getData()
    }
}).mount('#app')