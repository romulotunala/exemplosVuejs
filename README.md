# Desafios Vue.js

## 03 - Criando e usando Componentes
<!-- Aula 03 - Criando novas páginas e componentes -->

1. Inicie um novo projeto em sua máquina (não se esqueça de instalar o vue-router)
2. Crie três novos componentes com os nomes **About.vue**, **Contato.vue** e **Header.vue**. 
3. Inclua os componentes **About.vue** e **Contato.vue** na rota no arquivo **index.js**. Eles serão nossas páginas.
4. Importe o componente **Header.vue** dentro dos nossos componentes da na rota. Ele será nosso cabeçario.
5. Estilize usando o layout abaixo. Não esqueça de deixar responsivo!!

## 04 - Marcando pontos
<!-- Aula 04 - Eventos e métodos -->

1. Inicie um novo projeto em sua máquina
2. Crie um componente com o nome **Placar.vue** e configure-o na rota
3. Conforme layout abaixo crie um contador pontos para dois times usando eventos e metodos (v-on e methods).
4. Não esqueça de colocar no Github depois que terminar.

## 04 - Calculadora

## 05 - Lista Alunos
<!-- Aula 07 - Renderizando Listas -->
<!-- Ver possivel alteração para 05 -->

1. Inicie um novo projeto em sua máquina.
2. Crie um componente e coloque-o na rota.
3. Crie um **array** e o inicie com no mínimo três **object** para que possa testar.
4. Crie um <code>ul li</code> usando um <code>v-for</code> para rendezizar todos os dados do **array**.
5. Usando como base a layout abaixo estilize-o.
6. Crie um repositório no Github e envie.

## 05 - Evoluindo a Lista Alunos

1. Clone o repositório ou de <code>$git pull</code> para atualizar.
2. Implemente um filtro e um input pra pesquisa usando [funções nativas](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array) do JavaScript ou o [Lodash](https://lodash.com/docs/4.17.10).
3. Incremente um formulário para incluir itens na lista.
4. Contiune seguindo o layout e estilize.    

## 06 - Convertendo Número em Moeda
<!-- Aula 05 - Dados Computados -->
<!-- Ver possivel alteração para 06 -->

1. Inicie um novo projeto em sua máquina
2. Crie um componente e configura-o na rota
3. Conforme layout abaixo crie uma entrada de numero e usando o **computed** converta essa numero para moeda.  

## 07 - Evoluindo o desafio Marcando Pontos
<!-- Aula 06 - Renderização Condicionais -->
<!-- Ver possivel alteração para 07 -->

Vamos utilizar o desafio da aula 4 - Marcando Pontos para implementar o resultado do placar.

1. Clone o projeto do seu Github. Faça o processo de instalação das dependências e coloque o servidor para rodar.
2. Inclua um botão com para gerar o resultado da partida.
3. Crie um método usando IF--Else para o mostrar vencedor ou empate.

## 08 - Criando Comentários escolhendo Usuário
<!-- Usando $emit -->
<!-- Aula 08 - Comunicação entre componentes -->

1. Crie dois componentes **Comments.vue** e **UserList.vue**
2. Coloque o componente **Comments.vue** na rota e estilize conforme o layout.
3. No componente **UserList.vue** crie um array com uma lista básica de usuário contendo {nome, email e foto}
4. Importe ele no componente **Comments.vue** mostrando somente o batão.
5. Ainda em **UserList.vue** envie o **array** via  <code>$emit</code> o array para ser usado no componente pai.
6. No componente pai crie um array <code>comment:[]</code> contento os valores {name, email, foto e comentário}
7. Use um form para incluir os dados do  <code>comment:[]</code>


