<template>
  <div>
    <div v-if="!showPic" class="el-upload el-upload--picture-card" @click="handleUpload"><i class="el-icon-plus"></i></div>
    <div v-if="showPic" class="el-upload el-upload--picture-card" @click="handleUpload"><img :src="picPath" style="width: 100%;height: 100%;"/></div>
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      ref="upload"
      :data="uploadData"
      :on-change="handleChange"
      :auto-upload="false">
    </el-upload>
    <button @click="handleRemove">删除</button>
    <button @click="submitUpload">上传</button>
  </div>
</template>

<script>
  export default {
    name: 'mytable',
    data() {
      return {
        //切换预览图片
        showPic: false,
        //预览图片路径
        picPath: "",
        //提交上次表单数据
        uploadData: {},
      }
    },
    methods:{
      //删除图片
      handleRemove() {
        this.showPic = false;
        this.$refs.upload.clearFiles();
      },
      //关联点击事件
      handleUpload() {
        this.$refs.upload.$children[0].handleClick();
      },
      //修改上传图片
      handleChange(file, fileList) {
        if(this.$refs.upload.uploadFiles.length>1) {
          this.$refs.upload.uploadFiles = this.$refs.upload.uploadFiles.slice(1,2);
        }
        this.picPath = URL.createObjectURL(file.raw);
        this.showPic = true;
      },
      //提交表单
      submitUpload() {
        if(this.$refs.upload.uploadFiles.length==0) {//不上传图片时，单独提交表单

        } else {//上传图片时，需要将表单内容放到uploadData中，使用upload的上传方法

          this.$refs.upload.submit();
        }
      }
    },
    mounted(){
    }
  }
</script>

<style>
</style>
