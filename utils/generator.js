import {shuffle, random} from 'lodash'

function splitName(name, rate) {
    let list = []
    for(let i = 0; i < rate; i++){
        list.push(name)
    }
    return list
}

function concatSplitName(list) {
    let newList = []
    list.forEach(item => {
        newList.push(...splitName(item.name, item.rate))
    })
    return newList
}

export function generatorByRate(list){
    return shuffle(concatSplitName(list))[0]
}

export function rollList(times){
    let list = []
    for(let i = 0; i < times; i++){
        list.push(random(1,6))
    }
    return list
}

export function rollMin(times){
    return Math.min(...rollList(times))
}