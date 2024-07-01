<template>
  <div name="navbar" id="navbar">
    <div id="menu-toggle" @click="toggleMenu" :class="{ 'toggled': isToggled }">
        <!--中間線-->
        <div class="middle-line"></div> 
    </div>

    <nav>
        <div class="space" style="flex: 0 1 80px;"></div>
        <div id="logo" ref="logoStyle" class="pixel" @click="scrollEffect.goTop"></div>
        <div id="menu">
          <div 
          v-for="(item, index) in info"
          :key="item.id"
          @click="scrollEffect.scrollToSection(item.id)"
          class="menu-btn"
          :style="{ animationDelay: `${(index + 3) / 10}s`}"
		  :data-subtitle="item.subtitle"
          :id="`nav-btn-${item.id.toLowerCase()}`"
		  @mouseover="textEffectFunc(item)">
          {{ item.displayText }}
          </div>
        </div>
    </nav>
  </div>

</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useContentStore, useScrollEffect } from '@/stores';
const scrollEffect = useScrollEffect().func
const props = defineProps(['table']);
const info = useContentStore().info

const isToggled = ref(false)
const toggleMenu = () => {
  	isToggled.value = !isToggled.value;
};

let currentIndex = 0
const totleIndex = 2
const logoStyle = ref(null);

function logoAnima(){
	let nextIndex = -currentIndex * 32
	logoStyle.value.style.backgroundPosition = "0px " + nextIndex + "px"
	currentIndex = (currentIndex + 1) % totleIndex
}

onMounted(()=>{
	setInterval(logoAnima, 100)
})

onUnmounted(() => {
  clearInterval(logoAnima);
});

function textEffectFunc(item){
	let iterations = 0
	const originalText = item.id
    const interval = setInterval(() => {
		item.displayText = item.displayText.split("").map((letter, index) => {
			if (index < iterations){
				return originalText[index];
			}
			return props.table[~~(Math.random() * 26)];
      	}).join("");

    	if (iterations >= originalText.length) {
    		clearInterval(interval);
      	}
      	iterations += 1 / 3;
    }, 30);
}

</script>



<style>
/*----------------------nav--------------------------------*/

nav {
	top: 0;
	padding: 5px 0;
	display: flex;
	position: fixed;
	z-index: 1;
	color: white;
	background-color: transparent;
}

.pixel{
	image-rendering: pixelated;
}

#logo{
	cursor: pointer; 
	position: relative;
	background-image: url("fly.png");
	background-size: 100%;
	width: 32px;
	height: 32px;
	flex-shrink: 0;
	animation: slide-up .5s forwards;
}

/*-- 大螢幕樣式 --*/
@media screen and (min-width: 899.8px) {
	nav{
		justify-content: space-between;
		align-items: center;
		height: 80px;
		width: 100%;
		/* border-bottom: solid 1px var(--dark); */
	}

	#menu-toggle{
		display: none;
	}

	#menu{
		display: flex;
		justify-content: space-around;
		width: auto;
	}

	nav #logo{
		margin-left: 15px;
		order: -1;
	}
/*------------------------大螢幕樣式 nav的 menu btn------------------------------*/
	.menu-btn{
		display: grid;
		width: 130px;
		text-align: center;
		font-size: 2vmin;
		margin: 0 10px;
		padding: 10px;
		line-height: 1.5;
		text-transform: uppercase;
		cursor: pointer; 
		font-weight: bolder;
		position: relative;
		font-family: Arial, Helvetica, sans-serif;
		transition: .3s;
		animation: slide-down 0.5s 0.5s backwards;
	}

	.menu-btn:hover{
		border-radius: 10px;
		background: rgb(126, 126, 126);
		color: lightgreen;
	}

	.menu-btn::after{
		content: attr(data-subtitle);

		font-size: 15px;
		font-weight: 300;
		letter-spacing: 5px;

		pointer-events: none;
		
		display: block;
	}
}

/*-- 小螢幕樣式 --*/
@media screen and (max-width: 899.8px) {
	#menu-toggle {
		position: fixed;
		top: 0;
		left: 0;
		padding: 16px;
		width: 36px;
		height: 30px;
		z-index: 2;
	}
	
	#menu-toggle::before, #menu-toggle::after {
		content: '';
		position: absolute;
		background: var(--background);
		width: 36px;
		height: 1px;
		transition-duration: 0.5s;
		transform-origin: center center;
	}
	
	/* 中間線 */
	.middle-line {
		position: absolute;
		background: var(--background);
		width: 36px;
		height: 1px;
		transition-duration: 0.5s;
		top: 50%;
	}
	
	#menu-toggle::before {
		transform: translateY(5px);
	}
	
	#menu-toggle::after {
		transform: translateY(25px);
	}
	
	#menu-toggle.toggled .middle-line{
		opacity: 0;
	}
	
	#menu-toggle.toggled::before {
		transform: translateY(14.5px) rotate(-225deg);
	}
	
	#menu-toggle.toggled::after {
		transform: translateY(14.5px) rotate(225deg);
	}

/*------------------------ 小螢幕樣式 nav 空間------------------------------*/

	nav {
		flex-direction: column;
		align-items: flex-end;
		top: 0;
		left: -300px;
		width: 240px;
		height: 100vh;
		border-right: solid 1px white;
		transition: left 0.5s ease;
	}

	#menu-toggle.toggled + nav {
    	left: 0;
		transition:left 0.5s ease;
	}


	#logo{
		margin: 8px 18px;
	}

	/*------------------------小螢幕樣式 nav的 menu btn------------------------------*/

	.menu-btn{
		text-align: right;
		transition-duration: 0.3s;  /* transition-duration單一指定過度動畫時間*/  /* transition 是簡寫,綜合多個單一指定模式*/

		margin: 8px 12px;
		padding: 8px 6px;

		font-size: 20px;
		font-weight: 700;
		letter-spacing: 2px;  /* 字間距 */

		line-height: 1;  /* 行高, 設為1,文字空間跟文字大小一樣 */

		text-transform: uppercase;
		position: relative;

		font-family: Arial, Helvetica, sans-serif;
		width: 200px;
	}

	.menu-btn::after{
		content: attr(data-subtitle);

		font-size: 15px;
		font-weight: 300;
		letter-spacing: 5px;

		pointer-events: none;
		
		display: block;
	}


	#menu-toggle.toggled + nav > #menu > .menu-btn{
		animation: slide-right 0.5s backwards;
	}	

	.menu-btn:hover{
		border-radius: 10px;
		background: black;
		color: lightgreen;
	}
}
</style>