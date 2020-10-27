class OpenButton {
    onClick(){
        const modal = new Modal()
        modal.style.display = 'block'
    }
}
//定义按钮对应的装饰器
class Decorator {
    constructor(open_button){
        this.open_button = open_button
    }
}
const openButton = new OpenButton()
const decorator 