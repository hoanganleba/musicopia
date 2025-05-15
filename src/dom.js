import { effect } from './reactive.js'

const SVG_NS = 'http://www.w3.org/2000/svg'

export function h(tag, props = {}, ...children) {
    const isSvg = tag === 'svg' || tag === 'path' || props.xmlns === SVG_NS
    const el = isSvg
        ? document.createElementNS(SVG_NS, tag)
        : document.createElement(tag)

    for (const key in props) {
        const value = props[key]

        if (key === 'style' && typeof value === 'object') {
            for (const [styleKey, styleValue] of Object.entries(value)) {
                el.style[styleKey] = styleValue
            }
        } else if (key.startsWith('on') && typeof value === 'function') {
            el.addEventListener(key.slice(2).toLowerCase(), value)
        } else if (value != null) {
            if (isSvg && key != 'xmlns') {
                el.setAttributeNS(null, key, value)
            } else {
                if (tag === 'path') {
                    el.setAttributeNS(null, key, value)
                }
                el.setAttribute(key, value)
            }
        }
    }

    const append = (child) => {
        if (Array.isArray(child)) {
            child.forEach(append)
        } else if (typeof child === 'function') {
            let placeholder = document.createTextNode('')
            el.appendChild(placeholder)
            effect(() => {
                const result = child()
                const node =
                    result instanceof Node
                        ? result
                        : document.createTextNode(result ?? '')
                if (placeholder.parentNode) {
                    placeholder.replaceWith(node)
                    placeholder = node
                }
            })
        } else if (typeof child === 'string' || typeof child === 'number') {
            el.appendChild(document.createTextNode(child))
        } else if (child instanceof Node) {
            el.appendChild(child)
        }
    }

    children.flat().forEach(append)
    return el
}

export function render(root, component) {
    const el = typeof component === 'function' ? component() : component
    root.appendChild(el)
}
