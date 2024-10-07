<template>
    <div>
        <section class="hero">
            {{ store.count }}
            <p>{{ store.count }}</p>
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