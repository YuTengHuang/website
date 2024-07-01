<template>
    <div class="container">
		<h1>{{ about.id }} Me</h1>
		<div class="content">
			<img :src="`${about.img}.png`">
			<p>{{ about.content }}</p>
		</div>
    </div>
</template>

<script setup>
import { useContentStore } from '@/stores'
const info = useContentStore().info
const about = info.find(item => item.id === "About")

</script>

<style>
/*--------about me---------*/
#about{
	justify-content: center;
}

#about .container{
	justify-content: center;
	height: 100%;
	width: 100%;
}

#about .content{
    position: relative;
	display: flex;
	height: 100%;
	width: 100%;
	text-align: left;
	justify-content: center;
	gap: 50px;
}

#about h1{
	font-size: 30px;
}

#about .content p{
	overflow-wrap: break-word;
	font-size: 20px;
	line-height: 2;
	width: 400px;
}

#about .container img {
	width: 400px;
	height: 400px;
}

@media screen and (max-width: 899.8px) {
	#about .content{
		flex-direction: column;
		align-items: center;
	}

	#about .content p{
		width: 400px;
	}

	#about .container img {
		width: 300px;
		height: 300px;
	}
}

@media screen and (max-width: 599.8px) {
	#about .content{
		flex-direction: column;
		align-items: center;
	}

	#about .content p{
		width: 200px;
	}

	#about .container img {
		width: 150px;
		height: 150px;
	}
}
</style>