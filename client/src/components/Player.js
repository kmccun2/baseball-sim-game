import React from 'react'
import { Card } from 'react-bootstrap'
import { assignPlayer, updateLineup } from '../actions/lineup'
import { connect } from 'react-redux'

const Player = ({
  name,
  number,
  ab,
  avg,
  slg,
  ops,
  sb,
  bb,
  ks,
  roster,
  active,
  lineup,
  assignPlayer,
}) => {
  // ASSIGN PLAYER TO ACTIVE LINEUP SPOT
  const handleClick = () => {
    assignPlayer(lineup, active, roster, number)
  }
  return (
    <div
      className='player col-md-3 p-2'
      onClick={(e) => handleClick(lineup, active, roster, number)}
    >
      <Card>
        <Card.Body>
          <Card.Title className='bold-e'>{name}</Card.Title>
          <Card.Subtitle className='mb-4 text-muted'>#{number}</Card.Subtitle>
          <Card.Text className='stat-title my-0'>
            At Bats: <span className='stat-text'>{ab}</span>
          </Card.Text>
          <Card.Text className='stat-title my-0'>
            Average:{' '}
            <span className='stat-text'>{parseFloat(avg).toFixed(3)}</span>
          </Card.Text>
          <Card.Text className='stat-title my-0'>
            Slugging:{' '}
            <span className='stat-text'>{parseFloat(slg).toFixed(3)}</span>
          </Card.Text>
          <Card.Text className='stat-title my-0'>
            OPS: <span className='stat-text'>{parseFloat(ops).toFixed(3)}</span>
          </Card.Text>
          <Card.Text className='stat-title my-0'>
            Walks/HBP: <span className='stat-text'>{bb}</span>
          </Card.Text>
          <Card.Text className='stat-title my-0'>
            K: <span className='stat-text'>{ks}</span>
          </Card.Text>
          <Card.Text className='stat-title my-0'>
            SB: <span className='stat-text'>{sb}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

const MapStateToProps = (state) => ({
  roster: state.rosterReducer.roster,
  lineup: state.lineupReducer.lineup,
  active: state.lineupReducer.active,
})

export default connect(MapStateToProps, { assignPlayer, updateLineup })(Player)
