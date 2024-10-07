<template>
    <div>
        <section class="hero">
<<<<<<< HEAD
            {{ store.count }}
            <p>{{ store.count }}</p>
=======
            
>>>>>>> 9b89c5af303d4320614ab03d2dddd3190653fd7d
        </section>
    </div>
</template>
<script setup>

const store = useDataStore();
</script>
<style>
.hero {
    height: 100vh;
    background: url('../assets/images/hero.png');
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 80px;
}
</style>