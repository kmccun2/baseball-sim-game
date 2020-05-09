import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { setRoster } from '../actions/roster'
import { createLineup } from '../actions/lineup'

import Progress from './progress'
import axios from 'axios'

const FileUpload = ({ setRoster, createLineup, loading }) => {
  const [file, setFile] = useState('')
  const [filename, setFilename] = useState('Choose File')
  const [message, setMessage] = useState('')

  const onChange = (e) => {
    setFile(e.target.files[0])
    setFilename(e.target.files[0].name)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      const { fileName } = res.data

      setMessage('File Uploaded')
      const csvPath = '/uploads/' + fileName

      setRoster(csvPath)
      createLineup()
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server')
      } else {
        setMessage(err.response.data.msg)
      }
    }
  }

  return (
    <Fragment>
      {message && loading ? <Progress /> : null}
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
          className='btn btn-primary btn-block'
        />
      </form>
    </Fragment>
  )
}

const MapStateToProps = (state) => ({
  loading: state.loading,
})

export default connect(MapStateToProps, {
  setRoster,
  createLineup,
})(FileUpload)
