export const Button = ({ label, handleClick }) => {
    return (
        <button onClick={() => handleClick('Button clicked! from child')}>{label}</button>
    )
}