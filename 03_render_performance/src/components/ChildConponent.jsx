const ChildCoponent = ({count}) => {

    console.log("%cChildComponent Exce","color:red");

    return (
        <>
            <div>Count: {count}</div>
        </>
    )
}
export default ChildCoponent;