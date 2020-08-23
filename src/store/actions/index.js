
export const LOAD_DATA = 'LOAD_DATA'

export function setLoadData(data){
    return{
        type:'SET_LOAD_DATA',
        payload:{data}
    } 
}

// export function startLoadData(){
//     return dispath=>{
//         dispath({
//             type:'START_LOAD_DATA'
//         })
        
//         fetch('https://jsonplaceholder.typicode.com/users/')
//         .then(res=>res.json())
//         .then(data=>dispath(setLoadData(data)))
//     }
// }

export function loadData(){
    return{
        type:LOAD_DATA
    }
}