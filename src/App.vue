<template>
  <div id="app">
    <Header class="header"></Header>
    <LandingPage class="landingPage"></LandingPage>
    <Latestwork class="latestWork"></Latestwork>
  </div>
</template>

<script>


import Header from "@/components/header";
import LandingPage from "@/components/landingPage";
import Latestwork from "@/components/latestwork";
export default {
  name: 'App',
  components: {
    Latestwork,
    LandingPage,
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
    display: grid;
    grid-template-rows: repeat(6, 100vh);
    grid-template-areas: "." "." ".";
  }
  .header{
    grid-row: 1/2;
  }
  .landingPage{
    grid-row: 2/3;
  }
  .latestWork{
    grid-row: 3/5;
  }
</style>
