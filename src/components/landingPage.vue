<template>
 <div class="landingPage">
    <div class="left">
        <div class="backgroundLayer"></div>
      <div class="text">
          <p id="top">We are a Quality Service</p>
          <h3><label>CREATIVE</label><br> DESIGN AGENCY</h3>
          <p id="bottom">It is a long established fact that a reader will be distracted by the readable content of a page
              when looking at a layout . The point is , I have no idea about design</p>
      </div>
    </div>
 </div>
</template>

<script>
    export default {
        name: "landingPage"
    }
</script>

<style scoped>

    .landingPage{
        box-sizing: border-box;
        width: 100vw;
        height: calc(100vh - 45px);
        background-image: url("../assets/designAgencyAssets/banner.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        }
    .landingPage .backgroundLayer{
        background: white;
        width: 50vw;
        height: calc(100vh - 45px);
        position: absolute;
        opacity: 97%;
    }
    .landingPage .left{
        box-sizing: border-box;
        width: 50vw;
        height: calc(100vh - 45px);
        display: flex;
        align-items: center;
    }
    .left .text{
        box-sizing: border-box;
        margin-left: 80px;
        font-size: 1.3rem;
        padding-right: 60px;
        z-index: 15;
    }
    .text #top{
        transform: translateY(-25px);
        font-weight: 200;
    }
    .text #bottom{
        font-weight: 400;
    }
    .text h3{
        font-weight: 900;
        font-size: 3rem;
    }
    .text h3 label{
        color: #bcbf00;
    }
</style>
