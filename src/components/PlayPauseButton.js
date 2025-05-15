import { h } from '../dom.js'
import { createSignal } from '../reactive.js'

export default function Button() {
    const [isPlay, setIsPlay] = createSignal(false)

    const playPauseButtonStyle = {
        padding: '16px',
        display: 'flex',
        border: '1px solid #000',
        borderRadius: '99%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 16px 0',
        backgroundColor: 'transparent',
        cursor: 'pointer'
    }

    const PlaySVG = () =>
        h(
            'svg',
            {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                strokeWidth: '1.5',
                stroke: 'currentColor',
                width: '24px',
                height: '24px',
            },
            h('path', {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                d: 'M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z',
            })
        )

    const PauseSVG = () =>
        h(
            'svg',
            {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                strokeWidth: '1.5',
                stroke: 'currentColor',
                width: '24px',
                height: '24px',
            },
            h('path', {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                d: 'M15.75 5.25v13.5m-7.5-13.5v13.5',
            })
        )

    return h(
        'button',
        { style: playPauseButtonStyle, onClick: () => setIsPlay(!isPlay()) },
        () => (isPlay() ? PauseSVG() : PlaySVG())
    )
}
