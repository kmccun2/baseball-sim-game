import React, { Fragment } from 'react'
import Player from './Player'
import { connect } from 'react-redux'

const Roster = ({ roster, active, lineup, assignPlayer }) => {
  return (
    <Fragment>
      {roster.length > 0 ? (
        <Fragment>
          <div className='roster bold-e'>SELECT YOUR LINEUP</div>
          <div className='player-cards mx-n2'>
            {roster.map((each) => (
              <Player
                name={each.First + ' ' + each.Last}
                number={each.Number}
                ab={each.AB}
                avg={each.AVG}
                slg={each.SLG}
                ops={each.OPS}
                sb={each.SB}
                bb={(parseInt(each.HBP, 10) + parseInt(each.BB, 10)).toString()}
                ks={each.SO}
                key={each.Number}
              />
            ))}
          </div>
        </Fragment>
      ) : null}
    </Fragment>
  )
}

const MapStateToProps = (state) => ({
  roster: state.rosterReducer.roster,
})

export default connect(MapStateToProps, {})(Roster)
