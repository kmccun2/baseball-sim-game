import {
  SET_ROSTER,
  NEW_ROSTER,
  SET_BORDER,
  CLEAR_LINEUP_ROSTER,
  ROSTER_LOADING,
} from './types'
import axios from 'axios'

// CREATE ROSTER
export const setRoster = (csv) => async (dispatch) => {
  try {
    const res = await axios.get(csv)

    // CREATE ROSTER FROM CSV
    let csvfile = res.data

    var lines = csvfile.split('\n')
    var result = []
    var headers = lines[1].split(',')
    let all_numbers = []

    for (var i = 1; i < lines.length; i++) {
      var obj = {}
      var currentline = lines[i].split(',')

      for (var j = 0; j < 53; j++) {
        obj[headers[j]] = currentline[j]
      }

      // CHECK TO MAKE SURE ROSTER NUMBER DOESN'T EXIST BEFORE ADDING
      if (all_numbers.includes(currentline[0]) === false) {
        all_numbers.push(currentline[0])
        if (currentline[0] === 'Team') {
          break
        }
        if (
          obj.Number !== '' &&
          obj.Number !== 'Number' &&
          obj.Number !== 'Team' &&
          obj.Number !== 'Glossary:'
        ) {
          result.push(obj)
          result.map((each) => {
            each.color = '#00000020'
            return each
          })
        }
      }
    }
    dispatch({
      type: SET_ROSTER,
      payload: result,
    })
  } catch (err) {
    console.log(err)
  }
}

// NEW ROSTER
export const newRoster = () => async (dispatch) => {
  return dispatch({
    type: NEW_ROSTER,
  })
}

// SET BORDER
export const setBorder = (lineup, number, active, roster) => async (
  dispatch
) => {
  const spot = lineup.filter((each) => each.id === active)
  const activecolor = spot[0].color
  const new_roster = roster.filter((each) => each)
  new_roster.map((each) => {
    if (each.color === activecolor) {
      each.color = '#00000020'
    }
    if (each.Number === number) {
      each.color = activecolor
    }
    return each
  })
  return dispatch({
    type: SET_BORDER,
    payload: new_roster,
  })
}

// CLEAR LINEUP
export const clearLineupRoster = (roster) => async (dispatch) => {
  let new_roster = roster.filter((each) => each)
  new_roster.map((each) => {
    each.color = '#00000020'
    return each
  })

  return dispatch({
    type: CLEAR_LINEUP_ROSTER,
    payload: new_roster,
  })
}

// CLEAR LINEUP
export const rosterLoading = () => async (dispatch) => {
  return dispatch({
    type: ROSTER_LOADING,
  })
}
