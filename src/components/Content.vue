<template>
    <el-col :span="24" class="arkContent">
			<!--<el-col :span="4">-->
			<aside style="width:230px;" >
				<h5 class="admin"><i class="fa fa-user" aria-hidden="true" style="margin-right:5px;"></i>欢迎系统管理员：测试</h5>
				<el-menu default-active="2" style="border-top: 1px solid #475669;" class="el-menu-vertical-demo" theme="dark">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>导航一</template>
                        <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
                    <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
                </el-menu>
			</aside>
			<!--</el-col>-->
			<!--<el-col :span="20" class="panel-c-c">-->
			<section class="panel-c-c">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" style="margin-bottom:15px;">
						<strong style="width:200px;float:left;color: #475669;">currentPathName</strong>
						<el-breadcrumb separator="/" style="float:right;">
							<el-breadcrumb-item >首页</el-breadcrumb-item>
							<el-breadcrumb-item>currentPathNameParent</el-breadcrumb-item>
							<el-breadcrumb-item>currentPathName</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
					<el-col :span="24" style="background-color:#fff;box-sizing: border-box;">
						<!--<transition name="fade">
							<router-view></router-view>
						</transition>-->
                        <div class="content"></div>

					</el-col>
				</div>
			</section>
			<!--</el-col>-->
		</el-col>
</template>

<script>
    export default {
        name: 'arkContent',
        data() {
            return {
                msg: 'arkContent'
            }
        },
        props: {
            logoPath: String
        }
    }
</script>

<style lang="scss">
    .arkContent {
		background: #324057;
		position: absolute;
		top: 60px;
		bottom: 0px;
        .admin {
            color: #c0ccda;
		    text-align: center;
        }
        .panel-c-c {
            background: #f1f2f7;
            position: absolute;
            right: 0px;
            top: 0px;
            bottom: 0px;
            left: 230px;
            overflow-y: scroll;
            padding: 20px;
            min-height:300px;
            
            .content {
                min-height: 1024px;
            }
        }
        
    }
</style>