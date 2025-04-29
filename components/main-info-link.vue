<template>
    <nuxt-link v-bind="$props">
        <span
            class="text-dark-grey relative inline-block text-sm whitespace-nowrap ring-0 transition-colors before:absolute before:bottom-0 before:h-0.5 before:w-0 before:bg-white before:transition-[width] hover:text-white hover:before:w-full active:text-white active:before:w-full 2xl:text-base"
        >
            <slot>Link to</slot>
        </span>
    </nuxt-link>
</template>

<script setup lang="ts">
import type { NuxtLinkProps } from '#app'

defineProps<NuxtLinkProps>()
</script>
