// The Task One and Task Two are in "Node Task" folder

let body = document.getElementById(`body`);
body.innerHTML = "";


console.log(`                          Task Three!`);

const addPara = (text) => {
    body.innerHTML += `<p id="Para">${text}</p>`
}
addPara("Adding Paragraph")
console.log(`The paragraph has been added through javascript`);




console.log(`                          Task Four!`);

const addList = (text) => {
    body.innerHTML += `<li id="list">${text}</li>`
}
addList("Adding List items # 1");
addList("Adding List items # 2");
console.log(`The list items has been added through javascript`);




console.log(`                          Task Five!`);

const changeBg = (elemId, color) => {
    let name = document.getElementById(elemId);
    name.style.backgroundColor = color
}
changeBg("list", "green");
changeBg("Para", "red")
console.log(`Background color has been changed through javascript`)




console.log(`                          Task Six!`);

console.log(`You can save an object using "objSaver()"`);

const objSaver = (key, object) => {
    var obj = JSON.stringify(object);
    localStorage.setItem(key, obj); 
    console.log(`Your object has been saved`)
}


console.log(`                          Task Seven!`);

console.log(`You can retrieve an object using "objRetrieve"`);

const objRetrieve = (key) => {
    let os = localStorage.getItem(key);
    let dat = JSON.parse(os);
    console.log(dat);
}




console.log(`                          Task Seven!`);
console.log(`You can save the keys and value of an object using "KeyValue()"`)

const KeyValue = function(object) {
    // let obj = JSON.stringify(object)
    for(key in object){
        localStorage.setItem(key, object[key]);
    }
    console.log(`Your keys and values has been saved`)

    let newObj = {}
    for(key in object){
        newObj[key] = localStorage.getItem(key)
        console.log(newObj[key])
    }
    return newObj;

}




