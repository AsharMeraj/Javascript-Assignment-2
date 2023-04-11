console.log(`                           Task One!`)

const number = (n1) => {
    return function(n2){
        return n1 + n2;
    }
}
let fiveplus = number(5);
console.log(fiveplus(10));




console.log(`                           Task Two!`);

const findNum = (arr, val) =>{
    if(arr.length == 0){
        return false;
    } 
    else if(arr[0] == val) {
        return true;
    }
    else{
        return findNum(arr.slice(1),val);
    }
}
console.log(findNum([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 6));