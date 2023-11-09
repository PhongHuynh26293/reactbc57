import React, { Component } from "react";

export default class Databinding extends Component {
    // thuộc tính không const let, thuộc tính có thể sd mọi nơi chỉ cần {this.prod.name là ok},còn biến thì chỉ sd trong biến đó
    prod = {
        id:1,
        name:'iphone'
    }

  renderTitle = () => {
        let kq = 'XYZ';
        return <div>
            {kq}
        </div> // Có thể return về string, number, null, boolean hoặc jsx (không thể binding object )
    }

  render() {
    let title = 'Cybersoft';
    let person = {
        id:1,
        name: 'phong',
        img: 'https://i.pravatar.cc/150?img=3',
        age:30
    }

    const renderTitle = () => {
        let kq = 'XYZ';
        return <div>
            {kq}
        </div> // Có thể return về string, number, null, boolean hoặc jsx (không thể binding object )
    }

    return (
      <div className="container">
        <h3>Databinding</h3>
        <h3>product name: {this.prod.name}</h3>
        <p>{this.renderTitle()}</p>
        <p id="txt">{title}</p>
        <div className="card">
          <img className="card-img-top" src={person.img} alt="Title" />
          <div className="card-body">
            <h4 className="card-title">Name: {person.name}</h4>
            <p className="card-text">Age: {person.age}</p>
            <button className="btn btn-danger">Add friend</button>
          </div>
        </div>
      </div>
    );
  }
}
