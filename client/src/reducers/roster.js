import {
  SET_ROSTER,
  NEW_ROSTER,
  SET_BORDER,
  CLEAR_LINEUP_ROSTER,
} from '../actions/types'

const initialState = {
  roster: [],
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
    case NEW_ROSTER:
      return {
        roster: [],
      }
    case SET_BORDER:
      return {
        ...state,
        roster: payload,
      }
    case CLEAR_LINEUP_ROSTER:
      return {
        ...state,
        roster: payload,
      }
    default:
      return state
  }
}

export default rosterReducer
