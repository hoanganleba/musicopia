let currentEffect = null

export function createSignal(initalValue) {
    let value = initalValue
    const subscribers = new Set()

    function get() {
        if (currentEffect) {
            subscribers.add(currentEffect)
        }
        return value
    }

    function set(newValue) {
        if (newValue != value) {
            value = newValue
            subscribers.forEach((fn) => fn())
        }
    }

    return [get, set]
}

export function effect(fn) {
    currentEffect = fn
    fn()
    currentEffect = null
}
