import React, { Fragment } from 'react'
import { connect } from 'react-redux'

const Results = ({ sim_results }) => {
  return (
    <Fragment>
      <div className='results-container'>
        <div className='result col-md-3 p-2'>
          <div className='result-header'>Runs Scored</div>
          <div className='result-data'>{sim_results.runs_scored}</div>
        </div>
        <div className='result col-md-3 p-2'>
          <div className='result-header'>Runs Per Game</div>
          <div className='result-data'>
            {sim_results.runs_per_game.toFixed(1)}
          </div>
        </div>
        <div className='result col-md-3 p-2'>
          <div className='result-header'>Max Runs (Game)</div>
          <div className='result-data'>{sim_results.max_runs}</div>
        </div>
        <div className='result col-md-3 p-2'>
          <div className='result-header'>Min Runs (Game)</div>
          <div className='result-data'>{sim_results.min_runs}</div>
        </div>
      </div>
      <table className='player-stats'></table>
    </Fragment>
  )
}

const MapStateToProps = (state) => ({
  sim_results: state.lineupReducer.sim_results,
})

export default connect(MapStateToProps, {})(Results)
