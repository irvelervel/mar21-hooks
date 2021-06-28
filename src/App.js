import './App.css'
import Button from 'react-bootstrap/Button'
import { useState, useEffect, useMemo } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Unmount from './Unmount'

// RULES OF HOOKS
// 1) just use hooks into react functional components
// 2) always call hooks consistently, in the same order

// hooks allow you to have a state and grab onto lifecycle methods in functional components!

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Abdulkadir')
  const [obj, setObj] = useState({ name: 'Kaiwan', sex: 'male' })
  // const [name, setName] = useState('Gregorio')

  // count is the first element of the array useState is returning
  // setCount is the second element of the array useState is returning

  // count === this.state.count in a class
  // setCount === this.setState({count: ???}) in a class
  // setCount REPLACES the existing value of count
  // while setState MERGES whatever you pass to it into the state

  // const countStateVariable = useState()
  // countStateVariable[0] === count
  // countStateVariable[1] === setCount

  const myArray = ['gregorio', 'stefano', 'hasib', 'magda']

  // myArray[0] --> gregorio

  const returnTheArray = () => myArray

  // returnTheArray()[0] --> still gregorio

  const [student1, student2, student3, student4] = returnTheArray()

  console.log(student1, student2, student3, student4)

  console.log('RE-RENDERING')

  // useEffect is another hook, this time in charge of bringing lifecycle methods into functional components
  // useEffect can be used as a replacement for
  // 1) componentDidMount
  // 2) componentDidUpdate
  // 3) componentWillUnmount

  useEffect(() => {
    console.log('componentDidUpdate!')
  }) // now this is just like a componentDidUpdate, so every time there's a change
  // in the state variables or in the props

  useEffect(() => {
    console.log('obj just changed')
  }, [
    // the values you'll put here will declare how often this useEffect will be triggered
    // because it will re-trigger every time a change in these values is detected
    obj,
    // this is similar to a componentDidUpdate with the condition
  ])

  useEffect(() => {
    console.log('componentDidMount')
  }, [])
  // this is mimicking a componentDidMount

  useEffect(() => {
    return () => {
      console.log('component just unmounted')
    }
  }, [])
  // this is mimicking a componentWillUnmount

  // useMemo
  // useCallback
  // these are for PERFORMANCE reasons

  const complexObj = {
    name: 'Stefano',
    country: 'Italy',
    age: 34,
    roles: ['tutor', 'dev', 'staff'],
  }

  const complexObjMemoized = useMemo(
    () => ({
      name: obj.name,
      country: 'Italy',
      age: 34,
      roles: ['tutor', 'dev', 'staff'],
    }),
    [obj.name]
  )

  return (
    <div className="App">
      <header className="App-header">
        <div
          className="my-5"
          onClick={() => setObj({ name: obj.name === 'Kaiwan' ? 'Stefano' : 'Kaiwan', sex: obj.sex })}
        >
          {obj.name}
        </div>
        <Button onClick={() => setCount(count + 1)}>INCREMENT</Button>
        {count}
        <Button onClick={() => setCount(count - 1)}>DECREMENT</Button>
        {count === 0 && <Unmount />}
      </header>
    </div>
  )
}

export default App
