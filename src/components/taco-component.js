import React, {Component} from 'react'

class TacoComponent extends Component {
    constructor(props) {
        super()
        this.tacoTopping = props.topping || ''
    }
    getTacos() {
        if (window) {
            window.alert(`TACOS! 🌮${this.tacoTopping}`)
        }
    }
    // lifecycle methods here
    render () {
        return (
            <div style={{padding: '1em'}}>
                <button
                    onClick={() => { this.getTacos()}}
                    style={{fontSize: '1.5em'}}>
                    Get tacos
                </button>
            </div>
        )
    }
}

export default TacoComponent
