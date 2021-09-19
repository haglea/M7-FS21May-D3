import { initialState } from '../store'

export const mainReducer = (state = initialState, action) => {
    console.log(action, state)
    const { type, payload } = action
    
    switch (type) {      
        case 'ADD_TO_FAV':
            return {          
                ...state,
                likes: [...state.likes, payload]
            }
        case 'REMOVE_FROM_FAV':
            return {          
                ...state,
                likes: state.likes.filter(company => company !== payload)
            }
      default:
        console.log('I fell into default!')
        return state 
    }
  }