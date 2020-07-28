let bandeira = (pais) => {
    let url = `<img src="assets/${pais}.png" />`
    return url;
}

let app = new Vue({
    el: '#app',
    data: {
        /* 
            Utilizado para a primeira e segunda forma de fazer
            pais: '',
        */
        Argentina: bandeira('argentina'),
        Brasil: bandeira('brazil'),
        China: bandeira('china'),
        Inglaterra: bandeira('uk'),
        Estados_Unidos: bandeira('usa'),
    },
    methods: {
        list: function (){ 
            return[
                { bandeira: this.Argentina, continente: 'América do Sul'},
                { bandeira: this.Brasil, continente: 'América do Sul'},
                { bandeira: this.China, continente: 'Ásia'},
                { bandeira: this.Inglaterra, continente: 'Europa'},
                { bandeira: this.Estados_Unidos, continente: 'América do Norte'}
            ]
        }
    }
});

/* 
    Utilizado para a primeira e segunda forma de fazer
    app.pais = 'Brasil';
*/