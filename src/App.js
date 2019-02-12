import React, { Component } from 'react';
import H1 from './H1'
import H2 from './H2'
import H3 from './H3';

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      count:0
    }
   this.updateClickcount= this.updateClickcount.bind(this)
  }
  updateClickcount(){
    this.setState({
      count:this.state.count + 1
    });
  }
  render() {
    return (
      <div>
        <H1 />
        <H2 clickCount={this.state.count}/>
        <H3 onClickprop={()=>this.updateClickcount()}/>
      </div>
    );
  }
}

export default App;
