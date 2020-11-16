function debounce() {
    let timer
    return function() {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn()
      }, 2000);
    }
  }
  