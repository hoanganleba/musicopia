import { h } from '../dom.js'

export default function BackwardButton() {
    const backwardButtonStyle = {
        border: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        cursor: 'pointer'
    }

    const BackwardSVG = () =>
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
                d: 'M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z',
            })
        )

    return h('button', { style: backwardButtonStyle }, BackwardSVG())
}
