<template>
<div id="appCalc">
	<div class="container-centralizer"> 
		<main class="mainContainer">
			<section class="mainContainer-section section-inputs">
				<input class="sectionInputs-value firstValue" 
					type="number"
					min="0" max="9999999999"
					v-model.number="value1"
					v-validate:value1="{required: true, maxlength: 10}"
					@click="result=''">
				<input class="sectionInputs-value secondValue" 
					type="number"
					min="0" max="9999999999"
					maxlength="10"
					v-model.number="value2"
					@click="result=''">
				<p class="sectionInputs-result">{{ result }}</p>
			</section>
			<section class="mainContainer-section section-keyboard">
				<button 
					class="sectionKeyboard-btn btnOperator" 
					@click="calc('soma')"
				>+</button>
				<button
					class="sectionKeyboard-btn btnOperator" 
					@click="calc('subtracao')"
				>-</button>
				<button 
					class="sectionKeyboard-btn btnOperator"
					@click="calc('multiplicacao')"
				>*</button>
				<button 
					class="sectionKeyboard-btn btnOperator"
					@click="calc('divisao')"
				>/</button>
			</section>
		</main>
	</div>
</div>
</template>
<script>
export default{
	name:"Calc",
	data(){
		return{
			value1:0,
			value2:0,
			result:''
		}
	},
	// watch:{
	// 	value2(){
	// 		 if (this.value2 > 10) {
	// 	        this.value2 = this.value2.slice(0,10); 
	// 	    }
	// 	}
	// },
	methods:{
		calc(value){
			if(value === 'soma'){
				this.result = this.value1 + this.value2
				this.value1 = 0
				this.value2 = 0
			}else if(value === 'subtracao'){
				this.result = this.value1 - this.value2
				this.value1 = 0
				this.value2 = 0
			}else if(value === 'multiplicacao'){
				this.result = this.value1 * this.value2
				this.value1 = 0
				this.value2 = 0
			}else{
				if(this.value2 === 0 || this.value2 === ''){
					alert("Preencha todos os valores!")
				}else{
					this.result = this.value1 / this.value2
					this.value1 = 0
					this.value2 = 0
				}
			}
		}
	}
}
</script>
<style>
/* link do layout https://dribbble.com/shots/2863670-Calculator-DailyUI-004*/

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500');
#appCalc{
	width: 100%;
	height: 100vh;
	color:#FFF;
	/*background-color: #2DB0A8;*/
	background-image: radial-gradient(circle, #36D0C7 2%, #288E88 70%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.header{
	width: 100%;
	height: 7%;
	background-color: #2C2348;
	display: flex;
	justify-content: center;
	align-items:center; 
}
.header-title{
	font-size: 5vw;
}
@media(max-width: 300px){
	.header-title{
		font-size: 1em;
	}	
}
.container-centralizer{
	width:400px;
	/*min-width:300px;*/
	height: 0;
	padding-bottom: 400px;
	border-radius: 50%;
	overflow: hidden;
	position: relative;
	box-shadow: 0 0 20px #000;
}
@media(max-width: 640px){
	.container-centralizer{
		width:300px;
		padding-bottom: 300px;
	}
}
.mainContainer{
	width: 100%;
	height: 100%;
	position: absolute;
	/*background-color: red;*/
}
.mainContainer-section{
	
	/*max-height: 70%;*/
}
.section-inputs{
	height: 30%;
}
.sectionInputs-value{
	width: 100%;
	height: 35%;
	padding: 10px;
	border:none;
	background-color: #71C9C3;
	text-align: center;
	color:#FFF;
	font-family: 'Montserrat', sans-serif;
	font-weight:400;
	font-size: 20px;
}
.sectionInputs-value:focus{
	outline: none;
	box-shadow: 0 0 10px #1191A5;
	position: relative;
	z-index: 1;
}
.firstValue{

} 
.secondValue{

}
.sectionInputs-result{
	width: 100%;
	height: 30%;
	background-color: #1191A5;
	display: flex;
	justify-content: center;
	align-items: center;
}
.section-keyboard{
	height: 70%;
	background-color: #2DB0A8;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: flex-start;
	align-content: flex-start;
}
.sectionKeyboard-btn{
	width: 50%;
	height: 50%;
	background-color: #2DB0A8;
	border:none;
	font-family: 'Montserrat', sans-serif;
	font-weight:400;
	font-size: 5vw;
	color:#FFF;
}
.sectionKeyboard-btn:focus{
	outline:none;
	border-radius: 20px;
	box-shadow: 0 0 7px #288E88;
	position: relative;
	z-index: 1;
}
.btnNumber{

}
.btnOperator{

}
</style>