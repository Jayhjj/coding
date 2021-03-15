var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    console.log(this)
    console.log(e)
    container.innerHTML = count++;
};

// 防抖
function debounce(func, wait) {
    var timeout;
    return function () {
        let context = this;
        let args = arguments
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            func.apply(context,args)
        },wait);
    }
}


// container.onmousemove = getUserAction;

container.onmousemove = debounce(getUserAction, 1000);