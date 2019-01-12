//管理商品
<template>
	<div class="bg mCommodity">
		<div class="header">
			<ul>
				<li class="active">添加商品</li>
				<li>添加商品类型</li>
			</ul>
		</div>
		<div class="teb">
			<div class="form">
				<div class="row">
					<label for="">商品名称：</label>
					<input type="text" name="" id="" placeholder="请输入商品名称" value="" />
				</div>
				<div class="row ">
					<label for="">归属店铺：</label>
					<input type="text" name="" id="" placeholder="请输入商品名称" value="" />
					<span>选店铺</span>
				</div>
				<div class="row">
					<label for="">商品品牌：</label>
					<input type="text" name="" id="" placeholder="请输入商品名称" value="" />
					<span>选择类型</span>
				</div>
				<div class="row">
					<label for="">商品类型：</label>
					<input type="text" name="" id="" placeholder="请输入商品名称" value="" />
					<span>选择类型</span>
				</div>
				<div class="row">
					<label for="">商品库存：</label>
					<input type="text" name="" id="" placeholder="请输入商品名称" value="" />
				</div>
				<div class="row pag">
					<label for="">标签：</label>
					<input type="text" name="" id="" placeholder="请输入商品名称" value="" />
					<span>选择标签</span>
				</div>
				<div class="row">
					<label for="">上架时间：</label>
					<input type="text" name="" id="" placeholder="请输入商品名称" value="" />
					<span>选择时间</span>
				</div>
				<div class="row">
					<label for="">商品展位：</label>
					<input type="text" name="" id="" placeholder="请输入商品名称" value="" />
					<span>选择位置</span>
				</div>
				<div class="row row_bg">
					<label for="">商品保障：</label>
					<input type="text" name="" id="" placeholder="请输入商品名称" value="" />
				</div>
				<div class="row spec row_bg">
					<label for="">商品生产规格：</label>
					<input type="text" name="" id="" placeholder="请输入商品名称" value="" />
				</div>
				<div class="row colorSpec">
					<label for="" class="row_bg">商品颜色规格：<input type="text" name=""  placeholder="如：家电高端款" value="" /></label>
					<label for=""><input type="text" name=""  placeholder="" value="" /></label>
					<label for=""><input type="text" name=""  placeholder="" value="" /></label>
				</div>
				<div class="row  row_canter">
					<input type="text" name="" placeholder="" value="" />
					<span>选择标签</span>
					<p>w24234</p>
				</div>
				<div class="row ">
					<label for="">最高可用积分：</label>
					<input type="text" name="" id="" placeholder="请选择积分上限" value="" />
					<span>选择积分</span>
				</div>
				<div class="row displayMap">
					<label for="">商品展示图：</label>
					<div class="upload_warp_left" @click="fileClick">
						<img src="../../assets/img/tijiaoimg.png" alt="上传商品图">
					</div>
				</div>
				<div class="row banner ">
					<label for="">商品banner(图)：</label>
					<div class="upload_warp_left" @click="fileClick">
						<img src="" alt="" style="display: none;" />
						<i><img class="text-img" src="../../assets/img/tijiaoimg.png" alt="上传商品图"></i>
					</div>
				</div>
				<input @change="fileChange($event)" type="file" id="upload_file" style="display: none" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			fileClick() {
				document.getElementById('upload_file').click()
			},
			fileChange(el) {
				if(!el.target.files[0].size) return;
				this.fileList(el.target);
				el.target.value = ''
			},
			fileList(fileList) {
				let files = fileList.files;
				for(let i = 0; i < files.length; i++) {
					//判断是否为文件夹
					if(files[i].type != '') {
						this.fileAdd(files[i]);
					} else {
						//文件夹处理
						this.folders(fileList.items[i]);
					}
				}
			},
			foldersAdd(entry) {
				let _this = this;
				entry.file(function(file) {
					_this.fileAdd(file)
				})
			},
			fileAdd(file) {
				//总大小
				console.log(file)
				//判断是否为图片文件
				/*if(file.type.indexOf('image') == -1) {
					file.src = 'wenjian.png';
					this.imgList.push({
						file
					});
				} else {
					let reader = new FileReader();
					reader.vue = this;
					reader.readAsDataURL(file);
					reader.onload = function() {
						file.src = this.result;
						this.vue.imgList.push({
							file
						});
					}
				}*/
			},

		},
		components: {}
	}
