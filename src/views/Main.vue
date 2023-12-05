<template>
  <el-container>
    <SideMenu/>
    <el-container direction="vertical">
     <TopHeader/>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import TopHeader from '../components/Main/TopHeader.vue';
import SideMenu from '../components/Main/SideMenu.vue';
</script>
