const vm = new Vue({
    el:"#app",
        data:{
            produtos:[],
            produto: false
        },
        filters:{
            FormatPreco(preco){
                return preco.toLocaleString("pt-BR", {style:"currency",currency:"BRL"});
            },
            maiuscula(valor){
                return valor.toUpperCase();
            }
        },
        methods:{
            fetchProdutos(){
                fetch("./api/produtos.json")
                .then(r=>r.json())
                .then(r=> {
                    this.produtos = r;
                })
            },
            fetchProduto(id){
                fetch(`./api/produtos/${id}/dados.json`)
                .then(r=>r.json())
                .then(r=> {
                    this.produto = r;
                })
            }
        },
        created(){
            this.fetchProdutos();
        }



});