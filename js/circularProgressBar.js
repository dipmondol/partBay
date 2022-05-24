// Php circular progress_bar
let number = document.getElementById("number");
let counter = 5;
setInterval(()=>{
    if(counter == 75){
        clearInterval();
    }else{

        
    counter += 1;
    number.innerHTML = counter + "%";
    }

}, 29);


let js_number = document.getElementById("js_number");
let counterJs = 0;
setInterval(()=>{
    if(counterJs == 65){
        clearInterval();
    }else{

        
    counterJs += 1;
    js_number.innerHTML = counterJs + "%";
    }

}, 30);