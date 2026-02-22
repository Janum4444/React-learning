

export const UserProfile = ({name, age, email, isActive}) => {

    let userStatus = null;
    if(isActive) {
        userStatus = <h1>User Active</h1>
    } else {
        userStatus = <h2>User Not Active</h2>
    }
    
    return (
        <div>
            <h1> User Profile </h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
            <p>Status: {isActive ? "Active" : "Inactive"}</p>

            {
                userStatus
            }
            

            {/* <h1>User Active</h1>
            <h2>User Not Active</h2> */}
            <p>***********************************************</p>
        </div>
    )
}


export const CustomComponent = () => {
    return (
        <div>
            <h1> Custom Component </h1>
        </div>
    )
}

