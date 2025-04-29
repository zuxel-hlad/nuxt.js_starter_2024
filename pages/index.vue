<template>
    <section class="flex h-[calc(100dvh-70px)] flex-col items-center 2xl:h-[calc(100dvh-94px)]">
        <div
            class="before:bg-yellow relative container mx-auto flex h-full items-center justify-center px-5.25 before:absolute before:top-1/2 before:left-1/2 before:h-73.5 before:w-73.5 before:-translate-1/2 before:rounded-full before:blur-2xl sm:px-[0.656rem] sm:before:h-120.5 sm:before:w-120.5 md:px-[0.656rem] md:before:h-120.5 md:before:w-120.5 lg:px-[0.656rem] lg:before:h-120.5 lg:before:w-120.5 xl:before:h-120.5 xl:before:w-120.5 2xl:px-4.75 2xl:before:h-144.5 2xl:before:w-144.5"
        >
            <div class="relative mx-auto w-full">
                <main-floating-title
                    class="text-dark-grey mx-auto text-center text-[2.125rem]/[100%] font-bold uppercase sm:text-[3.625rem]/15.5 md:max-w-142 md:text-[3.625rem]/15.5 lg:max-w-181 lg:text-[3.625rem]/15.5 2xl:max-w-255.75 2xl:text-[5.125rem]/27.5"
                >
                    FULL-CYCLE EVENT AGENCY
                </main-floating-title>
                <main-rounded-text
                    text="showreel showreel showreel"
                    class="absolute right-[10.5%] -bottom-38.5 text-base md:right-[21.5%] lg:right-[25%] lg:-bottom-40.5 xl:right-[25%] xl:-bottom-40.5 2xl:right-[30%] 2xl:-bottom-35.75"
                />
            </div>
            <main-info-link to="/about" class="fixed top-1/2 -left-5 hidden -translate-y-1/2 -rotate-90 md:block">where?</main-info-link>
            <main-info-link to="/about" class="fixed top-1/2 -right-4 hidden -translate-y-1/2 rotate-90 md:block">what?</main-info-link>
            <main-info-link to="/about" class="fixed bottom-3 left-1/2 hidden -translate-x-1/2 md:block lg:bottom-3 2xl:bottom-[1.188rem]">who?</main-info-link>
        </div>
        <div class="fixed top-1/2 z-[-1] flex w-[200vw] -translate-y-1/2 -rotate-55 flex-col items-center justify-center gap-0 lg:-rotate-37 lg:gap-2 2xl:-rotate-33 2xl:gap-8">
            <nuxt-marquee
                class="rotate-180 overflow-y-hidden text-[1.75rem]/[100%] font-bold text-transparent uppercase sm:text-[2.625rem]/[100%] md:text-[2.625rem]/[100%] lg:text-[2.625rem]/[100%] 2xl:text-[3.25rem]/[1]"
                style="-webkit-text-stroke: 0.125rem #b0b0b0"
                >{{ runningString }}</nuxt-marquee
            >
            <nuxt-marquee
                class="overflow-y-hidden text-[1.75rem] font-bold text-transparent uppercase sm:text-[2.625rem]/[100%] md:text-[2.625rem]/[100%] lg:text-[2.625rem]/[100%] 2xl:text-[3.25rem]/[1]"
                style="-webkit-text-stroke: 0.125rem #b0b0b0"
                >{{ runningString }}</nuxt-marquee
            >
        </div>
    </section>
</template>

<script setup lang="ts">
const runningString: string =
    'EVENT AGENCY EVENT AGENCY EVENT AGENCY EVENT AGENCY EVENT AGENCY EVENT AGENCY EVENT AGENCY EVENT AGENCY EVENT AGENCY EVENT AGENCY EVENT AGENCY EVENT AGENCY EVENT AGENCY EVENT AGENCY EVENT AGENCY EVENT AGENCY EVENT AGENCY EVENT AGENCY EVENT AGENCY EVENT AGENCY'
</script>
