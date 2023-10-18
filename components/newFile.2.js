export default (await import('vue')).defineComponent({
name: "Hero",
data() {
return {
items: [
{
src: 'https://i.ibb.co/Mcw1HKy/undraw-undraw-team-effort-7w2e-6lax.png',
},
{
src: 'https://i.ibb.co/ynDKNSG/undraw-Learning-re-32qv.png',
},
{
src: 'https://i.ibb.co/Mcw1HKy/undraw-undraw-team-effort-7w2e-6lax.png',
},
{
src: 'https://i.ibb.co/ynDKNSG/undraw-Learning-re-32qv.png',
},
]
};

},


mounted() {
AOS.init({});
},
});
