export const ListComponent = () => {
    var arr = [
        {name: "Rohit"},
        {name: "Aditya"},
        {name: "Santosh"},
    ]
    return (
        <>
            <div>
                {arr.map((element) =>{
                    return <h2 key={element.name}>{element.name}</h2>;
                })}
            </div>
        </>
    )
}