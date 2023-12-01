import { TOGGLE_THEME } from "./action"

const initalState = {
     theme: true
}

// 
export const themeReducer = (state = initalState,action ) => {
     switch (action.type) {
          case TOGGLE_THEME:
               return {
                    theme: !state.theme // Toggle theme
               }
          default:
               return state
     }
}

