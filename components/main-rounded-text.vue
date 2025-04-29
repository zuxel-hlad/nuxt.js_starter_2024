<template>
    <div class="animate-rotate-text lg:hover:animate-rotate-text flex h-auto items-center justify-center lg:animate-none">
        <div
            class="relative before:absolute before:top-1/2 before:left-1/2 before:h-2 before:w-2 before:-translate-1/2 before:rounded-full before:bg-black"
            :style="containerStyle"
        >
            <span v-for="(char, index) in textArray" :key="index" class="absolute top-1/2 left-1/2 block text-base font-semibold text-white" :style="getCharStyle(index)">
                {{ char }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
const { text = 'Your Promo text' } = defineProps<{ text: string }>()

const textArray = computed<string[]>(() => text.split(''))

const baseLength = 24
const baseDiameter = 118
const baseRadius = 50

const containerStyle = computed<{ width: string; height: string }>(() => {
    const lengthFactor = textArray.value.length / baseLength
    const diameter = Math.max(baseDiameter, baseDiameter * lengthFactor)
    return {
        width: `${diameter}px`,
        height: `${diameter}px`,
    }
})

const radius = computed<number>(() => {
    const lengthFactor = textArray.value.length / baseLength
    return baseRadius * Math.max(1, lengthFactor)
})

const getCharStyle = (index: number) => {
    const angle = (index * 360) / textArray.value.length

    return {
        transform: `
        translate(-50%, -50%)
        rotate(${angle}deg)
        translate(0, -${radius.value}px)
      `,
    }
}
</script>
