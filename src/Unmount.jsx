import { useEffect } from "react"

const Unmount = () => {
    useEffect(() => {
        return () => {
            console.log('component just unmounted')
            // just when the component is going to be unmounted
        }
    }, [])
    // componentWillUnmount
    return (
        <div>bye bye</div>
    )
}

export default Unmount