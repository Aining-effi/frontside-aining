<template>
    <div class="hello">
      <!--整体contianer-->
        <!--整体的左边-->
        <div class="left-side">
          <!--左边的整体container-->
          <leftTable/>
          <!---->
        </div>
        <div class="right-side">
            <!--右边的整体container-->
          <transferStation />
        </div>
    </div>
</template>

<script>
import leftTable from '../views/leftside/leftTable.vue'
import transferStation from './transferStation'
export default {
  name: 'Home',
  components: {
    leftTable,
    transferStation
  }

}
</script>

<!--container重叠加粗问题没有解决 -->
<!--container 左边方框高度问题没有解决-->
<style>
.left-side {
    position: absolute;
    width: 25%;
    top: 0px;  /* 距离上面50像素 */
    left: 0px;
    bottom: 0px;
    overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
    background-color: #545c64;
  }
  .right-side {
    position: absolute;
    top: 0px;
    left: 25%;
    bottom: 0px;
    right: 0px;  /* 距离右边0像素 */
    overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
    /* background-color: red; */
  }

el.container,.Hello{
  height: 100%;
}

.el-main{
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
.el-header {
    background-color: #ccc ;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
.el-footer{
    background-color: #ccc ;
    color: #333;
    text-align: center;
    line-height: 60px;
}
/**
.right-buttons{
  float:left;
}
.switch-buttons{
  margin-top:-50px;
  margin-bottom:-100px;
}
.table-buttons{
  margin-top:-100px;
  margin-bottom:-60px;
}
 .left-container.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 130px;
  }
  */

  </style>
