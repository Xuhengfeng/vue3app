<template id="captions">
    <div id="headers">
        <!-- <mt-header fixed :title="header">
            <mt-button icon="back">back</mt-button>
        </mt-header> -->
        <mt-header :title="header">
        <div @click="gobtn" slot="left" v-show="show">
            <mt-button icon="back">返回</mt-button>
        </div>
        </mt-header>
    </div>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  methods:{
      gobtn(){
          this.$router.go(-1)
      }
  },
  props: {
    header: String,
    show:Boolean
  },
  watch: {}
};
</script>
<style scoped lang="scss">

</style>
