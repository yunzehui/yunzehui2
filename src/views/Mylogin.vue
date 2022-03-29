<template>
  <div id="login">
    <div class="myform">
      <div class="title">
        <h3>Login Form</h3>
      </div>
      <el-form :model="formdata" :rules="rules">
        <el-form-item prop="user">
          <!-- <i class="el-icon-user-solid icon"></i> -->
          <el-input placeholder="用户名" v-model="formdata.user"></el-input>
        </el-form-item>
      </el-form>
      <el-form>
        <el-form-item prop="pw">
          <!-- <span><i class="el-icon-view icon"></i></span> -->
          <el-input placeholder="密码" v-model="formdata.pw"></el-input>
        </el-form-item>
      </el-form>
      <el-form>
        <el-form-item>
          <el-button type="primary" class="btn" @click="submitfn"
            >Login</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import instance from "../api/index";
export default {
  name: "MyLogin",
  data() {
    let userfn = function (rule, value, callback) {
      let rg = /^[a-z]\w{2,6}\w$/;
      if (rg.test(value)) return;
      return callback(new Error("用户名格式有误"));
    };
    let pwfn = function (rule, value, callback) {
      console.log(rule);
      let rg = /^\w{2,6}$/;
      if (rg.test(value)) return;
      return callback(new Error("密码格式有误"));
    };
    return {
      formdata: {
        user: "admin",
        pw: "123456",
      },
      rules: {
        user: { validator: userfn, trigger: "blur" },
        pw: { validator: pwfn, trigger: "blur" },
      },
      newdebouncefn: null,
    };
  },
  methods: {
    submitfn() {
      this.newdebouncefn();
    },
    async loginfn() {
      let user = this.formdata.user;
      let pw = this.formdata.pw;
      let { data } = await instance.post("/login", {
        user: user,
        pw: pw,
      });
      console.log(data);

      if (data.message === "fail") return this.$message.error("登录失败");
      if (data.message === "success") {
        //   如果请求成功，将token存入
        localStorage.setItem("token", data.data.token);
        this.$message({
          type: "success",
          message: "登录成功",
          duration: 2000,
          onClose: () => {
            //   登录时浏览器打开新窗口并跳转到指定页面
            window.open(
              this.$router.resolve({ name: "HomeOne" }).href,
              "_blank"
            );
          },
        });
      }
    },
  },
  created() {
    this.newdebouncefn = this.debouncefn(this.loginfn, 2000);
  },
};
</script>

<style scoped>
#login {
  background: #2d3a4b;
  width: 100vw;
  height: 100vh;
}
.title {
  width: 448px;
  position: absolute;
  top: -10px;
}
#login .title h3 {
  color: #fff;
}
.myform {
  width: 448px;
  height: 300px;
  background: transparent;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -185px;
  margin-top: -130px;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 20px 20px 100px;
}
el-form-item {
  width: 100%;
  display: flex;
}
el-input {
  width: 80%;
}
.icon {
  color: #454545;
  margin-right: 10px;
}
.btn {
  width: 100%;
}
</style>
