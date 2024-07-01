<template>
    <div class="container">
        <h1>{{ works.id }}</h1>
		<div class="content" v-for="item in works.content" :key="item.title">
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
				<a v-if="item.src" :href="item.src" target="_blank">查看Works&rarr;</a>
			</div>
		</div>
    </div>
</template>

<script setup>
import { useContentStore, useOverlayStore } from '@/stores'
const info = useContentStore().info
const works = info.find(item => item.id === "Works")

const overlay = useOverlayStore()
const showOverlay = overlay.showOverlay
const hideOverlay = overlay.hideOverlay

</script>

<style scoped>

#works{
	justify-content: center;
}

#works .container{
	justify-content: center;
	height: 100%;
	width: 100%;
}

#works h1 {
	font-size: 30px;
    width: 100%;
}

#works .content{
    position: relative;
	display: flex;
	height: 100%;
	width: 100%;
	text-align: left;
	justify-content: center;
	gap: 50px;
}

#works .contentText{
	width: 600px;
	display: flex;
	flex-direction: column;
	word-break: break-all;
	text-align: left;
}
#works .contentText li{
	margin: 5px 0px;
	font-size: 20px;
}

#works .contentText a{
	margin: 20px 0px;
	text-decoration: none;
	border: solid 2px white;
	border-radius: 5%;
	width: 110px;
	text-align: center;
	color:white;
	transition: .5s;
	font-weight: 600;
}

#works .contentText a:hover{
	background-color: white;
	color: black;
}

.img-container img{
    position: relative; 
	width: 300px;
	height: 300px;
    border: 10px solid lightcoral;
    border-radius: 30%;
}

@media screen and (max-width: 899.8px) {
	#works .content{
		flex-direction: column;
		align-items: center;
	}

	#works .content img{
		width: 200px;
		height: 200px;
	}

	#works .contentText h1 {
		text-align: center;
	}

	#works .contentText{
		width: 400px;
		flex-direction: column;
		word-break: break-all;
		text-align: left;
	}

	#works .contentText a{
		margin: 10px auto;
	}

	#works .overlay h1{
		font-size: 1rem;
	}
}



@media screen and (max-width: 599.8px) {
	#works .content{
		flex-direction: column;
		align-items: center;
	}

	#works .content img{
		width: 150px;
		height: 150px;
	}

	#works .contentText h1 {
		text-align: center;
	}

	#works .contentText{
		width: 200px;
		flex-direction: column;
		word-break: break-all;
		text-align: left;
	}

	#works .contentText a{
		margin: 10px auto;
	}
	
	#works .overlay h1{
		font-size: 1rem;
	}
}
</style>