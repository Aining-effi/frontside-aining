<template>
  <div class="right-history-table">
    <el-table :data="tableData" style="width: 100%" ref="multipleTable">
      <el-table-column type="index" label="序号" width="90"> </el-table-column>
      <el-table-column prop="time" label="时间" width="90"> </el-table-column>
      <el-table-column prop="alarmRange" label="报警范围" width="90">
      </el-table-column>
      <el-table-column prop="location" label="具体位置" width="90">
      </el-table-column>
      <el-table-column prop="alarmType" label="报警类型" width="90">
      </el-table-column>
      <el-table-column prop="alarmContent" label="报警内容" width="90">
      </el-table-column>
      <el-table-column prop="alarmValue" label="报警数值" width="90">
      </el-table-column>
      <el-table-column prop="standardValue" label="标准值" width="90">
      </el-table-column>
      <el-table-column prop="currentState" label="当前状态" width="90">
      </el-table-column>
      <el-table-column prop="operationNotes" label="操作备注" width="90">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'CallingHistory',
  data () {
    return {
      tableData: [{
        // index: '上海市普陀区金沙江路 1518 弄',
        time: '2020-08-12 14:11:40',
        alarmRange: '临港主管道',
        location: '临港1-标3 定位桩47m',
        alarmType: '光纤震动警告',
        alarmContent: '机械挖掘2级警告',
        alarmValue: '1',
        standardValue: '0',
        currentState: '报警中',
        operationNotes: '操作备注'

      }]
    }
  }
}

</script>
<style >
/** .right-history-table{
  margin-top:-50px;
  margin-bottom:-55px;
}
*/
</style>
