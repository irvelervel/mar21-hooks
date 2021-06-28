import { Component } from 'react'

class ClassComponent extends Component {
    state = {
        count: 0,
        name: 'Abdulkadir'
    }

    // componentDidUpdate() {

    // }

    render() {
        return (
            <div className="App">
                <header
                    className="App-header"
                    onClick={() => {
                        this.setState({
                            count: this.state.count + 1
                        }, () => {
                            console.log(this.state.count)
                        })
                        // setState is an async operation

                    }}
                >
                    <div>{this.state.name}</div>
                </header>
            </div>
        )
    }
}

export default ClassComponent