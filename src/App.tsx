import Titlebar from './components/TitleBar'
import AlbumCard from './components/AlbumCard'
import { createSignal, onMount, Show } from 'solid-js'
import { invoke } from '@tauri-apps/api'
import Metadata from './types/Metadata'
import formatSampleRate from './utils/formatSampleRate'

const App = () => {
    const [metadata, setMetadata] = createSignal<Metadata>({
        title: '',
        artist: '',
        album: '',
        image: '',
        bit_depth: 0,
        sample_rate: 0,
    })
    onMount(async () => {
        const metadata = await invoke<Metadata>('read_flac_metadata', {
            filePath:
                '/Users/hoanganleba/Downloads/WHITEFISTS - Prism Castle/WHITEFISTS - Prism Castle - 01 透明の城.flac',
        })
        setMetadata(metadata)
    })
    return (
        <div class="w-screen min-h-screen h-screen overflow-hidden cursor-default select-none">
            <Titlebar />
            <div class="w-64 pt-16 px-6 h-full bg-neutral-50 flex flex-col gap-y-4 fixed">
                <div class="flex gap-x-4 items-center text-purple-800 font-semibold p-2">
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
                            d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
                        />
                    </svg>
                    Albums
                </div>
                <div class="flex gap-x-4 items-center p-2">
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
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                    </svg>
                    Artists
                </div>
                <div class="flex gap-x-4 items-center p-2">
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
                            d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
                        />
                    </svg>
                    Songs
                </div>
            </div>
            <div class="pt-16 px-8 overflow-auto ml-64 h-full">
                <h1 class="text-4xl text-purple-800 font-semibold">Albums</h1>
                <div class="grid grid-cols-5 gap-8 mt-8">
                    <AlbumCard
                        image={`data:image/jpeg;base64,${metadata().image}`}
                        album={metadata().album}
                        artist={metadata().artist}
                        title={metadata().title}
                    />
                </div>
            </div>
            <div class="absolute bottom-0 inset-x-0 bg-white/30 backdrop-blur-xl h-40 shadow-2xl">
                <div class="relative w-full h-full flex items-center px-8">
                    <div class="flex gap-4">
                        <img
                            class="h-28 w-auto rounded-lg"
                            draggable="false"
                            src={`data:image/jpeg;base64,${metadata().image}`}
                        />
                        <div>
                            <h3 class="text-lg text-purple-900 font-semibold mt-0.5">
                                {metadata().title}
                            </h3>
                            <p class="text-purple-800 text-sm">
                                {metadata().album}
                            </p>
                            <p class="text-purple-800 text-sm mt-1">
                                {metadata().artist}
                            </p>
                            <div class="flex items-center mt-2 gap-2">
                                <Show when={metadata().bit_depth >= 24}>
                                <img
                                    class="h-6"
                                    src="src/assets/hires-audio-logo.png"
                                />
                                </Show>
                                <p class="text-purple-800 text-xs font-medium">
                                    FLAC {metadata().bit_depth}/
                                    {formatSampleRate(metadata().sample_rate)}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div class="flex items-center gap-6 text-purple-800">
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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-16"
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
