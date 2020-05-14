import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import {
  setRoster,
  newRoster,
  clearLineupRoster,
  rosterLoading,
  loadCsv,
} from '../actions/roster'
import { createLineup, clearLineup, newRosterLineup } from '../actions/lineup'
import Directions from './Directions'
import ReactFileReader from 'react-file-reader'

const FileUpload = ({
  newRoster,
  clearLineup,
  createLineup,
  setRoster,
  newRosterLineup,
  clearLineupRoster,
  roster,
  rosterLoading,
  loading,
  stateCsv,
  loadCsv,
  storedCsv,
}) => {
  const [directions, setDirections] = useState(true)
  const [rosterExists, setRosterExists] = useState('')
  const [filename, setFilename] = useState(
    'Select an exported CSV file from GameChanger...'
  )

  const handleMLBClick = (e) => {
    e.preventDefault()
    rosterLoading()
    setRoster(stateCsv)
    createLineup()
    setRosterExists(true)
  }

  // UPLOAD FILE
  const handleFiles = (files) => {
    var reader = new FileReader()
    reader.onload = (e) => {
      loadCsv(reader.result)
    }
    reader.readAsText(files[0])
    setFilename('new_roster.csv')
    setDirections(false)
  }

  const onSubmit = async (e) => {
    if (stateCsv.includes('20 NYM,Alonso,Pete')) {
      alert('Hey where ya goin?? You have to select a file first.')
    } else {
      rosterLoading(false)
      setRoster(stateCsv)
      createLineup()
      setRosterExists(true)
    }
  }

  // NEW ROSTER
  const handleNewRoster = () => {
    newRosterLineup()
    loadCsv(storedCsv)
    newRoster()
    setRosterExists(false)
    setFilename('Select an exported CSV file from GameChanger...')
    setDirections(true)
  }
  // CLEAR LINEUP
  const handleClearLineup = () => {
    clearLineup()
    clearLineupRoster(roster)
  }

  return (
    <Fragment>
      {rosterExists && !loading ? (
        <Fragment>
          <input
            type='submit'
            value='New Roster'
            className='center btn btn-primary btn-block mt-4 col-md-6'
            onClick={() => handleNewRoster()}
          />
          <input
            type='submit'
            value='Clear Lineup'
            className='center clear-lineup btn btn-primary btn-block mt-4 col-md-6'
            onClick={handleClearLineup}
          />
        </Fragment>
      ) : (
        <Fragment>
          <div className='mlb-roster' onClick={handleMLBClick}>
            Use MLB Players
          </div>

          <ReactFileReader handleFiles={handleFiles} fileTypes={'.csv'}>
            <div className='custom-file mb-4'>
              <button
                type='file'
                className='custom-file-input'
                id='customFile'
              />
              <label className='custom-file-label' htmlFor='customFile'>
                {filename}
              </label>
            </div>
          </ReactFileReader>

          <button
            type='submit'
            value='Upload'
            className='btn btn-primary btn-block mt-4'
            disabled={isSubmitted}
            onClick={onSubmit}
          >
            Upload
          </button>
          {directions && (
            <Fragment>
              <Directions />
              <div className='credit'>Created by @kurtisleaux</div>
            </Fragment>
          )}
        </Fragment>
      )}
    </Fragment>
  )
}

const MapStateToProps = (state) => ({
  roster: state.rosterReducer.roster,
  loading: state.rosterReducer.loading,
  stateCsv: state.rosterReducer.stateCsv,
  storedCsv: state.rosterReducer.storedCsv,
})

export default connect(MapStateToProps, {
  setRoster,
  createLineup,
  clearLineup,
  newRoster,
  newRosterLineup,
  clearLineupRoster,
  rosterLoading,
  loadCsv,
})(FileUpload)
