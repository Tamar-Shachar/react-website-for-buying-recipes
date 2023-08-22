export const updateUserId = (id,index) =>{
    return{
        type: "UPDATEUSERID",
        payload: {id,index}
    }
}