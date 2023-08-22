export const apiReqestMiddleware = () => next => action => {
    
    if (action.type === "UPDATEPRODUCT") {
        console.log("middleware with action ", action)
    }
    return next(action)
}
// export const middlewareWithAPI = () => next => async action => {
//     if (action.type === "UPDATEPRODUCT") {
//         const url = "https://api.github.com/users/hadley/orgs"
//         const http = await fetch(url);
//         const userList = await http.json();
//         console.log(userList)
//         action.payload = userList[0].login
//     }

//     return next(action)
// }
