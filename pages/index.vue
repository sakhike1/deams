<template>
  <div id="app">

    <Nav />
    <Hero />
    <slider />
    <Service />
    <process />
    <AppIntro />
    <Team />
    <Testimonials />
    <Deams />
    <Footer />


  </div>
</template>



<style>
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




<!-- <script>
import TButton from "~/components/TButton";

export default {
  components: {
    TButton,
  },
};
</script> -->


