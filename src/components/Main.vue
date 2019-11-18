<template>
	<span :style="initStyle(bgStyle)">{{msg}}</span>
</template>

<script>
export default{
	name:'Main',
	data(){
		return{
			msg:'hello!',
			bgStyle:{
				height:200,
				width:200,
				color:'blue'
			}
		}
	},
	methods:{
		initStyle:(bgStyle)=>{
			let styleObj = {};
			for(let key in bgStyle){
				if(key=='height'||key=='width'||key=='top'||key=='left'){
					styleObj[key] = bgStyle[key]+'px';
				}else{
					styleObj[key] = bgStyle[key];
				}
			}
			return styleObj;
		}
	}
}
</script>

<style>
</style>
