<template>
    <div class="navigationBar">
        <div class="Logo">LOGO</div>
        <nav>
            <router-link class="routerLink"
                         v-for="item in navLinks" :key="item.title"
                         :to="item.link">
                {{item.title}}
            </router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "header",
        data(){
            return{
                navLinks:[
                    {title: 'Home', link: '/'},
                    {title: 'Portfolio', link: '/portfolio'},
                    {title: 'Blog', link: '/blog'},
                    {title: 'About', link: '/about'},
                    {title: 'Contact', link: '/contact'},

                ]
            }
        }

    }
</script>

<style scoped>
.navigationBar{
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    background: yellow;
    align-items: center;
    position: relative;
    left: 0;
    top:0;
    width: 100vw;
    height: 45px;

}
    .navigationBar .Logo{
        height: 45px;
        width: 45px;
        display: flex;
        align-items: center;
        margin-left: 30px;
    }
    .navigationBar .Logo img{
        position: absolute;

    }

    .navigationBar nav{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-left: auto;
        margin-right: 40px;
    }
    .navigationBar nav .routerLink{
        text-decoration: none;
        margin-right: 30px;
        font-size: 1.2rem;
    }
</style>
