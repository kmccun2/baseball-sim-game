import { SET_ROSTER } from '../actions/types'

const initialState = {
  roster: [],
  loading: true,
}

const rosterReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_ROSTER:
      return {
        ...state,
        roster: payload,
        loading: false,
      }
    default:
      return state
  }
}

export default rosterReducer
