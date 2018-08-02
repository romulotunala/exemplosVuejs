<template>
<div id="appList">
	<ul class="listaAlunos-list">
		<li class="listaAlunosList-item" v-for=" (aluno, index) in orderedStudents">
			<strong>{{ aluno.name }}</strong><br>
			<span>{{ aluno.age }} anos</span>
			<button class="buttonRemoveItem" @click="removeStudent(index)">x</button>
			<br><hr>
		</li>
	</ul>
</div>
</template>
<script>
export default{
	name:'Alunos',
	props:{
		orderedStudents:{
			type:Array,
			required:true
		}
	},
	data(){
		return{
			// remove:false
		}
	},
	methods:{
		removeStudent(value){
			this.$emit('remove', true)
			this.$emit('removeStudent', value)
		}
	}
}
</script>
<style scoped>
#appList{
	width: 20%;
	min-width:260px;
}
.listaAlunos-list{
	overflow-y: scroll;
	width: 100%;
	max-height: 60vh; 
	padding: 10px;
	margin-bottom: 50px;
	border-radius: 10px 3px 3px 10px;
	background-color: rgba(242, 101, 34,0.8);
	list-style: none;
}
.listaAlunos-list::-webkit-scrollbar{
	width: 7px;
	max-height: 30vh;
	margin-bottom: 20px;
	border-radius: 10px;
	background-color: rgba(252, 175, 23, 0.5); /*#FCAF17*/
	/*background-color: rgba(242, 101, 34,0.2);*/ /*#F26522*/
}
.listaAlunos-list::hover .listaAlunos-list::-webkit-scrollbar{
	background-color: #FCAF17;
	/*background-color: rgba(242, 101, 34,0.2);*/ /*#F26522*/
}
.listaAlunos-list::-webkit-scrollbar-thumb{
	background-color: #F26522;
	border-radius: 10px;
}
.listaAlunosList-item{
	position: relative;
}
.listaAlunosList-item strong{
	width: 90%;
	font-size: 20px;
}
.listaAlunosList-item span{

}
.buttonRemoveItem{
	width: 25px;
	height: 25px;
	border: none;
	border-radius: 50%;
	background: transparent;
	position: absolute;
	right: 10px;
	bottom: 5px;

	color:#fff;
	font-size: 20px;
	font-weight: bold;
}
.buttonRemoveItem:focus{
	outline: none;
}
.buttonRemoveItem:hover{
	background-color: rgba(252, 175, 23, 0.8);
}
.buttonRemoveItem:active{
	color:#2e3192;
}
.listaAlunosList-item hr{
	width: 100%;
	margin:10px 0;
}
</style>