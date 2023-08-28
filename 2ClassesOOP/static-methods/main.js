class Control {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0
    }
    
    increaseVolume() {
        this.volume += 1;
    }

    decreaseVolume() {
        this.volume -= 1;
    }
    
}