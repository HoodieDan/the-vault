<template>
    <div>
        <footer>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-12">
                        <div class="footer__logo">
                            <img src="../assets/images/logo.svg" alt="logo">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                        <div class="country__div">
                            
                        </div>
                    </div>
                </div>
                <div class="row links">
                    <div class="col-lg-5 col-md-5">
                        <p>A curated luxury street ware boxes featured guaranteed Amiri, Off white , 
                            Palm angels, Heron,preston and more in every box
                        </p>
                    </div>
                    <div class="col-lg-3 col-md-3">
                        <h5>SHOP</h5>
                        <NuxtLink :to="{ name: 'index' }" class="footer__link">ALL PRODUCTS</NuxtLink>
                        <NuxtLink :to="{ name: 'index' }" class="footer__link">MENS STREETWEARS</NuxtLink>
                        <NuxtLink :to="{ name: 'index' }" class="footer__link">WOMENS STREETWEARS</NuxtLink>
                        <NuxtLink :to="{ name: 'index' }" class="footer__link">MENS STREETWEARS PLUS BOX</NuxtLink>
                        <NuxtLink :to="{ name: 'index' }" class="footer__link">WOMENS STREETWEARS PLUS BOX</NuxtLink>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-3 col-6">
                        <h5>SUPPORT</h5>
                        <NuxtLink :to="{ name: 'index' }" class="footer__link">CONTACT US</NuxtLink>
                        <NuxtLink :to="{ name: 'index' }" class="footer__link">INSTAGRAM</NuxtLink>
                        <NuxtLink :to="{ name: 'index' }" class="footer__link">EMAIL</NuxtLink>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-4 col-6">
                        <h5>LEGAL</h5>
                        <NuxtLink :to="{ name: 'index' }" class="footer__link">TERMS AND CONDITONS</NuxtLink>
                        <NuxtLink :to="{ name: 'index' }" class="footer__link">PRIVACY</NuxtLink>
                        <NuxtLink :to="{ name: 'index' }" class="footer__link">RETURNS</NuxtLink>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
</script>
<style>
    
</style>