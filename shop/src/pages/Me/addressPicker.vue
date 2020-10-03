addressPicker.vue
<template>
    <div>
    <div class="page-content">
      <!-- <mt-cell title="省，市，区:" :value="areaString" is-link @click.native="handlerArea"></mt-cell> -->
      <mt-cell :title="areaString" :value="areaString" is-link @click.native="handlerArea"></mt-cell>
      <mt-popup v-model="areaVisible" class="area-class" position="bottom">
        <p>
          <span @click="cancel()">取消</span><span class="btn" @click="sub()">确定</span>
        </p>
        <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
      </mt-popup>
    </div>
 
    </div>
</template>
<script>
import data from './data/data2.json'
var index = 0
var index2 = 0
// 初始化省
let province = data.map(res => {
  return res.name
})
// 初始化市
let city = data[index].children.map(res => {
  return res.name
})
// 初始化区
let area = data[index].children[index2].children.map(res => {
  return res
})
export default {
  props: ['address'],
  data () {
    return {
      areaVisible: false,
      areaString: '请选择',
      slots: [{
        flex: 1,
        values: province,
        className: 'slot1',
        textAlign: 'center'
      }, {
        divider: true,
        content: '-',
        className: 'slot2'
      }, {
        flex: 1,
        values: city,
        className: 'slot3',
        textAlign: 'center'
      }, {
        divider: true,
        content: '-',
        className: 'slot4'
      }, {
        flex: 1,
        values: area,
        className: 'slot5',
        textAlign: 'center'
      }]
    }
  },
  components: {},
  methods: {
    handlerArea () {
      this.areaVisible = true
      if (this.areaString === '省,市,区') { this.areaString = province[0] + ',' + city[0] + ',' + area[0] }
    },
    onValuesChange (picker, values) {
      let one = values[0]
      let two = values[1]
      index = province.indexOf(one)
      if (index >= 0 && province.length > 0) {
        city = data[index].children.map(res => {
          return res.name
        })
        picker.setSlotValues(1, city)
        two = values[1]
      }
      index2 = city.indexOf(two)
      if (index2 >= 0 && city.length > 0) {
        area = data[index].children[index2].children.map(res => {
          return res
        })
        picker.setSlotValues(2, area)
      }
      this.areaString = values.join(',')
      this.$emit('choiceAddress', this.areaString)
    },
    sub () {
      this.$emit('choiceAddress', this.areaString)
      this.areaVisible = false
    },
    cancel () {
      this.areaVisible = false
    }
  },
  mounted () {
    this.areaString = this.address
  }
}
</script>
<style scoped lang='scss'>
@import "./base.scss";
.area-class {
  width: 100% !important;
  p {
    height: 1.066rem;
    padding: 0.165rem;
    line-height: 0.736rem;
    display: flex;
    justify-content: space-between;
    font-size: $base_fontSize;
    border: 1px solid #e6e6e6;
    span {
      padding: 0 0.5rem;
    }
    .error {
      // background-color: #f7b500;
      color: #f7b500;
      // border: 1px solid #f7b500;
    }
    .btn {
      @extend .error;
      font-size: px2em(15, 16);
    }
  }
}
</style>