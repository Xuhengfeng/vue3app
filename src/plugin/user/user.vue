<template id="user">
    <div class="user">
        <img src="../../../imgs/login/login_user.png" alt="">
        <input type="number"  name="text" v-model="user" :placeholder="usertext?usertext:'请输入手机号码'">
    </div>
</template>
<script>
export default {
  data() {
    return {
        user:""
    };
  },
  props:{
      usertext:String
  },
  methods: {
    gobtn() {
      this.$router.go(-1);
    }
  },
  watch: {
      user(val){
          this.$emit("userbtn",val)
      }
  }
};
</script>
<style scoped lang="less">
.user {
  margin: 0 0.45rem;
  height: 0.4rem;
  border: 0.005rem solid #ffffff;
  border-radius: 0.2rem;
  > img {
    width: 0.2rem;
    margin-left: 0.15rem;
  }
  > input {
    width: 80%;
    margin-left:0.1rem;
    height: 100%;
    background: none;
    outline: none;
    border: 0px;
    color:#ffffff;
  }
  input::-webkit-input-placeholder {
      color: #ffffff;
  }
}
</style>
