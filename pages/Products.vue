<template>
    <div>
        <section class="all__products container">
            <h5>PRODUCTS</h5>
            <h2>SHOP ALL PRODUCTS</h2>

            <div class="tabs">
                <div class="tab active">POPULAR</div>
                <div class="tab">MEN'S STREETWEAR BOX</div>
                <div class="tab">MEN'S STREETWEAR PLUS BOX</div>
                <div class="tab">WOMEN'S STREETWEAR BOX</div>
                <div class="tab">WOMEN'S STREETWEAR PLUS BOX</div>
            </div>

            <div class="products">
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-6" v-for="(product, index) in store.productItems" :key="index">
                        <ProductCard :product="product" />
                    </div>
                </div>
            </div>
            <div class="button__div">
                <button>SEE ALL PRODUCTS</button>
            </div>
        </section>

        <section class="known__for container">
            <h5>PRODUCTS</h5>
            <h2>WHAT WE ARE KNOWN FOR</h2>

            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="mission__pill">
                        <h6>FAST SHIPPING</h6>
                        <small>Partnered with 100+ leading luxury brands</small>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4">
                    <div class="mission__pill">
                        <h6>WORLDWIDE DELIVERY</h6>
                        <small>Sign up and never miss a drop</small>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4">
                    <div class="mission__pill">
                        <h6>RETURNS ACCEPTED</h6>
                        <small>Returns accepted on all goods</small>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="mission__pill">
                        <h6>AUTHENTICITY GUARANTEED</h6>
                        <small>Partnered with 100+ leading luxury brands</small>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4">
                    <div class="mission__pill">
                        <h6>SELL OUT DROPS</h6>
                        <small>Sign up and never miss a drop</small>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4">
                    <div class="mission__pill">
                        <h6>RETURNS ACCEPTED</h6>
                        <small>Returns accepted on all goods</small>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
const store = useDataStore();
</script>
<style lang="">
    
</style>