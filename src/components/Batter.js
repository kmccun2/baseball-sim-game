import React from 'react'
import { connect } from 'react-redux'
import { setActive } from '../actions/lineup'

const Batter = ({ active, setActive, id, batter }) => {
  // SET ACTIVE LINEUP SPOT
  const handleClick = (e) => {
    setActive(e.target.id)
  }

  return (
    <div className='batter'>
      <div
        className={active === id ? 'icon icon-active' : 'icon'}
        style={
          batter.batter
            ? { backgroundColor: batter.color, color: 'white', border: 'none' }
            : { backgroundColor: '#f7f7f7' }
        }
        id={id}
        onClick={(e) => handleClick(e)}
      >
        {batter.batter === null
          ? batter.id + 1
          : batter.batter.First[0] + batter.batter.Last[0]}
      </div>
    </div>
  )
}

const MapStateToProps = (state) => ({
  active: state.lineupReducer.active,
})

export default connect(MapStateToProps, { setActive })(Batter)
