<template>
<div>
  <div >
    <geoInformation v-if="this.switch==1" />
    <websiteTour v-if="this.switch==2" />
    <opticalFiberDetection v-if="this.switch==3"/>
    <manholeCover v-if="this.switch==4"/>
    <indexRightTable v-if="this.switch==7"/>
    <schedulerController v-if="this.switch==8"/>
    <systemController v-if="this.switch==9"/>
  </div>
  </div>
</template>

<script>
import bus from './Commen.js'
import geoInformation from './baiduUI/geoInformation'
import websiteTour from './baiduUI/websiteTour'
import indexRightTable from './rightTables/indexRightTable'
import opticalFiberDetection from './baiduUI/opticalFiberDetection.vue'
import manholeCover from './baiduUI/manholeCover.vue'
import schedulerController from './rightTables/schedulerController.vue'
import systemController from './rightTables/systemController.vue'
export default {
  name: 'transferStation',
  components: {
    geoInformation,
    websiteTour,
    opticalFiberDetection,
    indexRightTable,
    manholeCover,
    schedulerController,
    systemController
  },
  data () {
    return {
      switch: 1
    }
  },
  created () {
    bus.$on('val', data => {
      console.log(data)
      this.switch = data
    })
  }
}
</script>
