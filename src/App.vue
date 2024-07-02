<template>
  <RouterView />
</template>

<style>
#app {
  width: 100%;
  margin: 0 auto;
  /* padding: 2rem; */
  font-weight: normal;
}
:root {
	--margin: 3px;
	--background: white;
	--dark: black;
	--light: #cccccc;
	--gradient: linear-gradient(90deg, #ff0000, white);
}

html {
	scroll-behavior: smooth;
	/* cursor: none; */
	-webkit-user-select: none;
	user-select: none;
}

body {
	margin: 0px;
	background: var(--background);
	display: flex;
	justify-content: center;
}

#contents {
	transition-duration: 0.3s;
	position: relative;
	max-width: 1200px;
	width: 100%;
}

main > section > .container > h1{
	transition-duration: .5s;
}
* > .content{
	transition-duration: .5s;
	margin-bottom: 72px;
}

section {
	display: flex;
	box-sizing: border-box;
	margin: 30px 10px;
	padding: 9rem 4rem 4rem 4rem;
	color: var(--background);
}

.container{
	width: 100%;
	flex-wrap: wrap;
	text-align: center;
	font-family: Arial, Helvetica, sans-serif;
}

.img-container {
    position: relative;
}

.overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
	height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 0;
    transition: opacity 0.3s;
    border-radius: 30%;
}

.overlay h1, .overlay p{    
    color: white;
    text-align: center;
}

.img-container:hover .overlay {
    opacity: 1;
}

.hide {
	opacity: 0;
	transform: translateY(30px);
}

.TrunOffOn{
	display: block;
	position: fixed;
	top: 100px;
	right: 40px;
	z-index: 99;
	border: solid 1px black;
	color: black;
	cursor: pointer;
	height: 50px;
  	width: 50px;
	border-radius: 50%;
	transition: .5s;
}

/*----------------------header--------------------------------*/
header{
	position: relative;
	height: 100vh;
	background-size: cover;
	min-height: 700px;
	background-repeat: no-repeat;
	padding: 36px;
	flex-direction: column;
	align-items: center; 
	justify-content: center;
	border-bottom: solid 2px black;
}

/*------------------------ main ------------------------------*/

main{
	padding: 36px;
	background-color: #000;
	background-image: radial-gradient(circle at top, rgba(43, 100, 255, 0.301),transparent),
		radial-gradient(circle at 20% 80%, rgba(0, 183, 255, 0.711), transparent)
}

/*------------------------ animation ------------------------------*/

@keyframes slide-right {
	from{
		transform: translateX(-30px);
		opacity: 0;
	}
	to{
		transform: translateX(0);
	}
}

@keyframes slide-down {
	from{
		transform: translateY(-30px);
		opacity: 0;
	}
	to{
		transform: translateY(0);
	}
}

@keyframes slide-up {
	0%{
		opacity: 0;
		transform: translateY(100px);
	}
	100%{
		transform: translateX(0);
	}
}

@keyframes top-ani {
	0%{
		top: 75%;
	}
	
	100%{
		top: 50%;
	}
}

@keyframes Skillimg-ani {
	0%{
		top: 30%;
	}

	100%{
		top: -5%;
	}
}

</style>
