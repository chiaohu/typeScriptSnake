class snake{
    head: HTMLElement;

    bodies: HTMLCollection

    element: HTMLElement

    constructor() {
        // querySelector只取第一個DOM元素
        this.head = document.querySelector('#snake > div') as HTMLElement
        this.element = document.getElementById('snake')!
        this.bodies = this.element.getElementsByTagName('div')
    }

    // 獲取蛇頭的座標
    get X(){
        return this.head.offsetLeft
    }

    get Y(){
        return this.head.offsetTop
    }

    // 設置蛇頭的座標
    set X(value: number){
        if (this.X === value) {
            return
        }
        if (value < 0 || value > 290){
            throw new Error('蛇撞牆了!')
        }

        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            if(value > this.X){
                value = this.X - 10
            }else {
                value = this.X + 10
            }
        }

        this.moveBody()
        this.head.style.left = value + 'px'

        this.checkHeadBody()
    }

    set Y(value: number){
        if (this.Y === value) {
            return
        }
        if (value < 0 || value > 290){
            throw new Error('蛇撞牆了!')
        }

        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            if(value > this.Y){
                value = this.Y - 10
            }else {
                value = this.Y + 10
            }
        }

        this.moveBody()
        this.head.style.top = value + 'px'

        this.checkHeadBody()
    }

    // 蛇增加身體的方法
    addBody(){
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }

    // 增加一個身體移動的方法
    moveBody() {
        // 將後面的身體設置為前面一位的身體
        // 獲取所有身體
        for(let i=this.bodies.length-1; i > 0; i--) {
            // 獲得前面的身體
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;
            // 將值設定到前一個身體上
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    checkHeadBody() {
        for(let i=1; i<this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error('撞到自己了!')
            }
        }
    }
}

export default snake;