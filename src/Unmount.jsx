import { useEffect } from "react"

const Unmount = () => {
    useEffect(() => {
        return () => {
            console.log('component just unmounted')
        }
    }, [])
    // componentWillUnmount
    return (
        <div>bye bye</div>
    )
}

export default Unmount