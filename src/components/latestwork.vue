<template>
    <div class="latestWork">
        <section class="about">
            <label>
                This is a stunning website showing<br> how superior our designs are.
                We dont Joke when it comes to our designs <br>, they are awesome AF!!
            </label>
            <div class="cardSection">
                <div class="card" v-for="item in cardAssets" :key="item.altText">
                    <div class="icon"><img class="filter-yellow" :src="item.image" :alt="item.altText"></div>
                    <div class="textZone">
                        <h3>{{item.header}}</h3>
                        <p>{{item.content}}</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="display">
            <div class="heading ">
                <h3> OUR LATEST WORK</h3>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum. Sed ut perspiciatis unde omnis.</p>
            </div>
            <div class="portfolioPreview">
                <div class="portfolioCard" v-for="item in portfolioCardAssets" :key="item">
                    <img :src="item.image" :alt="item.alt">
                </div>
            </div>

        </section>
    </div>
</template>

<script>
    //this is a comment
    let researchIcon = require('../assets/designAgencyAssets/research.svg');
    let brandIdentity = require('../assets/designAgencyAssets/brandIdentity.svg');
    let computer = require('../assets/designAgencyAssets/computer.svg');
    let homeOffice_1, homeOffice_2, homeOffice_3;
    homeOffice_1 = require('../assets/designAgencyAssets/home-office-02.jpg');
    homeOffice_2 = require('../assets/designAgencyAssets/home-office-03.jpg');
    homeOffice_3 = require('../assets/designAgencyAssets/home-office-04.jpg');
    export default {
        name: "latestwork",
        data(){
            return {
                cardAssets : [
                        {
                            image: researchIcon,
                            header: 'UX Research',
                            content: "Lorem Ipsum is simply dummy text of the" +
                                " printing and typesetting industry. Lorem Ipsum" +
                                " has been the industry’s standard dummy text.",
                            altText:'researchIcon'
                        },
                    {
                        image: brandIdentity,
                        header: 'brandIdentity',
                        content: "Lorem Ipsum is simply dummy text of the" +
                            " printing and typesetting industry. Lorem Ipsum" +
                            " has been the industry’s standard dummy text.",
                        altText:'researchIcon'
                    },
                    {
                        image: computer,
                        header: 'Web Development',
                        content: "Lorem Ipsum is simply dummy text of the" +
                            " printing and typesetting industry. Lorem Ipsum" +
                            " has been the industry’s standard dummy text.",
                        altText:'researchIcon'
                    }

                        ],
                portfolioCardAssets:[{image:homeOffice_1 , alt: "image 1"}, {image:homeOffice_2 , alt: "image 1"}, {image:homeOffice_3 , alt: "image 1"}]

            }
        }
    }
</script>

<style scoped>
 .latestWork{
     position: relative;
     width: 100vw;
 }
    .latestWork .about{
        position: relative;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .about label{
        margin-top: 50px;
        color: #747d88;
    }
    .cardSection{
        display: flex;
        flex-direction: row;
        width: 100vw;
        flex-wrap: wrap;
        margin-top: 70px;
    }
    .about .card{
        display: flex;
        flex-direction: column;
        width: 338px;
        height: 330px;
        margin-left: auto;
        margin-right: auto;
    }
    .about .card .icon{
        width: 100px;
        height: 100px;
        margin: 30px auto;
    }
    .about .card img{
        max-width: 100%;
        max-height: 100%;
        display: block;
    }
    .filter-yellow{
        filter: invert(72%) sepia(66%) saturate(3453%) hue-rotate(23deg) brightness(104%) contrast(101%);
    }
    .about label{
        font-size: 1.8rem;
        text-align: center;
    }
    .textZone{
        text-align: center;
    }
    .textZone h3{
        margin-bottom: 10px;
        font-weight: 600;
        font-size: 1.6rem;
    }
    .textZone p{
        font-size: 1.3rem;
        font-weight: 100;
        line-height: 22px;
        color: #747d88;
    }
    .latestWork .display{
        height: 100vh;
        background: #f7f7f7;
    }
    .display{
        display: flex;
        flex-direction: column;
    }
    .display .heading{
        text-align: center;
        margin-top: 100px;
        margin-bottom: 50px;
    }
    .display .heading h3{
        font-weight: 600;
        font-size: 1.6rem;
    }
 .display .heading p{
     margin-top: 30px;
     font-size: 1.3rem;
     font-weight: 100;
     line-height: 22px;
     color: #747d88;
 }
    .portfolioPreview{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .portfolioCard{
        width: 320px;
        height: 240px;
    }
    .portfolioCard img{
        width: 100%;
        height: 100%;
        object-fit: cover;


    }
</style>
