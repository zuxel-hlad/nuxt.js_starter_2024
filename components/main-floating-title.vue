<template>
    <component :is="tag" :style="textStyle" @mousemove="handleMouseMove" @mouseleave="resetTransform">
        <slot> Floating Text </slot>
    </component>
</template>

<script setup lang="ts">
interface IFloatingTitleProps {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const { tag = 'h1' } = defineProps<IFloatingTitleProps>()

const offsetX = ref<number>(0)
const offsetY = ref<number>(0)

const maxOffset: number = 20

const handleMouseMove = (event: MouseEvent) => {
    if (window.innerWidth <= 768) return
    const { clientX, clientY, currentTarget } = event
    const target = currentTarget as HTMLElement
    const rect = target.getBoundingClientRect()

    const x = ((clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((clientY - rect.top) / rect.height - 0.5) * 2

    offsetX.value = x * maxOffset
    offsetY.value = y * maxOffset
}

const resetTransform = (): void => {
    if (window.innerWidth <= 768) return
    offsetX.value = 0
    offsetY.value = 0
}

const textStyle = computed<{ transform: string; transition: string }>(() => ({
    transform: `translate(${offsetX.value}px, ${offsetY.value}px)`,
    transition: 'transform 0.1s ease-out',
}))
</script>
