<template>
<div id="app2">
	<header>
		<h1>Conversão de Moeda</h1>
	</header>
	<main>
		<section>
			<label>Valor:</label>	
			<input type="number"
				placeholder="insira um valor"
				v-model="valor"
				@keyup.enter="show=true"
			>
			<button class="close" @click="clear()">x</button>
			<br>
			<p v-show="show">{{ moeda }}</p>
		</section>
	</main>
</div>
</template>
<script>

export default{
	data(){
		return{
			valor:'',
			show: false
		}
	},
	computed:{
		moeda(){
			return 'R$ '+parseFloat(this.valor).toFixed(2)
			// return 'R$ '+this.valor
		}
	},
	methods:{
		clear(){
			this.valor = ''
			this.show = false
		}
	}
}
</script>
<style scoped>
	#app2{
		width: 100%;
		height: 90vh;
		overflow-y: scroll;
	}
	section{
		width: 100%;
		margin: 0 auto;
		position: relative;
		display: flex;
	}
	.test{
		flex-direction: column;
	}
	.close{
		width: 15px;
		height: 15px;

		margin: 0;
		margin-left: 10px;

		background-color: #000;

		border: none;
		border-radius: 50%;

		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;
		color:#fff;
		text-align:center;
	}
</style>