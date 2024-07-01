<template>
    <div class="container">
        <h1>{{ projects.id }}</h1>
		<div class="content" v-for="item in projects.content" :key="item.title">
			<div class="img-container">
				<img :src="`${item.img}.png`"
				@mouseover="showOverlay"
                @mouseleave="hideOverlay">
				<div class="overlay" v-if="overlay.state">
                    <h1>{{ item.imgtitle }}</h1>
                    <p>{{ item.time }}</p>
                </div>
			</div>
			<div class="contentText">
				<h1>{{ item.title }}</h1>
				<li v-for="text in item.contenttext" :key="text">
					{{ text }}
				</li>
				<a v-if="item.src" :href="item.src" target="_blank">查看Project&rarr;</a>
			</div>
		</div>
    </div>
</template>

<script setup>
import { useContentStore, useOverlayStore } from '@/stores'
const info = useContentStore().info
const projects = info.find(item => item.id === "Projects")

const overlay = useOverlayStore()
const showOverlay = overlay.showOverlay
const hideOverlay = overlay.hideOverlay
</script>

<style scoped>
#projects{
	justify-content: center;
	
}

#projects .container{
	justify-content: center;
	height: 100%;
	width: 100%;
}

#projects h1 {
	font-size: 30px;
    width: 100%;
}

#projects .content{
	display: flex;
	height: 100%;
	width: 100%;
	text-align: left;
	justify-content: center;
	gap: 50px;
}

#projects .contentText{
	width: 600px;
	display: flex;
	flex-direction: column;
	word-break: break-all;
	text-align: left;
}
#projects .contentText li{
	margin: 5px 0px;
	font-size: 20px;
}

#projects .contentText a{
	margin: 20px 0px;
	text-decoration: none;
	border: solid 2px white;
	border-radius: 5%;
	width: 110px;
	text-align: center;
	color:white;
	font-weight: 600;
	transition: .5s;
}

#projects .contentText a:hover{
	background-color: white;
	color: black;
}

.img-container img{
	width: 300px;
	height: 300px;
	border: 10px solid lightgreen;
	border-radius: 50%;
}

#projects .overlay {
	margin: 10px;
	width: 300px;
	height: 300px;
    border-radius: 50%;
}
@media screen and (max-width: 899.8px) {
	#projects .content{
		flex-direction: column;
		align-items: center;
	}

	#projects .content img{
		width: 200px;
		height: 200px;
	}

	#projects .overlay {
		margin: 10px;
		width: 200px;
		height: 200px;
		border-radius: 50%;
	}

	#projects .contentText h1 {
		text-align: center;
	}

	#projects .contentText{
		width: 400px;
		display: flex;
		flex-direction: column;
		word-break: break-all;
		text-align: left;
	}

	#projects .contentText a{
		margin: 10px auto;
	}

	#projects .overlay h1{
		font-size: 1rem;
	}
}



@media screen and (max-width: 599.8px) {
	#projects .content{
		flex-direction: column;
		align-items: center;
	}

	#projects .content img{
		width: 150px;
		height: 150px;
	}

	#projects .overlay {
		margin: 10px;
		width: 150px;
		height: 150px;
		border-radius: 50%;
	}

	#projects .contentText h1 {
		text-align: center;
	}

	#projects .contentText{
		width: 200px;
		display: flex;
		flex-direction: column;
		word-break: break-all;
		text-align: left;
	}

	#projects .contentText a{
		margin: 10px auto;
	}

	#projects .overlay h1{
		font-size: 1rem;
	}
}
</style>