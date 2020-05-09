import React, { Fragment } from 'react'
import Batter from './Batter'
import { connect } from 'react-redux'

const Lineup = ({ lineup }) => {
  return (
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
    </Fragment>
  )
}

const MapStateToProps = (state) => ({
  lineup: state.lineupReducer.lineup,
})

export default connect(MapStateToProps, {})(Lineup)
