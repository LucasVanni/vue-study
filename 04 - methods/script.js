let app = new Vue({
  el: '#app',
  data: {
    nome: 'Lucas',
    idade: 23
  },
  methods: {
    mostrar: (nome, idade) => {
      let text = `Olá ${nome}, e tem ${idade} anos`
      return text
    }
  }
})