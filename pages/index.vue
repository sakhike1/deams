<template>
  <div id="app">
    <Title>deams</Title>
    <Nav />
    <Hero />
    <slider />
    <Service />
    <process />
    <AppIntro />
    <Team />
    <Testimonials />
    <Deams />
    <VueCursor scaleElement="logo" dotColor="#185e7d" :borderColor="'#03a9f4'" />
    <Footer />


  </div>
</template>

<script>
import VueCursor from "../components/VueCursor.vue";
export default {
  components: {
    VueCursor
  }
};
</script>



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


