import { ChildComponent } from "./ChildComponent";


export const ParentComponent = () => {
    const alertFun = (name) => {
        alert(`Hello ${name}`);
    }
    return(
        <>
            <ChildComponent alertFunction={alertFun} />
        </>
    )
}