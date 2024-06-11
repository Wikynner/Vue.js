let app = new Vue({
    el:'#app',
    data:{
     primeiroNome:'',
     segundoNome:''
    },
    methods: {
    
    },
    watch:{
       
    },
    computed:{
        nomeCompleto:function(){

            return this.primeiroNome+' '+this.segundoNome;
        }
       
    }

   });