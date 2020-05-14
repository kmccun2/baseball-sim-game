import React from 'react'
import { Card } from 'react-bootstrap'
import { assignPlayer, updateLineup } from '../actions/lineup'
import { setBorder } from '../actions/roster'
import { connect } from 'react-redux'

const Player = ({
  name,
  number,
  color,
  ab,
  avg,
  slg,
  ops,
  bb,
  ks,
  roster,
  active,
  lineup,
  assignPlayer,
  setBorder,
}) => {
  // ASSIGN PLAYER TO ACTIVE LINEUP SPOT
  const handleClick = () => {
    assignPlayer(lineup, active, roster, number)
    setBorder(lineup, number, active, roster)
  }

  // REMOVE 0 FROM FRONT OF STATS
  let new_avg = parseFloat(avg).toFixed(3).toString()
  new_avg = new_avg.replace('0.', '.')

  let new_slg = parseFloat(slg).toFixed(3).toString()
  new_slg = new_slg.replace('0.', '.')

  let new_ops = parseFloat(ops).toFixed(3).toString()
  new_ops = new_ops.replace('0.', '.')

  return (
    <div
      className='player col-md-3 p-2'
      onClick={(e) => handleClick(lineup, active, roster, number)}
    >
      <Card style={{ border: '3px solid ' + color }}>
        <Card.Body>
          <Card.Title className='bold-e'>{name}</Card.Title>
          <Card.Subtitle className='mb-4 text-muted'>#{number}</Card.Subtitle>
          <Card.Text className='stat-title my-0'>
            AB: <span className='stat-text'>{ab}</span>
          </Card.Text>
          <Card.Text className='stat-title my-0'>
            AVG: <span className='stat-text'>{new_avg}</span>
          </Card.Text>
          <Card.Text className='stat-title my-0'>
            SLG: <span className='stat-text'>{new_slg}</span>
          </Card.Text>
          <Card.Text className='stat-title my-0'>
            OPS: <span className='stat-text'>{new_ops}</span>
          </Card.Text>
          <Card.Text className='stat-title my-0'>
            BB/HBP: <span className='stat-text'>{bb}</span>
          </Card.Text>
          <Card.Text className='stat-title my-0'>
            SO: <span className='stat-text'>{ks}</span>
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

export default connect(MapStateToProps, {
  assignPlayer,
  updateLineup,
  setBorder,
})(Player)
