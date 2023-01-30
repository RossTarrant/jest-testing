export function reverseString(s){
    if(typeof(s)!="string"){throw new Error("Parameter must be string")}
    return s.split("").reverse().join("");
}