<template>
	<div>
		我是主页111
		<el-row>
			<el-button disabled>默认按钮</el-button>
			<el-button type="primary" @click="getUser">主要按钮 请点击</el-button>
			<el-button type="success" disabled>成功按钮</el-button>
			<el-button type="info" disabled>信息按钮</el-button>
			<el-button type="warning" disabled>警告按钮</el-button>
			<el-button type="danger" disabled>危险按钮</el-button>
		</el-row>
		<ul>
			<li v-for="(user,index) in userList" :key="index"> {{ user.name }} </li>			
		</ul>
	</div>
</template>

<script>	
export default {
  name: 'Home',
  data(){
	  return {
		  userList: []
	  }
  },
  methods: {
	  getUser(){
		  this.$http({
			  method: 'get',
			  url: 'http://154.86.29.226:3002/users',
			  data: {

			  }
		  }).then((res) => {
				this.userList = res.data;
			  console.log(this.userList);
		  });
	  }
  }
}
</script>

<style scoped>	
ul li{
	text-align: left;
}
</style>