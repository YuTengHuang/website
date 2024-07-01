<template>
    <div class="container">
        <p>{{ hiText }}</p>
        <strong>{{ nameText }}</strong>
        <div class="content">
            <a :href="home.src" target="_blank">
                <img :src="`${home.img}.png`">
            </a>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useContentStore } from '@/stores'

const props = defineProps(['table']);
const info = useContentStore().info
const home = info.find(item => item.id === "Home")
const hiText = ref(home.content.hi);
const nameText = ref(home.content.name);

onMounted(() => {
    textEffect(hiText);
    textEffect(nameText);
});


function textEffect(text){
    const originalText = text.value
    let iterations = 0;
    const interval = setInterval(() => {
        text.value = text.value.split("").map((letter, index) => {
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
#home {
	padding: 200px 50px 50px 50px;
}

#home .container{
    display: flex;
	justify-content: center;
    align-items: center;
	width: 100%;
	flex-direction: column;
	padding: 4rem;
	font-size: 5vmin;
	color: var(--background);
	animation: slide-up 1s forwards;
}

#home .content{
    position: relative;
	height: auto;
	width: auto;
    margin: 64px 0px;
}
#home .content img {
	height: 64px;
	width: 64px;
}
</style>