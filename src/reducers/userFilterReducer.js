export function userFilterReducer(state, { type, payload }){
    switch(type){
        case "CLEAR":
            return {
                ...state,
                gender: '',
                bloodGroup: '',
                university: '',
                sortBy: '',
            }
        // payload - "male" -> state: {
        //                        gender: 'male' 
        //                     }
        // this in turn is used in getGenderFilteredUsers() to get a list of filtered users according to state update
        case "GENDER":
            return {
                ...state,
                gender: payload
            }
        
        case "BLOOD":
            return {
                ...state,
                bloodGroup: payload
            }
        
        case "UNIVERSITY":
            return {
                ...state,
                university: payload
            }
        
        case "SORT_BY_AGE":
            return {
                ...state,
                sortBy: payload,
            }
        
        case "SORT_BY_FIRST_NAME":
            return {
                ...state,
                sortBy: payload,
            }

        default:
            return state
    }
}