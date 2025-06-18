<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Titlebar = defineAsyncComponent(() => import('./components/TitleBar.vue'))
</script>

<template>
    <div class="player-container w-screen h-screen overflow-hidden">
        <Titlebar />
        <!-- Main player section -->
        <div class="bg-gradient-to-b from-gray-900 to-black p-6 h-full w-full">
            <div class="flex flex-row gap-6">
                <!-- Album art - perfectly square with highlight shadow -->
                <div class="flex justify-start">
                    <div class="album-cover bg-black shadow-xl">
                        <img
                            class="w-full h-full object-cover"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%230ea5e9;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23312e81;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='400' fill='url(%23grad1)'/%3E%3Cpath d='M200 120 L280 200 L200 280 L120 200 Z' fill='white' fill-opacity='0.2'/%3E%3Ccircle cx='200' cy='200' r='60' fill='white' fill-opacity='0.3'/%3E%3Ctext x='200' y='320' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'>M83 - Midnight City</text%3E%3C/svg%3E"
                            alt="Album Art"
                        />
                    </div>
                </div>

                <!-- Player controls and info -->
                <div class="flex-1 flex flex-col">
                    <!-- Track info -->
                    <div
                        class="bg-gray-900 rounded-lg p-4 mb-4 border border-gray-800"
                    >
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-gray-400 text-xs"
                                >NOW PLAYING</span
                            >
                            <div class="flex items-center">
                                <span class="hi-res-badge mr-2"
                                    >HI-RES AUDIO</span
                                >
                                <span class="text-sky-400 text-xs font-medium"
                                    >PLAYING</span
                                >
                            </div>
                        </div>
                        <h2
                            class="text-white text-xl font-bold truncate"
                        >
                            Midnight City
                        </h2>
                        <p class="text-gray-300 truncate">
                            M83
                        </p>
                        <p
                            class="text-gray-500 text-sm truncate"
                        >
                            Hurry Up, We're Dreaming
                        </p>
                    </div>

                    <!-- File format and device info -->
                    <div
                        class="bg-gray-900 bg-opacity-50 rounded-lg p-3 mb-4 border border-gray-800"
                    >
                        <div class="flex flex-wrap gap-2 mb-2">
                            <span
                                class="info-badge bg-blue-900 text-blue-200 border border-blue-700"
                                >FLAC 24bit/96kHz</span
                            >
                            <span
                                class="info-badge bg-green-900 text-green-200 border border-green-700"
                                >Lossless</span
                            >
                            <span
                                class="info-badge bg-purple-900 text-purple-200 border border-purple-700"
                                >Stereo</span
                            >
                        </div>
                        <div class="flex justify-between items-center mt-3.5">
                            <div class="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="size-4 text-gray-400 mr-1"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
                                    />
                                </svg>
                                <span class="text-gray-300 text-xs"
                                    >DAC: AudioQuest DragonFly</span
                                >
                            </div>
                            <div class="flex items-center">
                                <span class="text-gray-300 text-xs"
                                    >Output: Headphones</span
                                >
                            </div>
                        </div>
                    </div>

                    <!-- Progress bar -->
                    <div class="mb-4">
                        <div
                            class="flex justify-between text-xs text-gray-400 mb-1"
                        >
                            <span id="currentTime">1:45</span>
                            <span id="totalTime">4:03</span>
                        </div>
                        <input
                            type="range"
                            class="progress-slider w-full h-2 appearance-none"
                            min="0"
                            max="100"
                            value="40"
                        />
                    </div>

                    <!-- Playback controls with smaller volume section -->
                    <div class="flex justify-between items-center mb-4">
                        <button
                            class="control-button text-gray-400 hover:text-white focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
                                />
                            </svg>
                        </button>
                        <button
                            class="control-button text-gray-400 hover:text-white focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-8"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
                                />
                            </svg>
                        </button>
                        <button
                            class="control-button bg-sky-500 hover:bg-sky-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-8"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                                />
                            </svg>
                        </button>
                        <button
                            class="control-button text-gray-400 hover:text-white focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-8"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
                                />
                            </svg>
                        </button>

                        <!-- Smaller volume control - now styled the same as progress bar -->
                        <div
                            class="flex items-center bg-gray-800 bg-opacity-50 rounded-full px-2 py-1"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-3 text-gray-400 mr-1"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                                />
                            </svg>
                            <input
                                type="range"
                                class="volume-slider w-12 h-1 appearance-none"
                                min="0"
                                max="100"
                                value="70"
                            />
                        </div>
                    </div>

                    <!-- Device selection -->
                    <div
                        class="bg-gray-900 bg-opacity-50 rounded-lg p-2 border border-gray-800 flex items-center justify-between mb-4"
                    >
                        <div class="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-4 text-sky-400 mr-2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
                                />
                            </svg>
                            <span class="text-white text-xs"
                                >Output Device</span
                            >
                        </div>
                        <select
                            class="bg-gray-800 text-gray-300 text-xs rounded px-2 py-1 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-sky-500"
                        >
                            <option>Headphones</option>
                            <option>Speakers</option>
                            <option>HDMI Output</option>
                        </select>
                    </div>
                </div>
            </div>
            <!-- Playlist section -->
            <div class="bg-black p-4 border-t border-gray-800">
                <div class="flex justify-between items-center mb-3">
                    <h3 class="text-white font-medium">PLAYLIST</h3>
                    <button
                        class="text-sky-400 text-sm hover:text-sky-300 focus:outline-none"
                    >
                        View All
                    </button>
                </div>
                <div class="space-y-2">
                    <div
                        class="flex items-center p-2 bg-gray-900 rounded hover:bg-gray-800 cursor-pointer"
                    >
                        <div
                            class="w-8 h-8 bg-sky-900 rounded flex items-center justify-center text-white mr-3"
                        >
                            1
                        </div>
                        <div class="flex-1">
                            <p class="text-white text-sm">Midnight City</p>
                            <p class="text-gray-400 text-xs">M83</p>
                        </div>
                        <div class="flex items-center">
                            <span
                                class="info-badge bg-blue-900 text-blue-200 border border-blue-700 mr-2"
                                >FLAC</span
                            >
                            <span class="text-gray-400 text-xs">4:03</span>
                        </div>
                    </div>
                    <div
                        class="flex items-center p-2 rounded hover:bg-gray-800 cursor-pointer"
                    >
                        <div
                            class="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-gray-400 mr-3"
                        >
                            2
                        </div>
                        <div class="flex-1">
                            <p class="text-gray-300 text-sm">Wait</p>
                            <p class="text-gray-500 text-xs">M83</p>
                        </div>
                        <div class="flex items-center">
                            <span
                                class="info-badge bg-red-900 text-red-200 border border-red-700 mr-2"
                                >MP3</span
                            >
                            <span class="text-gray-500 text-xs">5:43</span>
                        </div>
                    </div>
                    <div
                        class="flex items-center p-2 rounded hover:bg-gray-800 cursor-pointer"
                    >
                        <div
                            class="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-gray-400 mr-3"
                        >
                            3
                        </div>
                        <div class="flex-1">
                            <p class="text-gray-300 text-sm">Outro</p>
                            <p class="text-gray-500 text-xs">M83</p>
                        </div>
                        <div class="flex items-center">
                            <span
                                class="info-badge bg-amber-900 text-amber-200 border border-amber-700 mr-2"
                                >WAV</span
                            >
                            <span class="text-gray-500 text-xs">3:16</span>
                        </div>
                    </div>
                    <div
                        class="flex items-center p-2 rounded hover:bg-gray-800 cursor-pointer"
                    >
                        <div
                            class="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-gray-400 mr-3"
                        >
                            4
                        </div>
                        <div class="flex-1">
                            <p class="text-gray-300 text-sm">Reunion</p>
                            <p class="text-gray-500 text-xs">M83</p>
                        </div>
                        <div class="flex items-center">
                            <span
                                class="info-badge bg-purple-900 text-purple-200 border border-purple-700 mr-2"
                                >AIFF</span
                            >
                            <span class="text-gray-500 text-xs">4:25</span>
                        </div>
                    </div>
                    <div
                        class="flex items-center p-2 rounded hover:bg-gray-800 cursor-pointer"
                    >
                        <div
                            class="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-gray-400 mr-3"
                        >
                            5
                        </div>
                        <div class="flex-1">
                            <p class="text-gray-300 text-sm">Intro</p>
                            <p class="text-gray-500 text-xs">M83</p>
                        </div>
                        <div class="flex items-center">
                            <span
                                class="info-badge bg-emerald-900 text-emerald-200 border border-emerald-700 mr-2"
                                >ALAC</span
                            >
                            <span class="text-gray-500 text-xs">2:15</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
