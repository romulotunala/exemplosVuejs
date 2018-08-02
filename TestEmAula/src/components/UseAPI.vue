<template>
	<div id="APP-CEP">
		<form>
			<label for="cep">Cep</label>
			<input 
				type="text" 
				name="cep" 
				placeholder="entre com seu CEP" 
				v-model="cep" 
				@keyup.enter="getData()"
				@keyup.tab="getData()"
			>
			<label for="street">Rua</label>
			<input type="text" name="street" placeholder="" v-model="street">
			<label for="city">Cidade</label>
			<input type="text" name="city" placeholder="" v-model="city">
			<label for="uf">UF</label>
			<input type="text" name="uf" placeholder="" v-model="uf">
			<button type="submit">Enviar</button>
		</form>
	</div>
</template>
<script>
import axios from 'axios'

export default{
	name:'UseAPI',
	data(){
		return{
			cep:'',
			street:'',
			city:'',
			uf:''
		}
	},
	methods:{
		getData(){
			axios.get('https://viacep.com.br/ws/'+this.cep+'/json/')
			.then(response => {
				this.street = response.data.logradouro
				this.city = response.data.localidade
				this.uf = response.data.uf
			})
		}
	}
}
</script>
<style scoped>
	#APP-CEP{
		width:100%;
		min-height:100vh;
		background:#CECECE;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	form{
		width: 50%;
		height: 80%;
		background:#F9F9F9;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	input{
		width: 60%;
	}
	button{
		
	}
</style>
