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
        id={id}
        onClick={(e) => handleClick(e)}
      >
        {batter.batter === null ? 'Yo' : 'Nah'}
      </div>
    </div>
  )
}

const MapStateToProps = (state) => ({
  active: state.lineupReducer.active,
})

export default connect(MapStateToProps, { setActive })(Batter)
