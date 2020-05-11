<template>
  <div id="app">
    <Header class="header"></Header>
    <router-view></router-view>
  </div>
</template>

<script>


import Header from "@/components/header";
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    margin: 0;
    padding: 0;
  }

</style>
