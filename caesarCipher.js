export function caesarCipher(plaintext, key){
    if(key<0){throw new Error("Keys must be greater than or equal to 0")};
    key = cleanKey(key);
    const chars = plaintext.split("");
    let toReturn = [];
    for(let char of chars){
        let newChar = shiftChar(char, key);
        toReturn.push(newChar);
    }
    return toReturn.join("");
}

function cleanKey(key){
    return key % 26;
}

function shiftChar(char, key){
    if(isUpper(char)){
        let code = char.charCodeAt();
        code += key;
        if(code > 90){
            code -= 25;
        }
        console.log(String.fromCharCode(code))
        return String.fromCharCode(code);
    }
    else{
        // is lower case
    }
}

function isUpper(char){
    return (char==char.toUppercase());
}

function isSymbol(char){
    const punctuation = ["!@£$%^&*()-=_+{}[]:;?/>.<,~`|\""]
    return punctuation.includes(char);
}