body {
    font-family: 'Inter', sans-serif;
    overflow: hidden;
}

.player-container {
    background: linear-gradient(145deg, #1e293b 0%, #0f172a 100%);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.volume-slider::-webkit-slider-thumb,
.progress-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    background: #38bdf8;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 8px rgba(56, 189, 248, 0.6);
    margin-top: -4.3px;
}

.volume-slider::-moz-range-thumb,
.progress-slider::-moz-range-thumb {
    width: 12px;
    height: 12px;
    background: #38bdf8;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 8px rgba(56, 189, 248, 0.6);
    margin-top: -4.3px;
}

.volume-slider::-webkit-slider-runnable-track,
.progress-slider::-webkit-slider-runnable-track {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    height: 3px;
}

.volume-slider::-moz-range-track,
.progress-slider::-moz-range-track {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    height: 3px;
}

.control-button:active {
    transform: scale(0.95);
}

.album-cover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5),
        0 0 30px rgba(56, 189, 248, 0.3);
    border-radius: 4px;
    overflow: hidden;
    width: 280px;
    height: 280px;
    position: relative;
}

.album-cover::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.15),
        rgba(255, 255, 255, 0)
    );
    border-radius: 4px 4px 0 0;
}

.info-badge {
    font-size: 0.7rem;
    padding: 2px 6px;
    border-radius: 4px;
}

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

/* Custom slider styling for both volume and progress */
input[type='range'] {
    -webkit-appearance: none;
    appearance: none;
    height: 3px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.2);
    outline: none;
}

input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #38bdf8;
    cursor: pointer;
    box-shadow: 0 0 8px rgba(56, 189, 248, 0.6);
}

input[type='range']::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #38bdf8;
    cursor: pointer;
    box-shadow: 0 0 8px rgba(56, 189, 248, 0.6);
}

@media (max-width: 768px) {
    .album-cover {
        width: 100%;
        height: auto;
        aspect-ratio: 1/1;
    }
}
</style>
