export function capitalise(s){
    if(s===undefined){throw new Error("Missing parameter")}
    return s[0].toUpperCase() + s.slice(1);
}