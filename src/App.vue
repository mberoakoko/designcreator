<template>
  <div id="app">
    <Header></Header>
    <LandingPage></LandingPage>
    <Latestwork></Latestwork>
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

  body {
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    margin: 0;
    padding: 0;
  }
</style>
