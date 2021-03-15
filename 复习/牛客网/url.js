function getUrlParam(sUrl, sKey) {
    let left = sUrl.indexOf('?') + 1
    let right = sUrl.lastIndexOf('#')
    let parasString = sUrl.slice(left,right)
    let paras = parasString.split('&')
    let parasJson = {}
    paras.forEach((value,index,arr) => {
        let a = value.split('=') 
        parasJson[a[0] !== undefined] ?
            parasJson[a[0] = [].concat(parasJson[a[0]],a[1])]
            : parasJson[a[0]] = a[1]
    })
}

console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe key'))