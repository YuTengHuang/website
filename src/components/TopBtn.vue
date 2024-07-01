<template>
    <div @click="scrollEffect.goTop" id="topBtn" title="Go to top" :style="{ display: toggleBtn}"></div>
</template>

<script setup>
import {onUnmounted ,onMounted ,ref, computed  } from 'vue'
import { useScrollEffect } from '@/stores'
const toggleBtn = ref("none");
const scrollEffect = useScrollEffect().func

function scrollFunction(){
    toggleBtn.value = computed(()=>{
        if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
            return "block"
        } else {
            return "none"
        }
    }).value
}

onMounted(() => {
  window.addEventListener('scroll', scrollFunction);
}),

onUnmounted(() => {
  window.removeEventListener('scroll', scrollFunction);
});

</script>

<style>
#topBtn {
	display: none;
	position: fixed;
	bottom: 50px;
	right: 40px;
	z-index: 99;
	cursor: pointer;
	height: 50px;
  	width: 50px;
	border-radius: 50%;
	transition: .5s;
}

#topBtn:hover{
	border: solid 1px white;
}
  
#topBtn::before , #topBtn::after{
	content: '';
	position: absolute;
	background: var(--background);
	top: 65%;
	width: 25px;
	height: 3px;
	transition-duration: 0.5s;
	animation: top-ani 1s infinite alternate;
}

#topBtn::before{
	transform-origin: left bottom;
	transform:rotate(-45deg);
	left: 7.5px;
}
#topBtn::after{
	transform-origin: left bottom;
	transform: translateX(50px) translateY(-1px) rotate(225deg);
	left: -7.5px;
}
</style>