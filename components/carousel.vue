<template>
    <div data-aos="fade-right" data-aos-duration="3000" class="heroBlock mt-20">
        <v-carousel cycle hide-delimiters show-arrows="hover" width="40vh">
            <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" reverse-transition="fade-transition"
                transition="fade-transition">
                <v-row class="title fill-height hidden-xs-only" align="center" justify="center">{{ item.title }}</v-row>
            </v-carousel-item>
        </v-carousel>
    </div>
    <Consultation />
</template>
  
<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
    name: "Hero",
    data() {
        return {
            items: [
                {
                    src: 'https://i.ibb.co/wQ97NS7/3081648.jpg',
                },
                {
                    src: 'https://i.ibb.co/197kbTG/7856001.jpg"',
                },
                {
                    src: 'https://i.ibb.co/jwZxJKn/4380747.jpg',
                },
                {
                    src: 'https://i.ibb.co/JR5C3fh/5035108.jpg',
                },
            ]
        };
    },


    mounted() {
        AOS.init({});
    },
};

</script>