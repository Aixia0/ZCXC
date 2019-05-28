<template>
  <div id="app">
    <span :class="{'red':flag}">{{title}}</span>
    <div>
      <router-link to="/map">地图</router-link>
      <router-link to="/helloWorld">helloWorld</router-link>
    </div>
    <ul>
      <li v-for="(item,index) in list" :key="index">
          <router-link :to= " '/content/' + index">{{index}}---{{item}}</router-link>
      </li>
    </ul>
    <!-- <v-map></v-map> -->
    <!-- 动态加载组件 -->
    <router-view/>
  </div>
</template>

<script>
// 引入组件
// 引入地图组件
import Map from '@/components/map'

export default {
  name: 'App',
  data () {
    return {
      title: 'Vue Leaflet Demo',
      list:['111','222','333'],
      flag:true
    }
  },
  // 挂载组件
  // 在模板中使用
  components:{
    'v-map':Map
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.red{
  color:red
}
</style>
