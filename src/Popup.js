import React from 'react';

class Popup extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      clickCount: 0
    };
  }

  handleClick(event) {
    let newClickCount = this.state.clickCount + 1;
    this.setState({ clickCount: newClickCount })
    if (this.state.clickCount > 2){
      window.confirm("Do you really want to leave?");
      this.setState({ clickCount: 0 })
    }
  }


  render() {
    return(
      <div >

      <p><i className="fa fa-times" aria-hidden="true" onClick={this.handleClick}> </i></p>
      <h1>You have won tickets to see {this.props.message}</h1>
      <h4>Please enter your email so we can send you the tickets</h4>
      <form><input type="text" placeholder="Email"/></form><button type="submit" form="form1" value="Submit" >Claim Your Prize</button>
      </div>
    );
  }
};

export default Popup;
