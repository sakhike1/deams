<template>
    <section data-aos="fade-right" data-aos-duration="3000" class="2xl:py-24 2xl:bg-gray-50">
        <div
            class="px-4 shadow-xl mx-auto Pastel bg-gradient-to-r from-slate-500 to-yellow-100 max-w-7xl sm:px-6 lg:px-8 2xl:rounded-xl">
            <div class="py-10 sm:py-16 lg:py-24 2xl:pl-24">
                <div class="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
                    <div class="lg:order-2 2xl:-mr-24">
                        <img class="w-full h-80 shadow-xl rounded-xl" src="~/assets/robot.jpg" alt="" />
                    </div>

                    <div class="lg:order-1">
                        <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-snug">
                            Start working on <br class="hidden xl:block" />your App right now
                        </h2>

                        <div class="flex flex-col items-start mt-8 sm:space-x-4 sm:flex-row sm:items-center lg:mt-12">
                            <nuxt-link to="Contact" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden
                                        group rounded-md">
                                <span
                                    class="w-full h-full bg-gradient-to-br from-[#454545] via-[#454545] to-[#454545] group-hover:from-[#00FF00] group-hover:via-[#00FF00] group-hover:to-[#00FF00] absolute"></span>
                                <span
                                    class="relative px-6 py-3 transition-all ease-out rounded-md group-hover:bg-opacity-0 duration-400">
                                    <span class="relative text-white">Talk To Deams</span>
                                </span>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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