export function analyseArray(arr){

    if(arr===undefined){throw new Error('An array must be given as a parameter')}
    if(arr.length===0){throw new Error('Array must not be empty')}

    arr = arr.filter((data)=> typeof(data)==='number');

    const arrayObj = {
        average: average(arr),
        min: min(arr),
        max: max(arr),
        length: length(arr)
    }

    function average(arr){
        return arr.reduce((sum, num)=>sum+num,0)/arr.length;
    }

    function min(arr){
        return arr.reduce((curr,prev)=> Math.min(curr,prev));
    }

    function max(arr){
        return arr.reduce((curr,prev)=> Math.max(curr,prev));
    }

    function length(arr){
        return arr.length;
    }
    
    return arrayObj;
}