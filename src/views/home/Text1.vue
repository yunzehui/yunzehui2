<template>
  <div id="text1">
    <div class="top">
      <div class="left">
        <!-- 添加 -->
        <button @click="addfn">编辑添加</button>
        <button>本地导出表哥</button>
      </div>
      <div class="right">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item>
            <el-input placeholder="请输入文章标题"></el-input>
          </el-form-item>
          <el-form-item>
            <el-select placeholder="请选择类型">
              <el-option label="招聘信息" value="shanghai"></el-option>
              <el-option label="技术交流" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="success">查询</el-button>
            <el-button type="warning">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <el-table :data="arrs" border>
      <el-table-column prop="title" label="文章标题"> </el-table-column>
      <el-table-column prop="name" label="作者"> </el-table-column>
      <el-table-column prop="text1" label="浏览量"> </el-table-column>
      <el-table-column prop="text2" label="回复"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 编辑添加弹框 -->
    <el-dialog :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="品牌名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="浮点（2位）" :label-width="formLabelWidth">
          <el-input
            v-model="form.num"
            autocomplete="off"
            aria-placeholder="非必填"
          ></el-input>
        </el-form-item>
        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input v-model="form.text" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="机构地址" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="管理员手机号" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.pw" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="fnsure">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import instance from "../../api/index";
export default {
  name: "text1",
  data() {
    return {
      arrs: null,
      debounceedit: null,
      dialogFormVisible: false,
      form: {
        name: "",
        num: "",
        text: "",
        address: "",
        phone: "",
        pw: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    //  添加
    addfn() {
      this.dialogFormVisible = !this.dialogFormVisible;
      this.form.title = "";
      this.form.name = "";
      this.form.text1 = "";
      this.form.text2 = "";
    },
    // 删除
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.deleteHomeIndex(index);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 获取数据，更新页面
    async getHomeIndex() {
      let { data } = await instance.get("/text1");
      console.log(data);
      //   自己写的数据
      this.arrs = data;
      //   随机数据
      //   this.arrs = data[0].list;
    },

    // 删除业务
    async deleteHomeIndex(index) {
      let { data } = await instance.delete("/text1/" + index);
      console.log(data);
      this.getHomeIndex();
    },
  },
  created() {
    this.getHomeIndex();
  },
};
</script>

<style scoped>
.top {
  display: flex;
  justify-content: space-between;
}
.top .left button {
  padding: 10px 20px;
  background: #409eff;
  border: none;
  border-radius: 10px;
  margin-right: 10px;
}
.addbtn {
  float: right;
  margin-right: 150px;
  margin-top: 20px;
}
</style>