//localStorage and sessionStorage
let key=prompt("Enter a key");
let value=prompt("Enter a value");

localStorage.setItem(key,value);

if(key=="phone"){
    localStorage.removeItem(key);
}

if(key==0){
    localStorage.clear();
}

console.log(localStorage.getItem(key));