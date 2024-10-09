<template>
    <div class="product__card">
        <img :src="product.image" class="img-fluid" :alt="product.name">
        <div class="product__details">
            <small class="mens">{{  product.gender  }}</small>
            <h6>{{ product.name }}</h6>
            <h6 class="crimson-text">${{ product.price }}</h6>
            <small class="deets">Guaranteed value : {{ product.guaranteedValue }}</small>
            <small class="deets">Contains : {{ product.contains }} items</small>
            <small class="deets">Featuring : {{ product.featuring }}</small>
            <button class="gradient__bg">SHOP NOW</button>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>