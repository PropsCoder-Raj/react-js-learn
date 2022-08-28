export const UserGreeting = () => {
    var isLogin = true;
    return (
        <>
            <h6>Welcome { isLogin && "Rohit" } </h6>
        </>
    );
}
