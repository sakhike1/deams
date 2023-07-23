<template>
    <div>
        <Title>About</Title>
        <VueCursor />
        <About />
        <VueCursor />
        <Footer />
    </div>
</template>
<script>
import VueCursor from "../components/VueCursor.vue";
export default {
    components: {
        VueCursor: VueCursor
    }
};
</script>


<style >
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>

