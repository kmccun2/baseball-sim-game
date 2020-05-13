import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import {
  setRoster,
  newRoster,
  clearLineupRoster,
  rosterLoading,
} from '../actions/roster'
import { createLineup, clearLineup, newRosterLineup } from '../actions/lineup'
import { Spinner } from 'react-bootstrap'
import Directions from './Directions'

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
}) => {
  const [file, setFile] = useState('')
  const [fileloading1, setFileLoading1] = useState(false)
  const [fileloading2, setFileLoading2] = useState(false)
  const [fileloading3, setFileLoading3] = useState(false)
  const [directions, setDirections] = useState(true)
  const [creatingRoster1, setCreatingRoster1] = useState('')
  const [creatingRoster2, setCreatingRoster2] = useState('')
  const [creatingRoster3, setCreatingRoster3] = useState('')
  const [rosterExists, setRosterExists] = useState('')
  const [filename, setFilename] = useState(
    'Select an exported CSV file from GameChanger...'
  )

  const [isSubmitted, setIsSubmitted] = useState('')

  const onChange = (e) => {
    setFile(e.target.files[0])
    setFilename(e.target.files[0].name)
    setFileLoading1(true)
    setDirections(false)
    setTimeout(() => setFileLoading2(true), 100)
    setTimeout(() => setFileLoading3(true), 200)
    setIsSubmitted(true)
    setTimeout(() => {
      setFileLoading1(false)
      setFileLoading2(false)
      setFileLoading3(false)
      setIsSubmitted(false)
    }, 4000)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    const formData = new FormData()
    formData.append('file', file)

    const csvPath = '/uploads/lineup.csv'
    rosterLoading()
    setTimeout(() => {
      setRoster(csvPath)
      createLineup()
      setCreatingRoster1(false)
      setCreatingRoster2(false)
      setCreatingRoster3(false)
      setRosterExists(true)
    }, 2000)
  }

  // NEW ROSTER
  const handleNewRoster = () => {
    newRosterLineup()
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
          <form onSubmit={onSubmit}>
            <div className='custom-file mb-4'>
              <input
                type='file'
                className='custom-file-input'
                id='customFile'
                onChange={onChange}
              />
              <label className='custom-file-label' htmlFor='customFile'>
                {filename}
              </label>
            </div>

            <input
              type='submit'
              value='Upload'
              className='btn btn-primary btn-block mt-4'
              disabled={isSubmitted}
            />
          </form>
          {fileloading1 && (
            <div className='spinner-container'>
              <Spinner className='spinner' animation='grow' variant='primary' />
              {fileloading2 && (
                <Spinner
                  className='spinner'
                  animation='grow'
                  variant='primary'
                />
              )}
              {fileloading3 && (
                <Spinner
                  className='spinner'
                  animation='grow'
                  variant='primary'
                />
              )}
            </div>
          )}
          {creatingRoster1 && (
            <div className='spinner-container'>
              <Spinner className='spinner' animation='grow' variant='primary' />
              {creatingRoster2 && (
                <Spinner
                  className='spinner'
                  animation='grow'
                  variant='primary'
                />
              )}
              {creatingRoster3 && (
                <Spinner
                  className='spinner'
                  animation='grow'
                  variant='primary'
                />
              )}
            </div>
          )}
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
})

export default connect(MapStateToProps, {
  setRoster,
  createLineup,
  clearLineup,
  newRoster,
  newRosterLineup,
  clearLineupRoster,
  rosterLoading,
})(FileUpload)
