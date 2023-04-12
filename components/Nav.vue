<template>
  <div id="app" fixed>
    <div id=" nav" class="bg-gradient-to-r from-gray-100 to-gray-300 py-2">
      <nav class="container px-6 py-6 mx-auto md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between">
          <nuxt-link to="/"
            class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-blue-500 md:text-2xl hover:text-blue-200">DEAMS
          </nuxt-link>
          <!-- Mobile menu button -->
          <div @click="toggleNav" class="flex-end md:hidden">
            <button type="button" class="text-white hover:text-gray-1000 focus:outline-none focus:text-gray-400">
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                </path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col mt-4 m-2 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
          <li>
            <nuxt-link class="text-gray-500 text-tahiti text-sm hover:text-blue-300" to="/">
              Home</nuxt-link>
          </li>
          <li>
            <nuxt-link class="joinBtn text-gray-500 text-tahiti text-sm " to="Reachout">Reach out
            </nuxt-link>
          </li>
          <li>
            <nuxt-link class="  text-gray-500 text-tahiti text-sm hover:text-blue-300" to="About">
              About us
            </nuxt-link>
          </li>
          <li class="pt-2">
            <button type="button"
              class="text-white  hover:-translate-y-1 hover:scale-110  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-4 text-center mr-2 mb-2">
              <a href="#_"
                class="relative inline-flex items-center justify-center  p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                <span
                  class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                  <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                  <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                </span>
                <span class="relative text-white">Discuss your Project</span>
              </a> </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";


export default {
  name: "Nav",
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
  props: ["showExtra"],

  mounted() {
    console.log(this.$root);
  },

};
</script>

<style lang="css">
.scale-slide-enter-active,
.scale-slide-leave-active {
  position: fixed;
  transition: all 0.85s ease;
}

.scale-slide-enter-from {
  left: -100%;
}

.scale-slide-enter-to {
  left: 0%;
}

.scale-slide-leave-from {
  transform: scale(1);
}

.scale-slide-leave-to {
  transform: scale(0.8);
}

.joinBtn:hover {
  display: inline-block;
  color: royalblue;
}
</style>
