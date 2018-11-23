<template>
  <div class="hello">
    <h1 @click="test()">{{ msg }}</h1>
    <!-- banner轮播图 -->
      <div class="banner">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(item, index) in [1,1,1,1]" :key="index">
            <img v-lazy="item">
          </mt-swipe-item>
        </mt-swipe>
      </div>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    test(){
      this.loading.open('加载中')
      this.$toast({
        message: "http版本不支持该请求",
        position: "bottom"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.banner{
  width: 100%;
  height: 2.5rem;
  background: red;
}
</style>
