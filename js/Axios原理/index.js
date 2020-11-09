// axios(config)
axios.method(url,data,config)



axios.interceptors.request.use(
    (res) => {
        return res
    },
    (err) => {
        return Promise.reject(error)
    }
)