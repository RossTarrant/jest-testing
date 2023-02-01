export function caesarCipher(plaintext, key){
    if(key<0){throw new Error("Keys must be greater than or equal to 0")};
    key = cleanKey(key);
    const chars = plaintext.toString().split("");
    let toReturn = [];
    for(let char of chars){
        if(!isSymbol(char) && !isInt(char)){
            let newChar = shiftChar(char, key);
            toReturn.push(newChar);
        }
        else{
            toReturn.push(char);
        }
    }
    return toReturn.join("");
}

function cleanKey(key){
    return key % 26;
}

function shiftChar(char, key){
    let code = char.charCodeAt();
    if(isUpper(char)){
        code += key;
        if(code > 90){
            code -= 26;
        }
    }
    else{
        code += key;
        if(code > 122){
            code -= 26;
        }  
    }
    return String.fromCharCode(code);
}

function isUpper(char){
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return upper.includes(char) ? true : false;
}

function isSymbol(char){
    const punctuation = "!@£$%^&*()-=_+{}[]:;?/>.<,~`|\""
    return punctuation.includes(char);
}

function isInt(char) {
    return !isNaN(char) && (function(x) { return (x | 0) === x; })(parseFloat(char))
  }