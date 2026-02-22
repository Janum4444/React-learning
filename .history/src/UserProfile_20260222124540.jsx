

export const UserProfile = ({name, age, email, isActive}) => {
    return (
        <div>
            <h1> User Profile </h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
            <p>Status: {isActive ? "Active" : "Inactive"}</p>

            {
                isActive ? 
                <h1>User Active</h1> : 
                <h2>User Not Active</h2>
            }
            

            <h1>User Active</h1>
            <h2>User Not Active</h2>
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

