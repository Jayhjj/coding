//手动封装一个请求，可以设置最大值请求次数，如果请求成功，就不在请求
//如果请求失败，就继续请求直到最大次数
function request(url,body,successCallback,errorCallback,maxCount){
    return fetch(url,body)
            .then(response => successCallback(response))
            .catch(err => {
                if(maxCount <= 0){
                    return errorCallback(err,'请求超时');
                }
                return request(url,body,successCallback,errorCallback,--maxCount)
            })
}