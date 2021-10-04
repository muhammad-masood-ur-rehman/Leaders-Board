import React, { Component } from "react";
import "./student.css";

class Student extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      success: false,
      a: true
    };
  }

  componentDidMount() {
    this.setState({
      score: this.props.score
    });
  }

  addition() {
    console.log(this.state.score);
    this.setState(
      {
        score: this.state.score + 1
      },
      () => {
        if (this.state.score >= 350) {
          this.setState({ success: true });
        }
      }
    );
  }

  substraction() {
    console.log(this.state.score);
    this.setState({
      score: this.state.score - 1
    });
  }

  render() {
    const isSuccess = this.state.success;
    const a = this.state.score;
    let text;
    if (isSuccess) {
      text = <span>SUCCESS</span>;
    }
    if (a > 340 && a < 350) {
      text = "";
    }
    if (a <= 340) {
      text = <span>FAIL</span>;
    }

    return (
      <div className="back">
        <div className="s1">
          <p className="name">
            {this.props.name}
            <button className="add" onClick={() => this.addition()}>
              +
            </button>
            <button className="sub" onClick={() => this.substraction()}>
              -
            </button>
          </p>
          <p className="university">{this.props.university}</p>
        </div>
        <div className="s2">
          <p className="score">
            {this.state.score}
            {text}
          </p>
        </div>
      </div>
    );
  }
}
export default Student;
