<template>
  <section id="services" class="bg-gray-100 py-15">
    <div class="bg-gradient-to-r from-gray-100 to-gray-300 py-20 hover:rounded" data-aos="fade-down-right">
      <!-- Pricing -->
      <div class="min-h-screen flex justify-center items-center py-20">
        <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          <div
            class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <div class="relative">
              <img class="w-full rounded-xl" src="~/assets/image2.png" alt="Colors" />
            </div>
            <h1 class="mt-4 pt-5 text-2xl text-gray-500 font-bold cursor-pointer">
              Validate your idea
            </h1>
            <p class="text-sm text-gray-400 pt-5">
              Uncover valuable opportunities <br />
              through data driven insights and build <br />
              successful ventures
            </p>
            <div class="my-4">
              <nuxt-link to="Contact">
                <button id="myButton bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                  class="mt-4 shadow-2xl text-sm bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 w-full py-5 text-white border border-gray-500 rounded-full ">
                  Learn More
                </button>
              </nuxt-link>
            </div>
          </div>
          <div
            class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <div class="relative">
              <img class="w-full rounded-xl" src="~/assets/image3.png" alt="Colors" />
            </div>
            <h1 class="mt-4 pt-5 text-2xl text-gray-500 font-bold cursor-pointer">
              Design your app
            </h1>
            <p class="text-sm text-gray-400 pt-5">
              Clearly articulate the purpose and goals of your app <br />
              Determine the core features and <br /> functionalities your app will offer.

            </p>
            <div class="my-4">
              <nuxt-link to="Contact">
                <button id="myButton bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                  class="mt-4 shadow-2xl text-sm bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 w-full py-5 text-white border border-gray-500 rounded-full ">
                  Learn More
                </button>
              </nuxt-link>
            </div>
          </div>
          <div
            class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <div class="relative">
              <img class="w-full rounded-xl" src="~/assets/image1.png" alt="Colors" />
            </div>
            <h1 class="mt-4 pt-5 text-2xl text-gray-500 font-bold cursor-pointer">
              UX/UI Audit
            </h1>
            <p class="text-sm text-gray-400 pt-5">
              Analyze the user flow and navigation structure <br /> of the application or website
              Identify any bottlenecks and confusion.

            </p>
            <div id="f11" class="my-4 ">
              <nuxt-link to="Contact">
                <button
                  class="mt-4  shadow-2xl text-sm bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 w-full py-5 text-white border border-gray-500 rounded-full ">
                  Learn More
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <!-- End lg+ -->
    </div>
    <!-- End Comparison table -->

    <!-- End Pricing -->
  </section>
</template>

<script>







</script>



<style>
.py-12 {
  padding-top: 3rem;
  padding-bottom: 9rem;
}

.hbtn {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  padding: 8px 20px;
  margin: 0px 3px 6px;
  text-align: center;
  border: 2px solid rgb(255, 255, 255);
  text-decoration: none;
  color: rgb(255, 255, 255);
  white-space: nowrap;
  z-index: 0;
}


.hbtn i {
  padding-right: 8px;
}


.hb-fill-middle2-rev-bg::before {
  position: absolute;
  content: "";
  background: rgb(255, 255, 255);
  transition-duration: 0.3s;
  z-index: -1;
  inset: 0px 0px auto auto;
  width: 50%;
  height: 100%;
  opacity: 1;
}


.hb-fill-middle2-rev-bg:hover::before {
  width: 0px;
  height: 100%;
  opacity: 1;
}


.hb-fill-middle2-rev-bg {
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  transition: all 0.3s ease 0s;
}


.hb-fill-middle2-rev-bg:hover {
  background: transparent;
  color: rgb(255, 255, 255);
  transition: all 0.3s ease 0s;
}


.hb-fill-middle2-rev-bg::after {
  position: absolute;
  content: "";
  background: rgb(255, 255, 255);
  transition-duration: 0.3s;
  z-index: -1;
  inset: 0px auto auto 0px;
  width: 50%;
  height: 100%;
  opacity: 1;
}


.hb-fill-middle2-rev-bg:hover::after {
  width: 0px;
}
</style>
