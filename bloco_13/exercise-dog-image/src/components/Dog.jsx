import React, { Component } from 'react';

class Dog extends Component {
  constructor(props) {
    super(props);

    this.fecthImageDog = this.fecthImageDog.bind(this);

    this.state = {
      dogObject: undefined,
      name: '',
      array: [],
    }
  }

  async fecthImageDog() {
    const requestReturn = await fetch('https://dog.ceo/api/breeds/image/random');
    const requestObject = await requestReturn.json();
    this.setState({
      dogObject: requestObject
    });
  }

  componentDidMount() {
    this.fecthImageDog();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.dogObject.message.includes("terrier")) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    localStorage.setItem("dogImage", this.state.dogObject.message);
    const dogBreed = this.state.dogObject.message.split("/")[4];
    alert(dogBreed);
  }

  render() {
    const { dogObject } = this.state;
    const loadingImageElement = dogObject === undefined ? <span>Loading...</span> :
      <img src={dogObject.message} alt=""/>;

    return (
      <div>
        <p>{loadingImageElement}</p>
        <button type="button" onClick={this.fecthImageDog}>New Dog!</button>
      </div>
      
    );
  }
}

export default Dog;
