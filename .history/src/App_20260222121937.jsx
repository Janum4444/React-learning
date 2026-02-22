
import './App.css'
import { DynamicToaster } from './DynamicToaster.jsx'
import { Hello } from './Hello.jsx'
import {UserProfile, CustomComponent} from './UserProfile.jsx'

function App() {

  return (
    <>
      <div>
        {/* <h1> Hello world</h1>
        <UserProfile />
        <CustomComponent />
        <Hello />   */}
        <DynamicToaster />  
      </div>
    </>
  )
}

export default App
