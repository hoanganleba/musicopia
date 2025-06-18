<template>
  <div class="flex justify-start">
    <div class="album-cover bg-black shadow-xl">
      <img class="w-full h-full object-cover" :src="props.src" alt="Album Art" />
    </div>
  </div>
</template>

<script setup lang='ts'>
const props = defineProps({
  src: {
    type: String,
    default: '',
  }
});
</script>