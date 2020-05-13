import React from 'react'
import FileUpload from './components/FileUpload'
import Roster from './components/Roster'
import Lineup from './components/Lineup'
import logo from '../src/logo.png'

// Redux
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <div className='container mt-4'>
        <h4 className='display-4 text-center mb-4'>Lineup Simulator</h4>
        <img src={logo} className='logo' alt='logo'></img>
        <FileUpload />
        <Lineup />
        <Roster />
      </div>
    </Provider>
  )
}

export default App
