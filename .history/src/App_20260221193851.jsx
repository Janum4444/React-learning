
import './App.css'
import { Hello } from './Hello.js'
import {UserProfile, CustomComponent} from './UserProfile.jsx'

function App() {

  return (
    <>
      <div>
        <h1> Hello world</h1>
        <UserProfile />
        <CustomComponent />
        <Hello />
      </div>
    </>
  )
}

export default App
