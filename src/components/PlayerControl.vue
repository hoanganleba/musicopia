<template>
  <div class="flex-1 flex flex-col">
    <TrackInfo :is24bit="selectedFormat?.is24bit" track-album="Hurry Up, We're Dreaming" track-author="M83"
      track-name="Midnight City" />

    <div class="bg-gray-900 bg-opacity-50 rounded-lg p-3 mb-4 border border-gray-800">
      <div class="flex flex-wrap gap-2 mb-2">
        <span class="info-badge border" :class="[
          selectedFormat?.formatColor.bg,
          selectedFormat?.formatColor.text,
          selectedFormat?.formatColor.border,
        ]">{{ selectedFormat?.format }}</span>
        <span class="info-badge" :class="[
          selectedFormat?.typeColor.bg,
          selectedFormat?.typeColor.text,
          selectedFormat?.typeColor.border,
        ]">{{ selectedFormat?.type }}</span>
        <span class="info-badge bg-purple-900 text-purple-200 border border-purple-700">{{ selectedFormat?.channels
          }}</span>
      </div>

      <div class="flex justify-between items-center mt-3.5">
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-4 text-gray-400 mr-1">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
          </svg>
          <span class="text-gray-300 text-xs">DAC: AudioQuest DragonFly</span>
        </div>
        <div class="flex items-center">
          <span class="text-gray-300 text-xs">Output: Headphones</span>
        </div>
      </div>
    </div>
    
    <!-- Progress bar -->
    <div class="mb-4">
      <div class="flex justify-between text-xs text-gray-400 mb-1">
        <span id="currentTime">1:45</span>
        <span id="totalTime">4:03</span>
      </div>
      <input type="range" class="progress-slider w-full h-2 appearance-none" min="0" max="100" value="40" />
    </div>

    <!-- Playback controls with smaller volume section -->
    <div class="flex justify-between items-center mb-4">
      <button class="control-button text-gray-400 hover:text-white focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
        </svg>
      </button>
      <button class="control-button text-gray-400 hover:text-white focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="size-8">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
        </svg>
      </button>
      <button
        class="control-button bg-sky-500 hover:bg-sky-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="size-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
        </svg>
      </button>
      <button class="control-button text-gray-400 hover:text-white focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="size-8">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
        </svg>
      </button>

      <!-- Smaller volume control - now styled the same as progress bar -->
      <div class="flex items-center bg-gray-800 bg-opacity-50 rounded-full px-2 py-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="size-3 text-gray-400 mr-1">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
        </svg>
        <input type="range" class="volume-slider w-12 h-1 appearance-none" min="0" max="100" value="70" />
      </div>
    </div>

    <!-- Device selection -->
    <div class="bg-gray-900 bg-opacity-50 rounded-lg p-2 border border-gray-800 flex items-center justify-between mb-4">
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="size-4 text-sky-400 mr-2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
        </svg>
        <span class="text-white text-xs">Output Device</span>
      </div>
      <select
        class="bg-gray-800 text-gray-300 text-xs rounded px-2 py-1 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-sky-500">
        <option>Headphones</option>
        <option>Speakers</option>
        <option>HDMI Output</option>
      </select>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TrackInfo from './TrackInfo.vue'

const audioFormats = [
  {
    format: 'FLAC 24bit/96kHz',
    type: 'Lossless',
    channels: 'Stereo',
    is24bit: true,
    formatName: 'FLAC',
    formatColor: {
      bg: 'bg-blue-900',
      text: 'text-blue-200',
      border: 'border-blue-700',
    },
    typeColor: {
      bg: 'bg-green-900',
      text: 'text-green-200',
      border: 'border-green-700',
    },
  },
  {
    format: 'MP3 320kbps',
    type: 'Lossy',
    channels: 'Stereo',
    is24bit: false,
    formatName: 'MP3',
    formatColor: {
      bg: 'bg-red-900',
      text: 'text-red-200',
      border: 'border-red-700',
    },
    typeColor: {
      bg: 'bg-orange-900',
      text: 'text-orange-200',
      border: 'border-orange-700',
    },
  },
  {
    format: 'WAV 24bit/48kHz',
    type: 'Lossless',
    channels: 'Stereo',
    is24bit: true,
    formatName: 'WAV',
    formatColor: {
      bg: 'bg-amber-900',
      text: 'text-amber-200',
      border: 'border-amber-700',
    },
    typeColor: {
      bg: 'bg-green-900',
      text: 'text-green-200',
      border: 'border-green-700',
    },
  },
  {
    format: 'AIFF 24bit/96kHz',
    type: 'Lossless',
    channels: 'Stereo',
    is24bit: true,
    formatName: 'AIFF',
    formatColor: {
      bg: 'bg-purple-900',
      text: 'text-purple-200',
      border: 'border-purple-700',
    },
    typeColor: {
      bg: 'bg-green-900',
      text: 'text-green-200',
      border: 'border-green-700',
    },
  },
  {
    format: 'ALAC 16bit/44.1kHz',
    type: 'Lossless',
    channels: 'Stereo',
    is24bit: false,
    formatName: 'ALAC',
    formatColor: {
      bg: 'bg-emerald-900',
      text: 'text-emerald-200',
      border: 'border-emerald-700',
    },
    typeColor: {
      bg: 'bg-green-900',
      text: 'text-green-200',
      border: 'border-green-700',
    },
  },
]

const props = defineProps({
  format: {
    type: String,
    default: 'FLAC 24bit/96kHz',
  },
})

const selectedFormat = computed(() => {
  return audioFormats.find((f) => f.format === props.format)
})
</script>

<style scoped>
.info-badge {
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 4px;
}
</style>
