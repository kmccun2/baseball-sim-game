import React, { Fragment } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Errors from './Errors'
import { connect } from 'react-redux'
import { simulateGame } from '../actions/lineup'

const Settings = (lineup, simulateGame) => {
  const validationSchema = Yup.object().shape({
    games: Yup.number()
      .typeError('Games input must be a number.')
      .min(1, 'Must enter a number of games')
      .max(
        40000,
        'Invalid input. You may have exceeded the max number of games.'
      )
      .required("Please enter a number of games you'd like to simulate."),
    innings: Yup.number()
      .typeError('Innings input must be a number.')
      .min(1, 'Must enter a number of innings per game')
      .max(9, 'Invalid input. Innings must be a value less than 10.')
      .required("Please enter a number of innings you'd like to simulate."),
  })

  return (
    <Formik
      initialValues={{ games: 40, innings: 7 }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        isSubmitting,
        handleSubmit,
      }) => (
        <Fragment>
          <div className='settings-header'>
            Enter the number of games and innings per game you'd like to play.
          </div>
          <Errors touched={touched.games} message={errors.games} />
          <Errors touched={touched.innings} message={errors.innings} />

          <form className='settings-form' onSubmit={handleSubmit}>
            <label htmlFor='games'>Games: </label>
            <br></br>
            <input
              type='text'
              name='games'
              id='games'
              className={
                touched.games && errors.games ? 'input has-error' : 'input'
              }
              onChange={handleChange}
              value={values.games}
            />

            <br></br>
            <label htmlFor='innings'>Innings (per game): </label>
            <br></br>
            <input
              type='text'
              name='innings'
              id='innings'
              className={
                touched.innings && errors.innings ? 'input has-error' : 'input'
              }
              value={values.innings}
              onChange={handleChange}
            />

            <br></br>
            <button
              type='submit'
              value='play'
              className='playball'
              disabled={isSubmitting}
            >
              Play Ball!
            </button>
          </form>
        </Fragment>
      )}
    </Formik>
  )
}
const MapStateToProps = (state) => ({
  lineup: state.lineupReducer.lineup,
})

export default connect(MapStateToProps, { simulateGame })(Settings)
