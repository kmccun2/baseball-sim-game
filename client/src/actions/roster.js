import { SET_ROSTER } from './types'
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

    for (var i = 1; i < lines.length; i++) {
      var obj = {}
      var currentline = lines[i].split(',')

      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j]
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
    dispatch({
      type: SET_ROSTER,
      payload: result,
    })
  } catch (err) {
    console.log(err)
  }
}
