<template id="papssword">
    <div class="papssword">
        <img src="../../../imgs/login/login_pswd.png" alt="">
        <input :type="inputtype" v-model="password"  name="password" :placeholder="paswdtext?paswdtext:'请输入密码'">
        <img src="../../../imgs/login/hidePswd.png" alt="" @click="inputtype='text'" v-if="inputtype=='password'">
        <img src="../../../imgs/login/showPswd.png" alt=""  @click="inputtype='password'" v-else>
    </div>
</template>
<script>
export default {
  data: function() {
    return {
        inputtype:"password",
        password:"",
    };
  },
  props:{
      paswdtext:String
  },
  methods: {
    gobtn() {
      this.$router.go(-1);
    }
  },
  watch: {
      password(val){
          this.$emit("passwordinput",val)
      }
  }
};
</script>
<style scoped lang="less">
.papssword {
  margin: 0 0.45rem;
  height: 0.4rem;
  border: 0.005rem solid #ffffff;
  border-radius: 0.2rem;
  >img{
      width: 0.2rem;
  }
  > img:nth-of-type(1) {
    margin-left: 0.15rem;
  }
  > input {
    width:70%;
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
