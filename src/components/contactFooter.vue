<template>
    <div class="container">
        <div class="textHeader">
            <h3>LET'S START SOMETHING NEW <br> <span>SAY HELLO</span></h3>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum. Sed ut perspiciatis unde omnis</p>
        </div>
        <div class="form">
            <form>
                <label>
                    <input type="text" placeholder="Name">
                </label>
                <label>
                    <input type="email" placeholder="Email">
                </label>
                <label>
                    <input type="text" placeholder="Company Name">
                </label>
                <label>
                    <textarea placeholder="Message:"></textarea>
                </label>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "contactFooter"
    }
</script>

<style scoped>
.container{
    background: #fcd21d;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
}
    .textHeader{
        text-align: center;
        padding-top: 100px;
        padding-bottom: 30px;
    }
    .textHeader h3{
         margin-bottom: 10px;
         font-weight: 600;
         font-size: 2.8rem;
         padding-bottom: 30px;
     }
    .textHeader span{
        color: white;
    }
    .textHeader p{
        line-height: 1.8rem;
        font-size: 1.2rem;
        color: #353740;
    }
    /*
    ===================================================================================================================
     =========================================FORM DATA STYLING =======================================================
    ===================================================================================================================
     */

    .form{
        width:100vw;
        height: auto;
        display: flex;
        justify-content: center;
    }
    .form form{
        position: relative;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        margin: 1rem auto;
        font-size: 1.8rem;
    }
    .form form input {
        position: relative;
        width: 700px;
        height: 40px;
        background: #fcd21d;
        border: none;
    }
.form form input::after {
    position: absolute;
   content: "";
    height: 30px;
    width: 700px;
    background: black;
}
.form form textarea {
    width: 700px;
    height: 150px;
    background: #fcd21d;
    border: none;
}
</style>
