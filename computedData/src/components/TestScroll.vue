<template>
  <div>
    <VueScrollbar class="my-scrollbar" ref="Scrollbar">
      <!-- <div class="scroll-me"> -->
        <!-- <div class="kolom"></div> -->
        <!-- <div class="kolom"></div> -->
        <!-- <div class="kolom"></div> -->
        <!-- <div class="kolom"></div> -->
        <!-- <div class="kolom"></div> -->
        <!-- <div class="kolom"></div> -->
        <!-- <div class="kolom"></div>
        <div class="kolom"></div> -->
        <!-- <div class="kolom"></div>
        <div class="kolom"></div> -->
        <!-- <div class="kolom"></div>
        <div class="kolom"></div> -->
        <!-- <div class="kolom"></div>
        <div class="kolom"></div> -->
        <!-- <div class="kolom"></div>
        <div class="kolom"></div> -->
        <!-- <div class="clearfix"></div> -->
        <section>
	    	<ConversaoMoeda/>
	    </section>
      <!-- </div> -->
    </VueScrollbar>
    
  </div>
</template>
<script>
  import VueScrollbar from 'vue2-scrollbar'
  import ConversaoMoeda from './ConversaoMoeda.vue'
  require("vue2-scrollbar/dist/style/vue2-scrollbar.css")
 
  // It's required to set min height of the scrollbar wrapper 
  // require("./your/custom/style/app.css")
 
  export default {
    components:{ 
    	VueScrollbar, 
    	ConversaoMoeda
    }
  }
 
</script> 
<style scaped>
	/*The Wrapper*/
	.my-scrollbar{
	  width: 50%;
	  min-width: 300px;
	  max-height: 450px;
	}

	/*The Content*/
	.scroll-me{
	  min-width: 750px;
	}
	.kolom{
		width: 100px;
		height: 100px;
		
	}
	.clearfix{
		width: 100%;
		height: 10vh;
		background-color: blue;
	}
	section{
		width: 50%;
	}
</style>