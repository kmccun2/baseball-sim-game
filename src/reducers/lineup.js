import {
  CREATE_LINEUP,
  CLEAR_LINEUP,
  SET_ACTIVE,
  ASSIGN_PLAYER,
  UPDATE_LINEUP,
  SIMULATE_GAME,
  NEW_ROSTER_LINEUP,
} from '../actions/types'

const initialState = {
  lineup: [],
  loading: true,
  active: 0,
  numActive: 0,
}

const lineupReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case CREATE_LINEUP:
      return {
        ...state,
        lineup: payload,
        loading: false,
        active: 0,
      }
    case SET_ACTIVE:
      return {
        ...state,
        active: payload,
      }
    case ASSIGN_PLAYER:
      return {
        ...state,
        lineup: payload.lineup,
        active: payload.active,
        numActive: payload.numActive,
      }
    case UPDATE_LINEUP:
      return {
        ...state,
        lineup: payload,
      }
    case CLEAR_LINEUP:
      return {
        ...state,
        lineup: payload.lineup,
        sim_results: payload.results,
        active: 0,
        numActive: 0,
      }
    case SIMULATE_GAME:
      return {
        ...state,
        sim_results: payload,
      }
    case NEW_ROSTER_LINEUP:
      return {
        lineup: [],
        active: 0,
        numActive: 0,
      }
    default:
      return state
  }
}
export default lineupReducer
