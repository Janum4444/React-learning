
import './App.css'
import { DynamicToaster } from './DynamicToaster.jsx'
import { Hello } from './Hello.jsx'
import { ProductList } from './ProductList.jsx'
import { TodoList } from './TodoList.jsx'
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
    },
  ]

  return (
    <>
      <div>
        {/* <TodoList /> */}
        <h1> Hello world</h1>
        {/* <UserProfile name="John Doe" age={30} email="john.doe@example.com" isActive={true} />
        <UserProfile name="John Doe 2" age={40} email="john.doe@example.com" isActive={false} /> */}

        <ProductList products={product} />




        {/* <CustomComponent />
        <Hello />   */}
        {/* <DynamicToaster  product={product[0]} />  

        {/* //company creation */}
        {/* <DynamicToaster message="Company created successfully!" product={product[0]} label="Company close" temp="temp data" />  

        <DynamicToaster message="Role created successfully!" />   */}


      </div>
    </>
  )
}

export default App
