export function add(x,y){
    if(typeof(x)!="number" || typeof(y)!="number"){throw new Error("Parameter should be integer")}
    return x+y;
}

export function subtract(x,y){
    if(typeof(x)!="number" || typeof(y)!="number"){throw new Error("Parameter should be integer")}
    return x-y;
}

export function divide(x,y){
    if(typeof(x)!="number" || typeof(y)!="number"){throw new Error("Parameter should be integer")}
    return x/y;
}

export function multiply(x,y){
    if(typeof(x)!="number" || typeof(y)!="number"){throw new Error("Parameter should be integer")}
    return x*y;
}