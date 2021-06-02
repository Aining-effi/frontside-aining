<template>
<!--右边的整体container-->
<div class="left-container">
    <el-container style="height:100vh">
        <el-header style="height:15vh">智慧热能平台
        </el-header>
        <el-main class="left-menu">
            <!--
            <el-row class="tac">
                <el-col :span="24">
                    -->
                    <el-menu default-active="7"
                    class="el-menu-vertical-demo">
                        <el-menu-item index="1" @click="switchToGeoInfor()">
                            <span slot="title">地理信息</span>
                        </el-menu-item>
                        <el-menu-item index="2" @click="switchToWebsiteTour()">
                             <span slot="title">官网巡视</span>
                        </el-menu-item>
                        <el-menu-item index="3" @click="opticalFiberDetection()">
                            <span slot="title">光纤在线检测</span>
                        </el-menu-item>
                        <el-menu-item index="4" @click="manholeCover()">
                            <span slot="title">智慧井盖</span>
                        </el-menu-item>
                        <el-menu-item index="5" disabled>
                            <span slot="title">铁塔视频系统(待开发)</span>
                        </el-menu-item>
                        <el-menu-item index="6" disabled>
                            <span slot="title">汽网(待开发)</span>
                        </el-menu-item>
                        <el-menu-item index="7" @click="callingPolice()">
                            <span slot="title">报警</span>
                        </el-menu-item>
                        <el-menu-item index="8" @click="schedulerController()">
                            <span slot="title">调度令管理</span>
                        </el-menu-item>
                        <el-menu-item index="9" @click="systemController()">
                            <span slot="title">系统管理</span>
                        </el-menu-item>
                    </el-menu>
                <!--
                    </el-col>
            </el-row>
            -->
        </el-main>
        <el-footer style="height: 15vh">logo
        </el-footer>
    </el-container>
</div>
</template>

<script>
import bus from '../Commen.js'
export default {
  name: 'leftTable',
  data () {
    return {
      data: 1
    }
  },
  methods: {
    switchToGeoInfor () {
      this.data = 1
      bus.$emit('val', this.data)
    },
    switchToWebsiteTour () {
      this.data = 2
      bus.$emit('val', this.data)
    },
    opticalFiberDetection () {
      this.data = 3
      bus.$emit('val', this.data)
    },
    manholeCover () {
      this.data = 4
      bus.$emit('val', this.data)
    },
    /** 此处待开发
     *
    */
    callingPolice () {
      this.data = 7
      bus.$emit('val', this.data)
    },
    schedulerController () {
      this.data = 8
      bus.$emit('val', this.data)
    },
    systemController () {
      this.data = 9
      bus.$emit('val', this.data)
    }
  }
}
</script>
