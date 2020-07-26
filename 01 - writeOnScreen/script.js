let ex1 = new Vue({
  el: '#ex1',
  data: {
    frase: 'Exemplo 1'
  }
});

let ex2 = new Vue({
  el: '#ex2',
  data: {
    frase: "Exemplo 2"
  }
});

let ex3 = new Vue({
  el: '#ex3',
  data: {
    frase: "Exemplo 3"
  }
})

let ex4 = new Vue({
  el: '#ex4',
  data: {
    frase: 'Olá <strong>Lucas</strong>, tudo bem?'
  }
})

ex1.frase = "Exemplo 1 manipulado"