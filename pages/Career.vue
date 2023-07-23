<template>
  <div>
    <VueCursor />
    <Nav />
    <CareerPage />

    <Footer />
  </div>
</template>

<script>

</script>

<script>
import VueCursor from "../components/VueCursor.vue";
export default {
    components: {
      VueCursor: VueCursor
    }
};
</script>

<style lang="scss" scoped>
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
