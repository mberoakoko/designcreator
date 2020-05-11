<template>
    <div>
        <LandingPage class="landingPage"></LandingPage>
        <Latestwork class="latestWork"></Latestwork>
        <ContactFooter class="contactFooter"></ContactFooter>
    </div>
</template>

<script>
    import LandingPage from "@/components/landingPage";
    import Latestwork from "@/components/latestwork";
    import ContactFooter from "@/components/contactFooter";
    export default {
        name: "home",
        components:{
           LandingPage ,
            Latestwork,
            ContactFooter
        }
    }
</script>

<style scoped>
    div{
        display: grid;
        grid-template-rows: repeat(3, 100vh);
        grid-template-areas: "." "." ".";
    }
    .landingPage{
        grid-row: 1/2;
    }
    .latestWork{
        grid-row: 2/3;
    }
    .contactFooter{
        grid-row: 3/4;
    }
</style>
