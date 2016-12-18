<template>
    <el-col :span="24" class="ark-header" >
        <el-col :span="3" style="font-size:26px;">
            <img src="../assets/logo.png" class="logo"> <span>Digital<i style="color:#20a0ff">ARK</i></span>
        </el-col>
        <el-col :span="20">
            <el-menu theme="dark" default-active="1" class="ark-top-menu" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">设备管理</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item index="3">订单管理</el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="1">
            <el-tooltip class="item tip-logout" effect="dark" content="退出" placement="bottom" style="padding:0px;">
                <i class="fa fa-sign-out" aria-hidden="true" ></i>
            </el-tooltip>
        </el-col>
    </el-col>
</template>

<script>
    export default {
        name: 'arkheader',
        data() {
            return {
                msg: 'header'
            }
        },
        props: {
            logoPath: String
        },
        methods: {
            handleSelect() {
                console.log('select ');
            }
        }
    }
</script>

<style lang='scss'>
    .fade-enter-active,
	.fade-leave-active {
		transition: opacity .5s
	}
	
	.fade-enter,
	.fade-leave-active {
		opacity: 0
	}

    .ark-header {
		height: 60px;
		line-height: 60px;
		background: #1F2D3D;
		color: #c0ccda;
        .logo {
            width: 40px;
		    float: left;
		    margin: 10px 10px 10px 18px;
        }
        .ark-top-menu {
            background: #1F2D3D;
        }
	}
</style>