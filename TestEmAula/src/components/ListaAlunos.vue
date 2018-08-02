<template>
<div id="appVnw">
	<header class="menuBar">
		<img class="menuBar-logo" src="../assets/logo_VnW.svg">
		<nav class="menuBar-nav">
			<a class="manuBarNav-item" href="#">&lsaquo; Home &rsaquo;</a>
			<a class="manuBarNav-item" href="#">&lsaquo; Alunos &rsaquo;</a>
			<a class="manuBarNav-item" href="#">&lsaquo; Sobre &rsaquo;</a>
			<a class="manuBarNav-item" href="#">&lsaquo; Contato &rsaquo;</a>
		</nav>
	</header>
	<main class="appVnw-container">
		<section class="container-listaAlunos">
			<div class="mask">
				<h2 class="listaAlunos-title">Alunos do Vai na Web - Cpx do Alemão</h2>
				<aside class="headerList">
					<form class="formFiltro">
						<label for="orderBy">Ordernar por:</label>
						<select class="formControl" v-model="configs.orderBy" name="orderBy">
							<option value="name">Nome</option>
							<option value="age">Idade</option>
							<option value="" selected>Auto</option>
						</select>
						<label for="order">Ordem:</label>
						<select class="formControl" v-model="configs.order" name="order">
							<option value="asc">Crescente</option>
							<option value="desc">Decrescente</option>
							<option value="" selected>Auto</option>
						</select>
						<label>Filtrar</label>
      					<input type="text" class="formControl" placeholder="Filtrar por nome" v-model="configs.filter">
					</form>
					<div class="insertStudent" v-if="insert">
						<button @click="insert=false">Inserir aluno</button>
					</div>
					<form class="insertStudent" @submit.prevent="onSubmit" v-else>
						<div class="closeInsert" @click="insert=true">x</div>
						<label for="name">Nome:</label>
						<input type="text" name="name" v-model="name" placeholder="insira o nome">
						<label for="age">Idade:</label>
						<input type="text" name="age" v-model="age" placeholder="insira a idade">
						<button type="submit">Enviar</button>
					</form>
				</aside>
				<Alunos
					:orderedStudents="orderedStudents"
					@remove = "value => {remove = value}" 
					@removeStudent = "value => {removeStudent = value}"
				>
				</Alunos>
			</div>	
		</section>
	</main>
</div>
</template>

<script>
import _ from 'lodash'
import Alunos from './Alunos.vue'

export default{
	name: 'ListaAlunos',
	data(){
		return{
			name:'',
			age:'',
			insert:true,
			remove:false,
			removeStudent:'',
			configs: {
		    	orderBy: '',
		     	order: '',
		     	filter:''
		    },
		    alunos:[
				{
					name: 'Renan Carvalho', 
					age: '33'
				},
				{
					name: 'Caio Fernandes', 
					age: '17'
				},
				{
					name: 'Karolayne Daniel', 
					age: '17'
				},
				{
					name: 'Anna Luiza', 
					age: '22'
				},
				{
					name: 'Gabriel Milão', 
					age: '18'
				}
			]
		}
	},
	watch:{
		removeStudent(){
			if(this.remove === true){
				// _.remove()
				this.$delete(this.orderedStudents, this.removeStudent)
				// this.orderedStudents.splice(this.removeStudent, 1)
				this.remove = false
				this.removeStudent = ''
			}
		}
	},
	computed:{
		orderedStudents(){
			if (_.isEmpty(this.configs.filter)) {
				if(this.configs.orderBy || this.configs.order){
					return _.orderBy(this.alunos, this.configs.orderBy, this.configs.order) 
				}
    		    return this.alunos;
      		}

      		return _.filter(this.alunos, aluno => aluno.name.indexOf(this.configs.filter) >= 0);


			return this.alunos
		}
	},
	methods:{
		onSubmit(){
			this.alunos.push(
				{
					name: this.name,
					age: this.age
				}
			)

			this.name = ''
			this.age = ''
		}
	},
	// components:{
	// 	Alunos
	// }
}
</script>
<style scoped>
#appVnw{
	min-height: 100vh;
	border: 10px solid #2e3192;
}
.menuBar{
	width: 100%;
	height: 80px;
	border-bottom: 10px solid #2e3192;
	background-color:  #fcaf17;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.menuBar-logo{
	width: 65px;
	margin-left: 30px;
}
.menuBar-nav{
	min-width: 20%;
	margin-right: 40px;
}
.manuBarNav-item{
	margin: auto 20px;
	text-decoration: none;
	font-size: 16px;
	word-spacing: 5px;
}
.appVnw-container{
	width: 100%;
	height: 80vh;
}
.container-listaAlunos{
	width: 100%;
	height: 84vh;
	background:rgba(46, 50, 146, 0.8) url(../assets/bg.jpg) no-repeat center fixed;
	background-size: cover;
}
.mask{
	width: 100%;
	height: 86vh;
	padding-top: 10vh;
	position: relative;
	background-color: rgba(46, 50, 146, 0.8);
	color: #fff;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: flex-start;
	align-content: flex-start;
}
.listaAlunos-title{
	width: 90%; 
	margin-bottom: 30px;
	text-align: center;
}
.headerList{
	width: 20%;
	margin-right: 10%;
}
.formFiltro{
	width: 100%;
	margin-bottom: 20px;
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: flex-start;
}
.formControl{
	width: 100%;
	min-height: 25px;
	padding: 5px;
	margin: 5px 0;
}
.insertStudent{
	width: 100%;
	margin: 20px 0;
	position: relative;
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: flex-start;
}

.closeInsert{
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: none;
	cursor: pointer;
	background-color: #E84710;
	color:#fff;
	align-self: flex-end;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
}
.insertStudent label,
.insertStudent input,
.insertStudent button{
	margin: 5px 0;	
}
.insertStudent input{
	/*width: 100%;*/
	min-height: 25px;
	padding: 5px;
	margin: 5px 0;
}
.insertStudent button{
	padding: 10px 15px;
	border:none;
	border-radius: 19px;
	background-color: #FCAF17;
	color: #2E3192;
	font-size: 17px;
	font-weight: bold;
	text-align: center;
}

</style>