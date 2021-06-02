<template>
  <div>
      <el-container class="right-police-table" style= " height:100vh " >
              <!--切换表格的按钮-->
              <el-header class="switch-buttons" style= "{height:5vh, float:left}">
                <el-row>
                  <el-button type="primary" @click="switchToInformation()">报警信息
                  </el-button>
                  <el-button type="primary" @click="switchToHistory()">报警历史
                  </el-button>
                </el-row>
              </el-header>
              <!--插件或者用路由-->
              <el-main class="police-table" >
                <div v-if="showInformation==true">
                  <information/>
                </div>
                <div v-else-if= "showInformation==false">
                  <history/>
                </div>
              </el-main>
              </el-container>
  </div>
</template>

<script>
import history from '../rightTables/history.vue'
import information from '../rightTables/information.vue'
export default {
  components: {
    information,
    history
  },
  name: 'indexRightTable',
  data () {
    return {
      showInformation: true
    }
  },
  methods: {
    switchToInformation () {
      this.showInformation = true
    },
    switchToHistory () {
      this.showInformation = false
    }
  }
}
</script>
<style >
.switch-buttons{
  float: left;
}
.el-main.police-table{
  border: 1px;
}
</style>
