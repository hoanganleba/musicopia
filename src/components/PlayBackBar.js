import { h } from '../dom.js'
import BackwardButton from './BackwardButton.js'
import ForwardButton from './ForwardButton.js'
import PlayPauseButton from './PlayPauseButton.js'

export default function PlayBackBar() {
    const containerStyle = {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        border: '1px solid red'
    }

    const playPauseControlStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }

    return h(
        'div',
        { style: containerStyle },
        h(
            'div',
            {
                style: {
                    height: '100%',
                    width: '100%',
                    position: 'relative',
                    padding: '16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                },
            },
            h(
                'div',
                { style: playPauseControlStyle },
                BackwardButton(),
                PlayPauseButton(),
                ForwardButton()
            )
        )
    )
}
