
const Timer = (cnt = 1) => {
    return new Promise((resolve) => 
        setTimeout(() => resolve({data: cnt}),3000)
    )
}
export default Timer;