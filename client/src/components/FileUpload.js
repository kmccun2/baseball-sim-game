import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { setRoster } from '../actions/roster'
import { createLineup } from '../actions/lineup'
// import Message from './Message'
import axios from 'axios'
// import Progress from './Progress'
import { Spinner } from 'react-bootstrap'
import Directions from './Directions'

const FileUpload = ({ roster, createLineup, setRoster }) => {
  const [file, setFile] = useState('')
  const [fileloading1, setFileLoading1] = useState(false)
  const [fileloading2, setFileLoading2] = useState(false)
  const [fileloading3, setFileLoading3] = useState(false)
  const [directions, setDirections] = useState(true)
  const [creatingRoster1, setCreatingRoster1] = useState('')
  const [creatingRoster2, setCreatingRoster2] = useState('')
  const [creatingRoster3, setCreatingRoster3] = useState('')
  const [filename, setFilename] = useState('Choose File')
  // const [message, setMessage] = useState('')
  // const [uploadPercentage, setUploadPercentage] = useState(0)
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

    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          // setUploadPercentage(
          //   parseInt(
          //     Math.round((progressEvent.loaded * 99) / progressEvent.total)
          //   )
          // )

          // Clear percentage
          setTimeout(() => {
            setFileLoading1(false)
            setFileLoading2(false)
            setFileLoading3(false)
          }, 5000)
        },
      })

      const { fileName } = res.data
      const csvPath = '/uploads/lineup.csv'
      // setMessage('File Uploaded')
      setCreatingRoster1(true)
      setTimeout(() => setCreatingRoster2(true), 100)
      setTimeout(() => setCreatingRoster3(true), 200)
      setTimeout(() => {
        setRoster(csvPath)
        createLineup()
        setCreatingRoster1(false)
        setCreatingRoster2(false)
        setCreatingRoster3(false)
      }, 2500)
    } catch (err) {
      if (err.response.status === 500) {
        // setMessage('There was a problem with the server')
      } else {
      }
    }
  }

  return (
    <Fragment>
      {/* {message ? <Message msg={message} /> : null} */}
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

        {/* <Progress percentage={uploadPercentage} /> */}

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
            <Spinner className='spinner' animation='grow' variant='primary' />
          )}
          {fileloading3 && (
            <Spinner className='spinner' animation='grow' variant='primary' />
          )}
        </div>
      )}
      {creatingRoster1 && (
        <div className='spinner-container'>
          <Spinner className='spinner' animation='grow' variant='primary' />
          {creatingRoster2 && (
            <Spinner className='spinner' animation='grow' variant='primary' />
          )}
          {creatingRoster3 && (
            <Spinner className='spinner' animation='grow' variant='primary' />
          )}
        </div>
      )}
      {directions && <Directions />}
    </Fragment>
  )
}

export default connect(null, {
  setRoster,
  createLineup,
})(FileUpload)
