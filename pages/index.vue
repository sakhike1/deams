<template>
    <div>
        <NuxtLayout>
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

        </NuxtLayout>
    </div>
</template>

<script>

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

  
