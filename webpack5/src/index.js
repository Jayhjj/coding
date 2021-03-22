import style from './index.css'
function comp() {
    const el = document.createElement('div')
    el.innerHTML = '<i>你好，jay</i>'
    console.log(style)
    return el
}

document.body.appendChild(comp())