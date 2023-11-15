<!-- 
    @作者：vv
    @time：2023.11.16
 -->

<template>
    <div>
        login
        <button @click="handleLogin">
            login
        </button>
    </div>
</template>

<script setup>
const handleLogin=()=>{
    localStorage.setItem("token","vv");
}
</script>