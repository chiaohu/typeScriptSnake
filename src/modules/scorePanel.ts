// 定義記分板

class ScorePanel{
    score = 0;
    level = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    // 設置變數限制等級
    maxLevel: number

    // 設置多少分時升級
    upScore: number

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    // 加分方法
    addScore() {
        this.score++;
        this.scoreEle.innerHTML = this.score + ''

        // 每10分升一級
        if (this.score % this.upScore === 0) {
            this.levelUp()
        }
    }

    // 增加等級
    levelUp() {
        if (this.level < this.maxLevel) {
            this.level++;
            this.levelEle.innerHTML = this.level + ''
        }
    }
}

export default ScorePanel