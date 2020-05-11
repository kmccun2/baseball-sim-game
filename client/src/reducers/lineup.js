import { CREATE_LINEUP } from '../actions/types'
import { SET_ACTIVE } from '../actions/types'
import { ASSIGN_PLAYER } from '../actions/types'
import { UPDATE_LINEUP } from '../actions/types'
import { SIMULATE_GAME } from '../actions/types'

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
    case SIMULATE_GAME:
      return {
        ...state,
        sim_results: payload,
      }
    default:
      return state
  }
}
export default lineupReducer
