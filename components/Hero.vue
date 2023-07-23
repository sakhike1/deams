<template>
    <div class="py-16 bg-gradient-to-r from-gray-100 to-gray-300">
        <div class="xl:container  m-auto px-6 text-gray-600 md:px-12 xl:px-16">
            <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"
                class="drop-shadow-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:scale-125 hover:drop-shadow-blue-500/50 lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
                <div class="md:5/12 lg:w-1/2  hover:scale-95">
                    <img src="~/assets/image.png" loading="lazy" width="" height="" />

                </div>
                <div class="md:7/12 lg:w-1/2 py-4 m-4">
                    <h2 id="box" class="text-xl m-10 font-semi-bold text-white md:text-1xl dark:text-white">
                        Our work is carried
                        out by
                        passionate <br> developers
                    </h2>

                    <div class="m-7  ">
                        <div class="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
                            <div class="mt-8 flex gap-4 md:items-center">
                                <nuxt-link to="contact"
                                    class="w-12 h-12 flex hover:scale-95 gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="w-6 h-6 m-auto text-indigo-500  dark:text-indigo-400">
                                        <path fill-rule="evenodd"
                                            d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </nuxt-link>
                                <div class="w-5/6">
                                    <h4 class="font-semibold text-lg  text-white">
                                        Chat to us
                                    </h4>
                                    <p class=" text-xs text-white">
                                        Do you have an app idea that you'd like us to help you with
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="div popup">

            </div>
            <!-- <AnimatedCursor /> -->
            <!-- <scrollTopButton/> -->
        </div>
    </div>
</template>


  
<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
    mounted() {
        AOS.init({});

        let box2 = ["Our work is carried out by passionate  developers who have experience", "We take into consideration every need that you have in order for us to deliver", "Our work does the talk we always go above and beyond expectations"]
        let box = document.getElementById("box");



        function random1() {
            let random = [Math.floor(Math.random() * box2.length)]
            box.textContent = box2[random]
            console.log(random1())



        }
        setInterval(random1, 5000);

    },
};


</script>
  
<style  src="@luxdamore/vue-cursor-fx/dist/CursorFx.css">
.v-application .py-15 {
    padding-top: 60px !important;
    padding-bottom: 70px !important;
}

.relative {
    margin-bottom: -10px;
}

.movearea {
    transition: 0.3s background-color ease;
}

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    z-index: 10;
}

.tile {
    width: 60vmin;
    flex: 0 0 auto;
}

.tile__figure {
    margin: 0;
    padding: 0;
}

.tile__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

canvas {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 9;
}

.py-16 {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 5px;
}

.py-16>div {
    font-size: 30px;
    padding: .5em;
    color: #ffffff;
    background: #1c87c9;
    text-align: center;
}
</style>
  