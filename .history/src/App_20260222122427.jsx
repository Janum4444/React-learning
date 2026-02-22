
import './App.css'
import { DynamicToaster } from './DynamicToaster.jsx'
import { Hello } from './Hello.jsx'
import {UserProfile, CustomComponent} from './UserProfile.jsx'

function App() {

  let product = [
    {
      id: 1,
      name: "Product 1",
      price: 100
    },
    {
      id: 2,
      name: "Product 2",
      price: 200    
    }
  ]

  return (
    <>
      <div>
        {/* <h1> Hello world</h1>
        <UserProfile />
        <CustomComponent />
        <Hello />   */}
        <DynamicToaster message="User created successfully!" product={product} />  
        <DynamicToaster message="Company created successfully!" />  

        <DynamicToaster message="Role created successfully!" />  


      </div>
    </>
  )
}

export default App
