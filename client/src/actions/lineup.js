import { SET_ACTIVE } from './types'
import { CREATE_LINEUP } from './types'
import { ASSIGN_PLAYER } from './types'
import { UPDATE_LINEUP } from './types'

// SELECT ACTIVE LINEUP SPOT
export const createLineup = () => async (dispatch) => {
  const newlineup = [
    { batter: null, color: '#1abc9c', id: 0 },
    { batter: null, color: '#e74c3c', id: 1 },
    { batter: null, color: '#8e44ad', id: 2 },
    { batter: null, color: '#34495e', id: 3 },
    { batter: null, color: '#2ecc71', id: 4 },
    { batter: null, color: '#f1c40f', id: 5 },
    { batter: null, color: '#2980b9', id: 6 },
    { batter: null, color: '#e67e22', id: 7 },
    { batter: null, color: '#8e44ad', id: 8 },
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
  const batter = lineup.filter((each) => each.id === active)
  const newlineup = lineup.filter((each) => each)
  newlineup[active] = {
    batter: player[0],
    id: active,
    color: batter[0].color,
  }
  const notused = newlineup.filter((batter) => batter.batter === null)
  let newactive = 8
  const setNewactive = () => {
    if (notused.length === 0) {
      newactive = 8
    } else {
      newactive = notused[0].id
    }
    return newactive
  }
  const countActive = () => {
    return newlineup.filter((each) => each.batter != null).length
  }
  let numActive = countActive()

  newactive = setNewactive()
  return dispatch({
    type: ASSIGN_PLAYER,
    payload: { lineup: newlineup, active: newactive, numActive: numActive },
  })
}

// UPDATE LINEUP
export const updateLineup = (lineup) => async (dispatch) => {
  return dispatch({
    type: UPDATE_LINEUP,
    payload: lineup,
  })
}

// SIMULATE GAME
export const simulateGame = (lineup) => async (dispatch) => {
  alert(JSON.stringify(lineup, null, 2))
  console.log('YO')
}
