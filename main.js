function powerNumber(num,degree) {
    if (degree === 0){
        return 1 
    }
    return num*powerNumber(num,degree-1)
}
console.log(powerNumber(13,2));

// Задача 2 решения фильтр
const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(arr,item) {
    return arr.filter(el=> el !== item)
}
console.log(removeElement(array,5));

// Задача 2 решение splice
function removeElementSplice(arr,item) {
    const index = arr.indexOf(item)
    if (index !== -1){
        arr.splice(index, 1)
    }
}
removeElementSplice(array,5);
console.log(array);

// Nr 3
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length,characters) {
let key = ""
const charlength = characters.length
for (let i = 0 ; i < length; i++) {
  const randomIndex = Math.floor(Math.random()*charlength)
    key += characters[randomIndex]
}
return key
}
console.log(generateKey(16,characters));