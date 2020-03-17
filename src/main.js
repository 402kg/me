import React from 'react'
import { render } from 'react-dom'

import App from './App'

export function main() {
    const mount = document.createElement('div')
    mount.setAttribute('id', 'root')
    document.body.appendChild(mount)

    render(<App />, mount)
}

main()

export default { }
