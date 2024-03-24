export const Limiting = (values : string,limit : number) =>{
    const Strings = values.length > limit ? values.slice(0,30) + "..." : values
    return Strings

}