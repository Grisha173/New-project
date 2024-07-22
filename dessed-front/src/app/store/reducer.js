import axios from "axios"

const initialState = {
    mainSettings: {
        data: {},
        status: 'initial'
    }
  }

  export default function appReducer(state = initialState, action) {
    switch (action.type) {
      case 'putMainSettings':
        return {...state, mainSettings: {data: action.payload, status: 'loaded'}}
      default:
        return state
    }
  }