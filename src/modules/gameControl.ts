// 控制所有類
import snake from "./snake";
import Food from "./food";
import ScorePanel from "./scorePanel";

// 控制器控制其他類
class gameControl{
    snake: snake
    food: Food
    scorePanel: ScorePanel

    // 創建一個屬性儲存蛇的移動方向
    direction: string = ''

    // 判斷遊戲有沒有結束
    isLive = true

    constructor(){
        this.snake = new snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()

        this.init()
    }

    // 初始化
    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()
    }

    keydownHandler(event: KeyboardEvent) {
        this.direction = event.key
    }

    // 蛇移動的方法
    // 根據方向(tihs.direction)來使蛇的位置改變
    run() {
        let X = this.snake.X
        let Y = this.snake.Y

        switch (this.direction) {
            // 向上移動top減少
            case "ArrowUp":
                Y -= 10
                break
            case "ArrowDown":
                Y += 10
                break
            case "ArrowLeft":
                X -= 10
                break
            case "ArrowRight":
                X += 10
                break
        }


        // 檢查是否吃到食物
        (this.checkEat(X,Y))

        try{
            this.snake.X = X
            this.snake.Y = Y
        }catch (error){
            alert(error)
            this.isLive = false
        }

        // 定時調用
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
    }

    // 檢查蛇是否吃到食物
    checkEat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            // 食物位置重製
            this.food.change()
            // 分數增加
            this.scorePanel.addScore()
            // 蛇要增加一節
            this.snake.addBody()
        }
    }
}

export default gameControl