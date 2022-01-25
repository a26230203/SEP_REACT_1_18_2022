
//map functions implement 
Array.prototype.map = function (cb) {
    let copyArr = [...this]
    let newArry = []
    for(let i = 0; i < copyArr.length; i++) {
        newArry.push(cb(copyArr[i], i, copyArr))
    }
    return newArry
}

//filter function implement
Array.prototype.filter = function (cb) {
    let copyArr = [...this]
    let newArry = []
    for(let i = 0; i < copyArr.length; i++) {
        let res = cb(copyArr[i], i, copyArr)
        if(res) {
            newArry.push(copyArr[i])
        }
    }
    return newArry
}

//reduce function implement
Array.prototype.reduce = function (cb, num) {
    this.num = num === undefined ? 0 : num
    let sum = this.num
    for(let i = 0; i < this.length; i++) {
        sum = cb(sum, this[i], i, this)
    }
    return sum
}

//some function implement 
Array.prototype.some = function (cb) {
    for(let i = 0; i < this.length; i++) {
        res = cb(this[i], i, this)
        if(res) {
            return true
        }
    }
    return false
}

//every function implement 
Array.prototype.every = function (cb) {
    for(let i = 0; i < this.length; i++) {
        res = cb(this[i], i, this)
        if(!res) {
            return false
        }
    }
    return true
}


