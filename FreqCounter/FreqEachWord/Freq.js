let str = 'Success is not the key of Happiness, Happiness is the key of Success'

str=str.replace(',','').split(' ')

let map=new Map()
for(let word of str){
    map.set(word,(map.get(word)||0)+1)
}
for(let key of map){
    console.log(`${key[0]}:-${key[1]}`)
}