</script>

<style lang="scss" scoped>
	@import "../../assets/style/mixin";
	.mCommodity {
		overflow: auto;
		height: 100%;
		.header {
			box-shadow: 0rem 0.45rem 0.5rem 0rem rgba(160, 160, 160, 0.2);
			border-radius: .5rem;
			ul {
				height: 40px;
				text-align: right;
				padding: 10px;
				li {
					cursor: pointer;
					width: 85px;
					text-align: center;
					font-size: 10px;
					display: inline-block;
					padding: 0 5px;
					border-radius: 10px;
					color: rgba(106, 156, 228, 1);
					height: 20px;
					box-shadow: 0px 9px 10px 0px rgba(91, 162, 255, 0.33);
					margin-right: 10px;
				}
				li.active {
					background: linear-gradient(0deg, rgba(86, 193, 255, 1), #5C9DFF 100%);
					color: #FFFFFF;
				}
			}
		}
		.teb {
			margin-top: 2rem;
			padding-left: 4rem;
			.form {
				.row {
					position: relative;
					padding: 10px 0;
					label {
						position: relative;
						font-size: 12px;
					}
					label:after {
						font-size: 14px;
						line-height: 1;
						position: absolute;
						top: 55%;
						left: -10px;
						display: inline-block;
						-webkit-transform: translateY(-50%);
						transform: translateY(-50%);
						text-decoration: none;
						color: #bbb;
						border-radius: 50%;
						border: 0.25rem solid rgba(106, 156, 228, 1);
						-webkit-font-smoothing: antialiased;
						content: '';
					}
					input {
						width: 200px;
						border-bottom: 1px solid #ccc;
						font-size: 12px;
					}
					 ::-webkit-input-placeholder {
						font-size: 7px;
						padding-left: 20px;
					}
					span {
						position: absolute;
						font-size: 12px;
						color: #569EF7;
						left: 220px;
						cursor: pointer;
					}
					span:after {
						font-size: 14px;
						line-height: 1;
						position: absolute;
						top: 60%;
						left: -10px;
						display: inline-block;
						-webkit-transform: translateY(-50%);
						transform: translateY(-50%);
						text-decoration: none;
						color: #bbb;
						border: 0.25rem solid rgba(106, 156, 228, 1);
						border-right-color: transparent;
						border-left-color: transparent;
						border-bottom-color: transparent;
						-webkit-font-smoothing: antialiased;
						content: '';
					}
				}
				.pag {
					input {
						width: 230px;
					}
				}
				.spec {
					input {
						width: 170px;
					}
				}
				.colorSpec {
					label {
						margin-right: 5px;
						input {
							width: 80px;
							padding: 0;
						}
						::-webkit-input-placeholder {
							font-size: 7px;
							padding-left: 0px;
						}
					}
					label:nth-child(2),
					label:nth-child(3) {
						width: 65px;
						input {
							padding: 0;
							width: 50px;
						}
					}
					label:nth-child(2):after,
					label:nth-child(3):after {
						content: '元';
						border: none;
						left: 38px;
						font-size: 12px;
						color: rgba(106, 156, 228, 1);
					}
				}
				.row_canter {
					text-align: center;
					input {
						width: 150px;
					}
					span {
						left: 164px;
					}
					p {
						display: inline-block;
					}
				}
				.displayMap {
					.upload_warp_left {
						display: inline-block;
						width: 60px;
						img {
							width: 100%;
							vertical-align: top;
						}
					}
				}
				.banner {
					.upload_warp_left {
						display: inline-block;
						img.text-img {
							width: 80px;
							vertical-align: top;
						}
						i {
							position: relative;
							display: inline-block;
						}
						i:after {
							font-size: 12px;
							line-height: 1;
							position: absolute;
							top: 80%;
							left: 2px;
							display: inline-block;
							-webkit-transform: translateY(-50%);
							transform: translateY(-50%);
							text-decoration: none;
							color: #6a9ce4;
							content: '750px*528px';
						}
					}
				}
			}
			.row_bg {
				input {
					background: url(../../assets/img/side_right_blue.png) center right no-repeat;
					background-size: 10px;
				}
			}
		}
	}
</style>