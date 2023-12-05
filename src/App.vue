<template>
  <!--  路由出口 路由匹配到的组件将渲染在这里 -->
  <router-view/>
</template>

<style lang="scss">
// 全局样式
*{
  margin: 0;
  padding: 0;
}

// 优化滚动条
::-webkit-scrollbar{
  width: 5px;
  height: 5px;
  position: absolute;
}
// 设置滚动条颜色
::-webkit-scrollbar-thumb{
background: #1890ff;
}
::-webkit-scrollbar-track{
  background: #ddd;
}
</style>
