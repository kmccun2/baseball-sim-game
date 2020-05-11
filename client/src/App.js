import React from 'react'
import FileUpload from './components/FileUpload'
import Roster from './components/Roster'
import Lineup from './components/Lineup'

// Redux
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <div className='container mt-4'>
        <h4 className='display-4 text-center mb-4'>
          <i className='fab fa-react' /> React File Upload
        </h4>

        <FileUpload />
        <Lineup />
        <Roster />
        <div className='credit'>Application created by Kurt McCune.</div>
      </div>
    </Provider>
  )
}

export default App
