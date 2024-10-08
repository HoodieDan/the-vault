<template>
    <div>
        <section class="hero">
            <div class="row hero__content container-fluid">
                <div class="col-lg-7 col-md-7">
                    <h1>STREETWEAR BOX</h1>
                    <h1 class="crimson-text">NOW LIVE</h1>
                    <p>
                        A curated luxury street ware boxes featured guaranteed Amiri, Off white , Palm angels, Heron,preston and more in every box
                    </p>
                    <button class="gradient__bg">Shop Now</button>
                </div>

                <div class="col-lg-5 col-md-5 d-flex align-items-end hero__card__div">
                    <div class="hero__card">
                        <div class="row">
                            <div class="col-5">
                                <img src="../assets/images/hero-card-image.png" alt="hero card image" class="img-fluid">
                            </div>
                            <div class="col-7 d-flex flex-column justify-content-between">
                                <small>Mens</small>
                                <h6>STREETWEAR BOX</h6>
                                <p class="crimson-text">$400</p>
                                <div class="hero__card__small__div">
                                    <small class="d-block">Guaranteed value : $300 - $500</small>
                                    <small class="d-block">Contains : 2 - 3 items</small>
                                    <small class="d-block">Featuring : off white, palm angels , amiri and heron preston</small>
                                </div>
                                <button class="gradient__bg">
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>

const store = useDataStore();
</script>
<style>

</style>