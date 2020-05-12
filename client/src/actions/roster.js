import { SET_ROSTER } from './types'
import axios from 'axios'

// CREATE ROSTER
export const setRoster = (csv) => async (dispatch) => {
  try {
    const res = await axios.get(csv)

    // CREATE ROSTER FROM CSV
    let csvfile = res.data
    console.log(csvfile)

    var lines = csvfile.split('\n')
    console.log(csvfile)
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
