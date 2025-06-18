<template>
  <div class="bg-gray-900 rounded-lg p-4 mb-4 border border-gray-800">
    <div class="flex justify-between items-center mb-2">
      <span class="text-gray-400 text-xs">NOW PLAYING</span>
      <div class="flex items-center">
        <span :class="props.is24bit ? 'visible' : 'invisible'" class="hi-res-badge mr-2">HI-RES AUDIO</span>
        <span class="text-sky-400 text-xs font-medium">PLAYING</span>
      </div>
    </div>
    <h2 class="text-white text-xl font-bold truncate">
      {{ props.trackName }}
    </h2>
    <p class="text-gray-300 truncate">
      {{ props.trackAuthor }}
    </p>
    <p class="text-gray-500 text-sm truncate">
      {{ props.trackAlbum }}
    </p>
  </div>
</template>

<script setup lang='ts'>
const props = defineProps({
  trackName: {
    type: String,
    default: ''
  },
  trackAuthor: {
    type: String,
    default: ''
  },
  trackAlbum: {
    type: String,
    default: ''
  },
  is24bit: {
    type: Boolean,
    default: false
  }
});

</script>

<style scoped>
.hi-res-badge {
  background: linear-gradient(135deg, #d4af37 0%, #f1c40f 50%, #d4af37 100%);
  color: #000;
  font-size: 0.65rem;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 4px;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 4px rgba(212, 175, 55, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
}
</style>
