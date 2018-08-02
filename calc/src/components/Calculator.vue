<template>
<div id="appCalculator">
	<main class="deviceCalculator">
		<section class="sectionCalc sectionCalc-display">
			<p class="display resumeCalc">{{ value1 }} {{ operator }} {{ value2 }}</p>
			<p class="display resultCalc">{{ visor }}</p>
		</section>
		<section class="sectionCalc">
			<div class="keyboard">
				<button class="keyboard-btn btn-foldedSize" @click="restart()">C</button>
				<button class="keyboard-btn">+/-</button>
				<button class="keyboard-btn">%</button>
				<button class="keyboard-btn" @click="write('7')">7</button>
				<button class="keyboard-btn" @click="write('8')">8</button>
				<button class="keyboard-btn" @click="write('9')">9</button>
				<button class="keyboard-btn" @click="setOperator('+')">+</button>
				<button class="keyboard-btn" @click="write('4')">4</button>
				<button class="keyboard-btn" @click="write('5')">5</button>
				<button class="keyboard-btn" @click="write('6')">6</button>
				<button class="keyboard-btn" @click="setOperator('-')">-</button>
				<button class="keyboard-btn" @click="write('1')">1</button>
				<button class="keyboard-btn" @click="write('2')">2</button>
				<button class="keyboard-btn" @click="write('3')">3</button>
				<button class="keyboard-btn" @click="setOperator('*')">x</button>
				<button class="keyboard-btn" @click="write('0')">0</button>
				<button class="keyboard-btn" @click="write('00')">00</button>
				<button class="keyboard-btn" @click="write('.')">.</button>
				<button class="keyboard-btn" @click="setOperator('/')">÷</button>
			</div>
			<button class="keyboard-btn btn-totalSize" @click="calc()">=</button>
		</section>
	</main>
</div>
</template>
<script>
export default{
	name:'Calculator',
	data(){
		return{
			visor:0,
			value1:'',
			value2:'',
			result:'',
			operator:''
		}
	},
	methods:{
		write(value){
			if(this.result == ''){
				if(this.operator === ''){
					this.value1 = this.value1 + value 
					this.visor = this.value1
				}else{
					this.value2 = this.value2 + value
					this.visor = this.value2
				}
			}else{
				this.restart()
				if(this.operator === ''){
					this.value1 = this.value1 + value 
					this.visor = this.value1
				}else{
					this.value2 = this.value2 + value
					this.visor = this.value2
				}
			}
		},
		setOperator(value){
			this.operator = value
		},
		calc(){
			if(this.value1 == '' || this.value2 == '' || this.operator == ''){
				alert("Preencha todos os valores!")
			}else{
				if(this.operator === '+'){
					this.result = parseFloat(this.value1) + parseFloat(this.value2)
					this.visor = this.result
				}else if(this.operator === '-'){
					this.result = parseFloat(this.value1) - parseFloat(this.value2)
					this.visor = this.result
				}else if(this.operator === '*'){
					this.result = parseFloat(this.value1) * parseFloat(this.value2)
					this.visor = this.result
				}else{
					if(this.value2 === 0 || this.value2 === ''){
						alert("Preencha todos os valores!")
					}else{
						this.result = parseFloat(this.value1) / parseFloat(this.value2)
						this.visor = this.result
					}
				}
			}
		},
		clear(){
			this.value1 = ''
			this.value2 = ''
			this.operator = ''
		},
		restart(){
			this.clear()
			this.visor = 0
			this.result = ''
		}

	}
}
</script>
<style scoped>
/*https://dribbble.com/shots/2334270-004-Calculator*/

@import url('https://fonts.googleapis.com/css?family=Yantramanav:100,300,');

#appCalculator{
	height: 100vh;
	background: #333 url(../assets/bgGray.jpg) no-repeat center;
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;

}
.deviceCalculator{
	width: 300px;
	min-height: 80vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
@media(max-width: 450px){
	.deviceCalculator{
		width: 100%;
	}
}
.sectionCalc{
	width: 100%;
	min-height: 100px;
	background-color: #FFF;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

@media(max-width: 450px){
	.sectionCalc{
		min-height: 30vh;
		box-shadow: inset 0 0 20px #aaa;
	}
}
.sectionCalc-display{
	height: 100px;
	overflow-x: auto;
	align-items: flex-start;
}
.sectionCalc-display::-webkit-scrollbar{
  height: 7px;
}
/* Track */
.sectionCalc-display::-webkit-scrollbar-track{
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
/* Handle */
.sectionCalc-display::-webkit-scrollbar-thumb{
  background: #ed683d; 
  border-radius: 10px;
}
/* Handle on hover */
.sectionCalc-display::-webkit-scrollbar-thumb:hover{
    background: #b30000;
}
.display{
	min-width: 100%;
	font-family: 'Yantramanav', sans-serif;
	font-weight: 300;
	display: flex;
	justify-content: flex-end;
	align-items: center;
}
.resumeCalc{
	height: 30px;
	padding:10px;
	padding-bottom: 0;
	font-size: 1em;
	color:#777;
}
.resultCalc{
	height: 60px;
	padding: 10px;
	padding-top: 0;
	font-size: 2em;
}
@media(max-width: 450px){
	.resumeCalc{
		font-size: 2em;
	}
	.resultCalc{
		font-size: 4em;
		padding-top: 1em;
	}
}
.keyboard{
	width: 360px;
	min-height: 375px;
	background-color: rgba(00,00,00,0.8);
	box-shadow: 10px 10px 60px #000;
	position: relative;
	z-index: 1;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
	align-content: center;
}
@media(max-width: 450px){
	.keyboard{
		width: 100%;
	}
}
.keyboard-btn{
	width: 75px;
	height: 75px;
	border:none;
	background-color: transparent;
	font-family: 'Yantramanav', sans-serif;
	font-weight: 100;
	color:#FFF;
	font-size: 35px;
}
@media(max-width: 450px){
	.keyboard-btn{
		width: 25%;
		height: 80px;
	}
}
.keyboard-btn:focus{
	outline: none;
	box-shadow: 0px 0px 30px #222 inset;
}
.btn-foldedSize{
	width: 150px;
}
@media(max-width: 450px){
	.btn-foldedSize{
		width: 50%;
	}
}
.btn-totalSize{
	width: 300px;
	background: linear-gradient(to right, #ed683d, #ed5321);
	font-size: 50px;
}
@media(max-width: 450px){
	.btn-totalSize{
		width: 100%;
	}
}	
.btn-totalSize:focus{
	box-shadow: none;
}
</style>