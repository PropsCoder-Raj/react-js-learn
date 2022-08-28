export const ChildComponent = (props) => {
    return(
        <>
            <div>
                <button onClick={() => props.alertFunction('Rohit')}>Alert</button>
            </div>
        </>
    )
}