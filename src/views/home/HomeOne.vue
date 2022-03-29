<template>
  <div id="homeone">
    <div class="top">
      <div class="title">概况</div>
      <ul>
        <li style="background: #125378">
          <i class="el-icon-location-outline"></i>
          <p>但还是不成熟的黑客技术</p>
        </li>
        <li style="background: #eee">
          <i class="el-icon-location-outline"></i>
          <p>但还是不成熟的黑客技术</p>
        </li>
        <li style="background: #763837">
          <i class="el-icon-location-outline"></i>
          <p>但还是不成熟的黑客技术</p>
        </li>
        <li style="background: #125378">
          <i class="el-icon-location-outline"></i>
          <p>但还是不成熟的黑客技术</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeone",
};
</script>

<style scoped>
.top .title {
  font-size: 32px;
  padding: 18px 20px;
}
.top ul {
  padding: 20px;
  margin: 0;
  display: flex;
  justify-content: space-around;
}
.top ul li {
  width: 288px;
  height: 178px;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  color: #fff;
  margin-right: 10px;
  border-radius: 10px;
}
.top ul li i {
  font-size: 82px;
}
.top ul li p {
  margin-top: 40px;
}
</style>