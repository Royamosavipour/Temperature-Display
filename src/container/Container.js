import React, { Component } from "react";
import "./Container.css";
// Counter*********************************
export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tem: 10,
      tempClass: "cold",
    };

    this.addToTem = this.addToTem.bind(this);
    this.minusToTem = this.minusToTem.bind(this);
  }

  addToTem() {
    if (this.state.tem > 30) {
      return false;
    }

    this.setState((prevstate) => {
      return { tem: prevstate.tem + 1 };
    });

    if (this.state.tem >= 15) {
      this.setState({ tempClass: "hot" });
    }
  }

  minusToTem() {
    if (this.state.tem <= 0) {
      return false;
    }
    this.setState((pervstate) => {
      return { tem: pervstate.tem - 1 };
    });

    if (this.state.tem<15) {
        this.setState({tempClass:'cold'})
        
    }
  }

  //   render*****************'
  render() {
    return (
      <div>
        <section>
          <div className="container-box">
            <div
              id="box-Elem"
              className={`tempertur-disply ${this.state.tempClass}`}
            >
              {this.state.tem}°c
            </div>

            <div className="btn-box">
              <button onClick={this.addToTem}> +</button>
              <button onClick={this.minusToTem}> - </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
