<template>
	<div id="caio">
		<form>
			<input type="text" v-model="name">
		</form>
		<ul>
			<li v-for="aluno in ordenedStudents">
				{{ aluno.name }}, {{ aluno.age }} anos.
			</li>
		</ul>
	</div>
</template>
<script>
import _ from 'lodash'

export default{
	name: 'Caio',
	data(){
		return{
			name:'',
			alunos:[
				{
					name:'Rômulo',
					age:'30'
				},
				{
					name:'Caio',
					age:'17'
				},
				{
					name:'Anna',
					age:'25'
				}
			]
		}
	},
	computed:{
		ordenedStudents(){
			// return this.alunos.filter(aluno => aluno.name === this.name)
			return _.filter(this.alunos, aluno => aluno.name === this.name)
		}
	}
}
</script>
<style scoped>
	#caio{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

</style>