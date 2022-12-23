// 定義類
class Food{
    // 定義一個屬性表示食物對應的元素
    element: HTMLElement;

    constructor() {
        // 取的FOOD元素並賦值給element
        this.element = document.getElementById('food')! // !不可能為空的意思
    }

    // 定義一個食物獲取x軸座標的方法
    get X(){
        return this.element.offsetLeft;
    }

    // 定義一個食物獲取Y軸座標的方法
    get Y(){
        return this.element.offsetTop;
    }

    // 修改食物位置
    change() {
        // 生成一個隨機位置
        // 最小是0最大是290
        // 一次移動一格 一格的大小是10

        // Math.random()生成0~1的數字
        // Math.round() 4捨5入
        // Math.floor() 向下取整
        let top = Math.round(Math.random() * 29) * 10
        let left = Math.round(Math.random() * 29) * 10

        this.element.style.left = left + 'px'
        this.element.style.top = top + 'px'
    }
}

export default Food