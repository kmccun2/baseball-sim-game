import React, { Fragment } from 'react'
import Batter from './Batter'
import { connect } from 'react-redux'
import Settings from './Settings'
const Lineup = ({ lineup, numActive, loading }) => {
  return (
    <Fragment>
      {loading ? (
        <div className='spinner-container'>Creating your roster...</div>
      ) : (
        <Fragment>
          {lineup.length > 0 && (
            <div className='lineup'>
              {lineup.map((each) => (
                <Batter
                  id={each.id}
                  color={each.color}
                  batter={each}
                  key={each.id}
                  active={each.active}
                />
              ))}
            </div>
          )}
          {numActive === 9 && (
            <div className='game-settings'>
              <Settings />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  )
}

const MapStateToProps = (state) => ({
  lineup: state.lineupReducer.lineup,
  numActive: state.lineupReducer.numActive,
  loading: state.rosterReducer.loading,
})

export default connect(MapStateToProps, {})(Lineup)
