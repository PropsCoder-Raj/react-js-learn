export const Greet = (props) => {
    return (
        <>
            <h1>Hello {props.name} {props.lastName}</h1>
            {props.children}
        </>
    )
}