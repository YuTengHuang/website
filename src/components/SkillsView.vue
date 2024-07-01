<template>
    <div class="container">
        <h1 class="skill-title">{{ skill.id }}</h1>
        <div class="content">
            <div class="imgbox" :style="{ transform : `perspective(1000px) rotateY(${roateAngle}deg)`}">
            <span v-for="(item, index) in skill.content" :key="index" :style="{'--i':`${ 8 - index }`,animationDelay: `${(index + 3) / 10}s` }">
                <img :src="`${item.toLowerCase()}.png`">
            </span>
            </div>
            <div class="imgText">
                <transition name="fade">
                    <h1 v-if="showText">{{ skill.content[index] }}</h1>
                </transition>
            </div>

            <div class="btns">
                <div class="btn prev" @click="prevFunc"></div>
                <div class="btn next" @click="nextFunc"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useContentStore } from '@/stores'
const info = useContentStore().info
const skill = info.find(item => item.id === "Skills")

const roateAngle = ref(0)
const index = ref(0)
const showText = ref(true)

function prevFunc(){
    roateAngle.value += 45
    index.value = (index.value + 1 + skill.content.length) % skill.content.length
}
function nextFunc(){
    roateAngle.value -= 45
    index.value = (index.value - 1 + skill.content.length) % skill.content.length
}

watch(index, () => {
    showText.value = false

    setTimeout(() => {
        showText.value = true
    }, 500)
})


</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
.fade-enter-to, .fade-leave {
    opacity: 1;
}

/*--------skills---------*/
#skills {
	justify-content: center;
}

#skills .container{
	justify-content: center;
    align-items: center;
	height: 100%;
	width: 100%;
    flex-direction: column;
}

#skills .content{
    position: relative;
	display: grid;
	height: 100%;
	width: 100%;
	text-align: left;
	justify-content: center;
    align-content: center;
	gap: 50px;
}

#skills h1 {
	font-size: 30px;
    width: 100%;
}

.imgbox{
    position: relative;
    width: 125px;
    height: 125px;
    transform-style: preserve-3d;
    transition: 1s;
    margin: 50px 10px;
}

.imgbox span{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform-style: preserve-3d;
    transform: rotateY(calc(var(--i) * 45deg)) translateZ(400px);
    animation: Skillimg-ani 1s infinite alternate;
}

.imgbox span img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
}

.imgText{
    width: 100%;
    text-align: center;
    margin-top: 2%;
    padding-top: 5%;
}


/*-------- btns ---------*/
.btns {
    justify-content: center;
    display: flex;
    gap: 30px;
}

.btns .btn{
    position: relative;
    width: 60px;
    height: 60px;
    border: 2px solid white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: .5s;
}

.btns .btn::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border-top: 3px solid white;
    border-right: 3px solid white;
    transform: rotate(45deg) translate(-2.5px, 2.5px);
}

.btns .btn:hover {
    background-color: white;
}

.btns .btn:hover::before {
    border-top: 3px solid black;
    border-right: 3px solid black;
}

.btns .btn.prev::before {
    transform: rotate(225deg) translate(-2.5px, 2.5px);
}

@media screen and (max-width: 899.8px) {

    .skill-title{
        text-align: center;
    }

    .imgbox{
        width: 7rem;
        height: 7rem;
    }

    .imgbox span{
        transform: rotateY(calc(var(--i) * 45deg)) translateZ(200px);
    }
    .btns .btn {
        width: 40px;
        height: 40px;
    }
}



@media screen and (max-width: 599.8px) { 

    .skill-title{
        text-align: center;
    }

    .imgbox{
        width: 4rem;
        height: 4rem;
        margin: 50px;
    }

    .imgbox span{
        transform: rotateY(calc(var(--i) * 45deg)) translateZ(130px);
    }
}
</style>