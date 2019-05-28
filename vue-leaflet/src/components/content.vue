<template>
  <div class="content">
      <span >{{msg}}</span>
      <div v-html="h"></div>
  </div>
</template> 
<script>
export default {
    data(){
        return{
            msg:'content'+this.$route.params.id,
            h:'<h2>h2</h2>'

        }
    },
    mounted(){
        alert(this.$route.params.id)
      //alert(this.$route.query)//获取get传值        
    }
}
</script>
