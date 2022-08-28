export const ClickHandler = () => {
    const clickHand = () => {
        console.log("Button Click");
    }
    return (
        <>
            <div>
                <button onClick={clickHand}>click</button>
            </div>
        </>
    )
}