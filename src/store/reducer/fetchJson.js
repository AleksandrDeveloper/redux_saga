const initialState={
    loading:false,
    data:[] 
}


export default function fetchJson(state=initialState,action){
    const {type,payload} = action
    switch (type) {
        case 'START_LOAD_DATA':
            return{
                ...state,
                loading:true
            }
        case 'SET_LOAD_DATA':
            return{
                ...state,
                loading:false,
                data:payload.data
            }
        default:
            return{
                ...state
            }
    }
}