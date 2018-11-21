export default {
    set(key,value){
        if(typeof value === "object"){
            sessionStorage.setItem(key,JSON.stringify(value))
        }else{
            sessionStorage.setItem(key,value)
        }
    },
    get(key){
        try{
           return JSON.parse(sessionStorage.getItem(key))
        }
        catch(err){
            return sessionStorage.getItem(key)
        }
    },
    delete(key){
        sessionStorage.removeItem(key)
    }
}