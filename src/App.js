import { h } from './dom.js'
import PlayBackBar from './components/PlayBackBar.js'

export default function App() {
    const containerStyle = {
        height: '100vh',
        width: '100vw',
        position: 'relative',
    }

    return h('div', { style: containerStyle }, PlayBackBar())
}
