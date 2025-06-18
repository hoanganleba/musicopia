<template>
  <div class="bg-black p-4 border-t border-gray-800">
    <div class="flex justify-between items-center mb-3">
      <h3 class="text-white font-medium">PLAYLIST</h3>
      <button class="text-sky-400 text-sm hover:text-sky-300 focus:outline-none">
        View All
      </button>
    </div>
    <div class="space-y-2">
      <div class="flex items-center p-2 bg-gray-900 rounded hover:bg-gray-800 cursor-pointer">
        <div class="w-8 h-8 bg-sky-900 rounded flex items-center justify-center text-white mr-3">
          1
        </div>
        <div class="flex-1">
          <p class="text-white text-sm">Midnight City</p>
          <p class="text-gray-400 text-xs">M83</p>
        </div>
        <div class="flex items-center">
          <span class="info-badge bg-blue-900 text-blue-200 border border-blue-700 mr-2">FLAC</span>
          <span class="text-gray-400 text-xs">4:03</span>
        </div>
      </div>
      <div class="flex items-center p-2 rounded hover:bg-gray-800 cursor-pointer">
        <div class="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-gray-400 mr-3">
          2
        </div>
        <div class="flex-1">
          <p class="text-gray-300 text-sm">Wait</p>
          <p class="text-gray-500 text-xs">M83</p>
        </div>
        <div class="flex items-center">
          <span class="info-badge bg-red-900 text-red-200 border border-red-700 mr-2">MP3</span>
          <span class="text-gray-500 text-xs">5:43</span>
        </div>
      </div>
      <div class="flex items-center p-2 rounded hover:bg-gray-800 cursor-pointer">
        <div class="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-gray-400 mr-3">
          3
        </div>
        <div class="flex-1">
          <p class="text-gray-300 text-sm">Outro</p>
          <p class="text-gray-500 text-xs">M83</p>
        </div>
        <div class="flex items-center">
          <span class="info-badge bg-amber-900 text-amber-200 border border-amber-700 mr-2">WAV</span>
          <span class="text-gray-500 text-xs">3:16</span>
        </div>
      </div>
      <div class="flex items-center p-2 rounded hover:bg-gray-800 cursor-pointer">
        <div class="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-gray-400 mr-3">
          4
        </div>
        <div class="flex-1">
          <p class="text-gray-300 text-sm">Reunion</p>
          <p class="text-gray-500 text-xs">M83</p>
        </div>
        <div class="flex items-center">
          <span class="info-badge bg-purple-900 text-purple-200 border border-purple-700 mr-2">AIFF</span>
          <span class="text-gray-500 text-xs">4:25</span>
        </div>
      </div>
      <div class="flex items-center p-2 rounded hover:bg-gray-800 cursor-pointer">
        <div class="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-gray-400 mr-3">
          5
        </div>
        <div class="flex-1">
          <p class="text-gray-300 text-sm">Intro</p>
          <p class="text-gray-500 text-xs">M83</p>
        </div>
        <div class="flex items-center">
          <span class="info-badge bg-emerald-900 text-emerald-200 border border-emerald-700 mr-2">ALAC</span>
          <span class="text-gray-500 text-xs">2:15</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>

</script>