<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const AlbumArt = defineAsyncComponent(() => import('./components/AlbumArt.vue'))
const Container = defineAsyncComponent(() => import('./components/Container.vue'))
const PlayerControl = defineAsyncComponent(() => import('./components/PlayerControl.vue'))
const PlayList = defineAsyncComponent(() => import('./components/PlayList.vue'))
const Titlebar = defineAsyncComponent(() => import('./components/TitleBar.vue'))
</script>

<template>
    <div class="player-container w-screen h-screen overflow-hidden cursor-default select-none overscroll-none">
        <Titlebar />
        <Container>
            <div class="flex flex-row gap-6">
                <AlbumArt
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%230ea5e9;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23312e81;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='400' fill='url(%23grad1)'/%3E%3Cpath d='M200 120 L280 200 L200 280 L120 200 Z' fill='white' fill-opacity='0.2'/%3E%3Ccircle cx='200' cy='200' r='60' fill='white' fill-opacity='0.3'/%3E%3Ctext x='200' y='320' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'>M83 - Midnight City</text%3E%3C/svg%3E" />
                <PlayerControl />
            </div>
            <PlayList />
        </Container>
    </div>
</template>

<style>
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
    background: linear-gradient(to bottom,
            rgba(255, 255, 255, 0.15),
            rgba(255, 255, 255, 0));
    border-radius: 4px 4px 0 0;
}

.info-badge {
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 4px;
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
