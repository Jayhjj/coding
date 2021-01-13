//公共的工具函数
export const setLocal = (name,value) => {
    localStorage.setItem(name,value)
}

export const getLocal = (name) => {
   return localStorage.getItem(name)
}