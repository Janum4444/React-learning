export const Button = ({ label, onClick, temp }) => {
    return (
        <button onClick={onClick}>{label} {temp}</button>
    )
}