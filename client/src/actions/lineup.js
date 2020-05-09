import { SET_ACTIVE } from './types'
import { CREATE_LINEUP } from './types'
import { ASSIGN_PLAYER } from './types'
import { UPDATE_LINEUP } from './types'

// SELECT ACTIVE LINEUP SPOT
export const createLineup = () => async (dispatch) => {
  const newlineup = [
    { batter: null, id: 0 },
    { batter: null, id: 1 },
    { batter: null, id: 2 },
    { batter: null, id: 3 },
    { batter: null, id: 4 },
    { batter: null, id: 5 },
    { batter: null, id: 6 },
    { batter: null, id: 7 },
    { batter: null, id: 8 },
  ]

  dispatch({
    type: CREATE_LINEUP,
    payload: newlineup,
  })
}

// SELECT ACTIVE LINEUP SPOT
export const setActive = (id) => async (dispatch) => {
  return dispatch({
    type: SET_ACTIVE,
    payload: parseInt(id),
  })
}

// SELECT ACTIVE LINEUP SPOT
export const assignPlayer = (lineup, active, roster, number) => async (
  dispatch
) => {
  const player = roster.filter((each) => each.Number === number)
  lineup[active].batter = player[0]
  const newlineup = lineup
  return dispatch({
    type: ASSIGN_PLAYER,
    payload: newlineup,
  })
}

// UPDATE LINEUP
export const updateLineup = (lineup) => async (dispatch) => {
  return dispatch({
    type: UPDATE_LINEUP,
    payload: lineup,
  })
}
