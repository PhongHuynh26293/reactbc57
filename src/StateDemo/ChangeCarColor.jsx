import React, { Component } from 'react'

export default class ChangeCarColor extends Component {

    state = {
        imgCar:'./img/CarBasic/products/black-car.jpg'
    }

    changeColor = (color) => {
        this.setState({
            imgCar:`./img/CarBasic/products/${color}-car.jpg`
        })
    }
  render() {
    return (
      <div>
        <div className='container'>
            <h3>Change Color</h3>
            <div className='row'>
                <div className='col-6'>
                    <img className='w-100' src={this.state.imgCar} alt="..." />
                </div>
                <div className='col-6'>
                    <button className='btn btn-danger' onClick={()=>{
                        this.changeColor('red')
                    }}>Red</button>
                    <button className='btn btn-dark mx-2'>Black</button>
                    <button className='btn btn-secondary mx-2'>Silver</button>
                    <button className='btn btn-secondary'>Steel</button>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
