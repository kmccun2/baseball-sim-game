import { SET_ACTIVE } from './types'
import { CREATE_LINEUP } from './types'
import { ASSIGN_PLAYER } from './types'
import { UPDATE_LINEUP } from './types'
import { SIMULATE_GAME } from './types'

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
export const simulateGame = (lineup, games, innings) => async (dispatch) => {
  let player1 = lineup[0].batter
  let player2 = lineup[1].batter
  let player3 = lineup[2].batter
  let player4 = lineup[3].batter
  let player5 = lineup[4].batter
  let player6 = lineup[5].batter
  let player7 = lineup[6].batter
  let player8 = lineup[7].batter
  let player9 = lineup[8].batter
  let first = false
  let second = false
  let third = false
  let outs = 0

  let results = {
    games: games,
    innings_per: innings,
    runs: 0,
    runs_scored: 0,
    games_played: 0,
    count_innings: 1,
    runs_per_game: 0,
    max_runs: 0,
    min_runs: 100,
    lineup: [
      {
        batter: player1,
        average: 0,
        singles: 0,
        doubles: 0,
        triples: 0,
        homeruns: 0,
        walks: 0,
        strikeouts: 0,
        hits: 0,
        abs: 0,
      },
      {
        batter: player2,
        average: 0,
        singles: 0,
        doubles: 0,
        triples: 0,
        homeruns: 0,
        walks: 0,
        strikeouts: 0,
        hits: 0,
        abs: 0,
      },
      {
        batter: player3,
        average: 0,
        singles: 0,
        doubles: 0,
        triples: 0,
        homeruns: 0,
        walks: 0,
        strikeouts: 0,
        hits: 0,
        abs: 0,
      },
      {
        batter: player4,
        average: 0,
        singles: 0,
        doubles: 0,
        triples: 0,
        homeruns: 0,
        walks: 0,
        strikeouts: 0,
        hits: 0,
        abs: 0,
      },
      {
        batter: player5,
        average: 0,
        singles: 0,
        doubles: 0,
        triples: 0,
        homeruns: 0,
        walks: 0,
        strikeouts: 0,
        hits: 0,
        abs: 0,
      },
      {
        batter: player6,
        average: 0,
        singles: 0,
        doubles: 0,
        triples: 0,
        homeruns: 0,
        walks: 0,
        strikeouts: 0,
        hits: 0,
        abs: 0,
      },
      {
        batter: player7,
        average: 0,
        singles: 0,
        doubles: 0,
        triples: 0,
        homeruns: 0,
        walks: 0,
        strikeouts: 0,
        hits: 0,
        abs: 0,
      },
      {
        batter: player8,
        average: 0,
        singles: 0,
        doubles: 0,
        triples: 0,
        homeruns: 0,
        walks: 0,
        strikeouts: 0,
        hits: 0,
        abs: 0,
      },
      {
        batter: player9,
        average: 0,
        singles: 0,
        doubles: 0,
        triples: 0,
        homeruns: 0,
        walks: 0,
        strikeouts: 0,
        hits: 0,
        abs: 0,
      },
    ],
  }
  const atBat = (batter, games, innings) => {
    // CALCULATE CHANCE OF BATTER GETTING A SINGLE, DOUBLE, TRIPLE, HR, WALK/HBP, SO, OUT
    let s_perc = parseInt(batter.batter['1B']) / parseInt(batter.batter['PA'])
    let d_perc = parseInt(batter.batter['2B']) / parseInt(batter.batter['PA'])
    let t_perc = parseInt(batter.batter['3B']) / parseInt(batter.batter['PA'])
    let h_perc = parseInt(batter.batter['HR']) / parseInt(batter.batter['PA'])
    let w_perc = parseInt(batter.batter['BB']) / parseInt(batter.batter['PA'])
    let k_perc = batter.batter['SO'] / parseInt(batter.batter['PA'])

    // ASSIGN AT BAT RESULT
    let outcome = 'Out'
    let pitchRand = Math.random()
    if (pitchRand < s_perc) {
      outcome = 'Single'
    } else if (pitchRand < s_perc + d_perc) {
      outcome = 'Double'
    } else if (pitchRand < s_perc + d_perc + t_perc) {
      outcome = 'Triple'
    } else if (pitchRand < s_perc + d_perc + t_perc + h_perc) {
      outcome = 'Homer'
    } else if (pitchRand < s_perc + d_perc + t_perc + h_perc + w_perc) {
      outcome = 'Walk'
    } else if (
      pitchRand <
      s_perc + d_perc + t_perc + h_perc + w_perc + k_perc
    ) {
      outcome = 'Strikeout'
    }
    // APPLY RESULTS BASED ON OUTCOME
    switch (outcome) {
      case 'Single':
        switch (true) {
          // RUNNER ON FIRST
          case first && !second && !third:
            second = true
            break
          // RUNNER ON FIRST AND SECOND
          case first && second && !third:
            third = true
            second = false
            results.runs += 1
            break
          // RUNNER ON FIRST, SECOND, AND THIRD
          case first && second && third:
            results.runs += 2
            break
          // RUNNER ON FIRST AND THIRD
          case first && !second && third:
            second = true
            results.runs += 1
            break
          // RUNNER ON SECOND
          case !first && second && !third:
            second = false
            results.runs += 1
            break
          // RUNNER ON SECOND AND THIRD
          case !first && second && third:
            second = false
            results.runs += 2
            break
          // RUNNER ON THIRD
          case !first && !second && third:
            results.runs += 1
            break
          default:
            break
        }
        first = true
        third = false
        batter.singles += 1
        batter.hits += 1
        batter.abs += 1
        break
      case 'Double':
        switch (true) {
          // RUNNER ON FIRST
          case first && !second && !third:
            third = true
            break
          // RUNNER ON FIRST AND SECOND
          case first && second && !third:
            third = true
            results.runs += 1
            break
          // RUNNER ON FIRST, SECOND, AND THIRD
          case first && second && third:
            third = true
            results.runs += 2
            break
          // RUNNER ON FIRST AND THIRD
          case first && !second && third:
            third = true
            results.runs += 1
            break
          // RUNNER ON SECOND
          case !first && second && !third:
            results.runs += 1
            break
          // RUNNER ON SECOND AND THIRD
          case !first && second && third:
            results.runs += 2
            break
          // RUNNER ON THIRD
          case !first && !second && third:
            results.runs += 1
            break
          default:
            break
        }
        first = false
        second = true
        batter.doubles += 1
        batter.hits += 1
        batter.abs += 1
        break
      case 'Triple':
        switch (true) {
          // RUNNER ON FIRST
          case first && !second && !third:
            results.runs += 1
            break
          // RUNNER ON FIRST AND SECOND
          case first && second && !third:
            results.runs += 2
            break
          // RUNNER ON FIRST, SECOND, AND THIRD
          case first && second && third:
            results.runs += 3
            break
          // RUNNER ON FIRST AND THIRD
          case first && !second && third:
            results.runs += 2
            break
          // RUNNER ON SECOND
          case !first && second && !third:
            results.runs += 1
            break
          // RUNNER ON SECOND AND THIRD
          case !first && second && third:
            results.runs += 2
            break
          // RUNNER ON THIRD
          case !first && !second && third:
            results.runs += 1
            break
          default:
            break
        }
        first = false
        second = false
        third = true
        batter.triples += 1
        batter.hits += 1
        batter.abs += 1
        break
      case 'Homerun':
        switch (true) {
          // NO ONE ON
          case !first && !second && !third:
            results.runs += 1
            break
          // RUNNER ON FIRST
          case first && !second && !third:
            results.runs += 2
            break
          // RUNNER ON FIRST AND SECOND
          case first && second && !third:
            results.runs += 3
            break
          // RUNNER ON FIRST, SECOND, AND THIRD
          case first && second && third:
            results.runs += 4
            break
          // RUNNER ON FIRST AND THIRD
          case first && !second && third:
            results.runs += 3
            break
          // RUNNER ON SECOND
          case !first && second && !third:
            results.runs += 2
            break
          // RUNNER ON SECOND AND THIRD
          case !first && second && third:
            results.runs += 3
            break
          // RUNNER ON THIRD
          case !first && !second && third:
            results.runs += 2
            break
          default:
            break
        }
        first = false
        second = false
        third = false
        batter.homeruns += 1
        batter.hits += 1
        batter.abs += 1
        break
      case 'Walk':
        switch (true) {
          // RUNNER ON FIRST
          case first && !second && !third:
            second = true
            break
          // RUNNER ON FIRST AND SECOND
          case first && second && !third:
            third = true
            break
          // RUNNER ON FIRST, SECOND, AND THIRD
          case first && second && third:
            results.runs += 1
            break
          // RUNNER ON FIRST AND THIRD
          case first && !second && third:
            second = true
            break
          // RUNNER ON SECOND
          case !first && second && !third:
            break
          default:
            break
        }
        first = true
        batter.walks += 1

        break
      case 'Strikeout':
        outs += 1
        batter.strikeous += 1
        batter.abs += 1
        batter.strikeouts += 1
        break
      case 'Out':
        outs += 1
        batter.abs += 1
        break
      default:
        break
    }
    // CHECK OUTS AND CLEAR BASES IF NEEDED
    if (outs === 3) {
      first = false
      second = false
      third = false
      outs = 0
      results.count_innings += 1
    }
    // START NEW GAME WHEN INNINGS ARE MET
    if (results.count_innings === innings + 1) {
      // ADD CURRENT GAME'S RUNS TO TOTAL RUNS FOR SIMULATION
      results.runs_scored += results.runs
      // SET MAX RUNS SCORED IN A GAME
      if (results.runs > results.max_runs) {
        results.max_runs = results.runs
      }
      // SET MIN RUNS SCORED IN A GAME
      if (results.runs < results.min_runs) {
        results.min_runs = results.runs
      }
      results.runs = 0
      results.games_played += 1
      results.count_innings = 1
    }
    if (results.games_played === games) {
      results.runs_per_game = results.runs_scored / games
    }
    return results
  }
  while (results.games_played < games) {
    results.lineup.map((each) => {
      if (results.games_played < games) {
        atBat(each, games, innings)
      }
      return each
    })
  }
  results.lineup = results.lineup.map((each) => {
    each.average = each.hits / each.abs
    each.pas = each.abs + each.walks
    return each
  })
  return dispatch({
    type: SIMULATE_GAME,
    payload: results,
  })
}
