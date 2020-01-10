<template>
  <div>
    <el-row>
      <el-col :span="20" :offset="2">
        <el-table
          ref="elTable"
          :data="tableData"
          @select="handleSelect"
          style="width: 100%">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="debitname"
            label="c1"
            width="180">
          </el-table-column>
          <el-table-column
            prop="rpttypename"
            label="c2"
            width="180">
          </el-table-column>
          <el-table-column
            prop="subjectname"
            label="c3"
            width="150">
          </el-table-column>
          <el-table-column
            prop="tmpno"
            label="c4">
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'mytable',
    data() {
      return {
        tableData: [
          {
            "debitname": "金额",
            "rctid": 1,
            "rpttypename": "部门",
            "subjectname": "交易性金融资产",
            "tmpno": "002"
          },
          {
            "debitname": null,
            "rctid": 1,
            "rpttypename": "1233",
            "subjectname": "应收账款",
            "tmpno": 4123
          },
          {
            "debitname": null,
            "rctid": 1,
            "rpttypename": "方法是",
            "subjectname": "应收股利",
            "tmpno": 321
          },
          {
            "debitname": "金额2",
            "rctid": 2,
            "rpttypename": "部门2",
            "subjectname": "交易性金融资产2",
            "tmpno": "002"
          },
          {
            "debitname": null,
            "rctid": 2,
            "rpttypename": "12332",
            "subjectname": "应收账款2",
            "tmpno": 4122
          },
          {
            "debitname": null,
            "rctid": 2,
            "rpttypename": "方法是2",
            "subjectname": "应收股利2",
            "tmpno": 321
          },
          {
            "debitname": "金额3",
            "rctid": 3,
            "rpttypename": "部门3",
            "subjectname": "交易性金融资产3",
            "tmpno": "003"
          },
          {
            "debitname": null,
            "rctid": 3,
            "rpttypename": "12333",
            "subjectname": "应收账款3",
            "tmpno": 4123
          },
          {
            "debitname": null,
            "rctid": 3,
            "rpttypename": "方法是3",
            "subjectname": "应收股利3",
            "tmpno": 323
          }
        ],
      }
    },
    methods:{
      handleSelect(selection, row) {
        let _this = this;
        let isCheck = false;//是否选中
        //如何selection（所有选中的行），中包含row（当前点击的行），则为选中状态
        for(let i = 0 ; i < selection.length ; i++) {
          if(selection[i]===row) {
            isCheck = true;
            break;
          }
        }
        //遍历数据，激活相同rctid的行
        this.tableData.forEach(function(r, i, as) {
          if(r.rctid==row.rctid) {
            _this.$refs.elTable.toggleRowSelection(r, isCheck);
          }
        })

      },
    },
  }
</script>

<style>
</style>
