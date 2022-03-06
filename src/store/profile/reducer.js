import {TOGGLE_SHOW_PROFILE} from "./actions";


const initialValues = {
  isShow: false,
}

export const profileReducer = (state = initialValues, action) => {

  switch(action.type) {
    case TOGGLE_SHOW_PROFILE: {

      return {
        isShow: !state.isShow,
      }
    }
    default: {
      return state;
    }
  }
}