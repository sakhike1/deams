<template>
    <div>
        <Nav />
        <CareerPage />
        <Footer />
    </div>
</template>


<script>
export default {

}
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
