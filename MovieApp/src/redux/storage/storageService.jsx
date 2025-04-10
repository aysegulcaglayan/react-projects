export const getItem=(key,defaultValue=[])=>{
try {
    const storedItem=localStorage.getItem(key)
    return storedItem? JSON.parse(storedItem) :defaultValue

} catch (error) {
    console.error('Parse Error ' ,error )
}
}
export const setItem=(key,items)=>{
try {
    localStorage.setItem(key,JSON.stringify(items))
} catch (error) {
    console.error('Save Error ' , error)
}
}