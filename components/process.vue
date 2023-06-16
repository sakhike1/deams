<template>
  <div class="py-12 bg-gray-100">
    <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div class="mb-12 space-y-5 text-left">
        <h1 class="text-base leading-relaxed text-s text-left">What we do</h1>
        <h1 class="text-2xl font-bold text-gray-500 text-left">
          We provide advanced app solutions <br />
          by Driving excellence
        </h1>

        <div data-aos="fade-right"
          class="group p-8 sm:p-6 rounded-2xl bg-white dark:shadow-none dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          <div class="relative overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
              alt="art cover" loading="lazy" width="1000" height="667"
              class="h-96 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
          </div>
          <div class="mt-6 text-left relative">

            <p class="text-xs mb-8 text-gray-400 dark:text-gray-300">
              Design is an iterative process. Regularly monitor and analyze user feedback, metrics, and industry trends.
              <br>
              Stay up to date with design best practices and continuously improve your design to stay competitive and meet
              <br> evolving user expectations
            </p>
            <Nuxt-link :to="{ path: 'contact' }"
              class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border border-gray-300 rounded-full group">
              <span
                class="absolute inset-0 flex items-center justify-center w-full h-full text-blue-300 duration-300 -translate-x-full group-hover:border-none group-hover:translate-x-0 ease">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                  </path>
                </svg>
              </span>
              <span
                class="absolute text-xs text-gray-800 font-light flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">Learn
                more</span>
              <span class="relative text-gray-800 hover:bg-blue-300 border border-black invisible">learn more</span>
            </Nuxt-link>
          </div>
        </div>

        <div data-aos="fade-right"
          class="group p-6 sm:p-8 rounded-3xl bg-white border-gray-100 dark:shadow-none dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          <div class="relative overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
              alt="art cover" loading="lazy" width="1000" height="667"
              class="h-96 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
          </div>
          <div class="mt-6 text-left relative">

            <p class="text-xs mb-8 text-gray-400 dark:text-gray-300">
              Prioritize usability and accessibility in your design. Ensure that your design is easy to understand
              and use with clear <br> instructions and intuitive interactions. Consider accessibility guidelines to make
              your design inclusive and accessible <br> to a wider range of users

            </p>
            <Nuxt-link :to="{ path: 'contact' }"
              class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border border-black rounded-full group">
              <span
                class="absolute inset-0 flex items-center justify-center w-full h-full text-blue-300 duration-300 -translate-x-full group-hover:border-none group-hover:translate-x-0 ease">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                  </path>
                </svg>
              </span>
              <span
                class="absolute text-xs text-gray-600 font-light flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">Learn
                more</span>
              <span class="relative text-gray-800 hover:bg-gray-100 invisible">learn more</span>
            </Nuxt-link>
          </div>
        </div>
        <div data-aos="fade-right"
          class="group p-6 sm:p-8 rounded-3xl bg-white dark:shadow-none dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          <div class="relative overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
              alt="art cover" loading="lazy" width="1000" height="667"
              class="h-96 w-full object-cover object-top transition duration-500 group-hover:scale-105" />

          </div>
          <div class="mt-6 text-left relative">

            <p class="text-xs mb-8 text-gray-400 dark:text-gray-300">
              Design with performance in mind. Optimize your design for fast loading times and smooth
              interactions.<br>
              Users appreciate designs that are efficient and responsive, contributing to a positive user experience
            </p>
            <nuxt-link :to="{ path: 'contact' }"
              class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border border-gray-300 rounded-full group">
              <span
                class="absolute inset-0 flex items-center justify-center w-full h-full text-blue-300 duration-300 -translate-x-full group-hover:border-none group-hover:translate-x-0 ease">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                  </path>
                </svg>
              </span>
              <span
                class="absolute text-xs text-gray-600 flex items-center justify-center w-full h-full font-light text-black transition-all duration-300 transform group-hover:translate-x-full ease">Learn
                more</span>
              <span class="relative text-gray-800 hover:bg-gray-100 font-light invisible">learn more</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
