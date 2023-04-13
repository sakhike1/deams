<template>
  <section class="px-0  bg-gray-100 py-12 mx-auto sm:px-4">
    <!-- Contact Us -->
    <!-- Features -->
    <!-- Features -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Title -->

      <!-- End Title -->

      <!-- Grid -->
      <section class="py-10 rounded-full  lg:py-0">

        <div class="px-4 mx-auto bg-gradient-to-r from-orange-400 to-rose-400 max-w-7xl sm:px-6 lg:px-8 2xl:rounded-xl">
          <div class="py-10 sm:py-16 lg:py-24 2xl:pl-24">
            <div class="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
              <div class="lg:order-2 2xl:-mr-24">
                <img class="w-full shadow-xl rounded-xl"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/6/dashboard-screenshot.png" alt="" />
              </div>

              <div class="lg:order-1">
                <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-3xl lg:leading-snug">Are you
                  ready to <br class="hidden xl:block" />Tell your us about your app idea ?</h2>












                <div
                  class="flex flex-col transform scale-100 items-start mt-8 sm:space-x-4 sm:flex-row sm:items-center lg:mt-12">


                  <nuxt-link to="Contact" title=""
                    class="inline-flex hover:scale-75 items-center justify-center px-4 py-4 mt-5 text-base font-semibold text-white transition-all duration-200 bg-transparent border border-white rounded-md sm:mt-0 hover:bg-white hover:text-black"
                    role="button"> Reach Out to Us</nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>


      <!-- End Grid -->
    </div>

    <ScrollUp />
  </section>
</template>
  
<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  mounted() {
    AOS.init({});
  },
};
</script>
  
<style></style>
  