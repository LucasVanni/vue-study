let placar = new Vue({
  el: "#placar",
  data: {
    n: 4
  }
});

let lista = new Vue ({
  el: '#lista',
  data: {
    nomes: [
      { nome: "Lucas", sobrenome: "Vanni", idade: 23 },
      { nome: "Antônio", sobrenome: "Terron", idade: 30 },
      { nome: "Paulo", sobrenome: "Michael", idade: 28 },
      { nome: "Bonieky", sobrenome: "Lacerda", idade: 90 }
    ]
  }
})