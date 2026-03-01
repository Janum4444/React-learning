import "./App.css";
import { Button } from "./Button.jsx";
import { DynamicToaster } from "./DynamicToaster.jsx";
import { Hello } from "./Hello.jsx";
import { ProductList } from "./ProductList.jsx";
import { TodoList } from "./TodoList.jsx";
import { UserProfile, CustomComponent } from "./UserProfile.jsx";

function App() {
  let product = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
    },
  ];

  const handleButtonClick = (data) => {
    // console.log("Button clicked!", e);
    // console.log("Button clicked!", e.pageX, e.pageY);
    alert(data);
  }

  return (
    <>

      {/* <button  onClick={() => alert("Button clicked!")}>click here</button>
      
      */}

      <button  onClick={() => handleButtonClick('Button clicked from parent')}>like here</button>

      <Button  handleClick={handleButtonClick} label="Click me" temp="temp data" />



      <div>
        <div>
          <h1 className="header"> Welcome To React</h1>
        </div>

        <div>
          <h1 style={{
            color : 'blue',
            backgroundColor : 'red'
          }}> Welcome To React</h1>
        </div>

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
  );
}

export default App;
