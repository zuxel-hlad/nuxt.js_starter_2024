<template>
    <header class="py-3 md:py-[1rem] 2xl:py-6">
        <div class="container mx-auto flex items-center px-5.25 md:px-[0.656rem] lg:px-[0.656rem] 2xl:px-4.75">
            <div class="group relative">
                <button
                    type="button"
                    tabindex="0"
                    class="hover:border-dark-grey active:border-dark-grey bg-light-grey z-[10] flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full border border-[#C6C6C6] transition-colors 2xl:h-9.5 2xl:w-9.5"
                >
                    <img class="h-5 w-3.5 2xl:h-5.25 2xl:w-3.75" src="/lang-icon.svg" alt="lang switch" />
                </button>

                <ul
                    class="absolute top-1/2 left-0 flex -translate-y-1/2 items-center gap-2 opacity-0 transition-all duration-300 group-focus-within:translate-x-14 group-focus-within:opacity-100 group-hover:translate-x-11 group-hover:opacity-100 group-hover:2xl:translate-x-14"
                >
                    <li>
                        <button
                            type="button"
                            tabindex="0"
                            class="hover:border-dark-grey active:border-dark-grey bg-light-grey flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full border border-[#C6C6C6] text-[0.625rem] transition-colors 2xl:h-9.5 2xl:w-9.5 2xl:text-xs"
                        >
                            EN
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            tabindex="0"
                            class="hover:border-dark-grey active:border-dark-grey bg-light-grey flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full border border-[#C6C6C6] text-[0.625rem] transition-colors 2xl:h-9.5 2xl:w-9.5 2xl:text-xs"
                        >
                            UA
                        </button>
                    </li>
                </ul>
            </div>
            <main-logo class="mx-auto" />
            <div
                class="fixed top-0 -right-[100%] z-10 flex h-dvh w-full flex-col items-center justify-center gap-5 bg-black transition-[right] md:hidden"
                :class="{ 'right-0': isMobileMenuOpened }"
            >
                <button
                    type="button"
                    class="absolute top-5 right-5 flex h-[1.375rem] w-[1.375rem] flex-col items-center justify-center overflow-hidden"
                    @click="isMobileMenuOpened = false"
                >
                    <span class="h-[0.063rem] w-12 rotate-46 bg-white" />
                    <span class="h-[0.063rem] w-12 -rotate-46 bg-white" />
                </button>
                <main-info-link to="/about">where?</main-info-link>
                <main-info-link to="/about">what?</main-info-link>
                <main-info-link to="/about">who?</main-info-link>
            </div>
            <button type="button" class="flex h-[1.375rem] w-[1.375rem] flex-col items-center justify-center gap-2 md:hidden" @click="isMobileMenuOpened = true">
                <span class="h-[0.063rem] w-full bg-black" />
                <span class="h-[0.063rem] w-full bg-black" />
            </button>
        </div>
    </header>
</template>

<script setup lang="ts">
const isMobileMenuOpened = ref<boolean>(false)
</script>
