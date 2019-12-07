import React from 'react';
import './App.css';

//Components
import Button from "./components/Button";
import Input from "./components/Input";
import ListElement from "./components/ListElement";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: '',
      values: [],
      isRunOnClick: true
    };
  }
  componentDidMount() {
    console.log('Burada yapılan işlem: component Did Mount!');
  }
  componentDidUpdate(prevProps, prevState, snapshot) { //değişkenler kişisel tercih

    //Burada setState yapılamaz!
    console.log('prevProps', prevProps); //Önceki Props
    console.log('prevState', prevState); //Önceki State
    console.log('snapshot', snapshot); //Snapshot
  }
  componentWillUnmount() {
    console.log('Burada yapılan işlem: component Will Unmount!');
  }
  _handleOnClick = () => {
    const values = this.state.values;
    const { currentValue, isRunOnClick } = this.state;
   
    if(isRunOnClick === true){
    values.push(currentValue);
    this.setState({ values: values }, () => { 
      console.log(this.state.values) 
    }); }
  };
  _handleOnChange = event => {
    this.setState({ currentValue: event.target.value }, () => {
      console.log('this.state.currentValue 1', this.state.currentValue);
    });
    console.log('this.state.currentValue 2', this.state.currentValue);
  };
  _renderElements = () => {
    const { values } = this.state;
    return values.map((value) => {
      return (<ListElement text={value} />);
    })
  };
  render() {
    console.log('render!');

    const css = {
      backgroundColor: 'black',
      color: 'white'
    }
    return (
      <div className="App">
        <div> <h4>Liste İşlemleri</h4> </div>
        <div>
          <Input handleOnChange={this._handleOnChange}></Input>
          <Button title="test" handleOnClick={this._handleOnClick}>test</Button>
        </div>
        <div style={css}> {/* css tanımı kullanım. amacı: hata verebilen css yazımı */}
          <ul>
            {this._renderElements()}
          </ul>
        </div>
      </div>
    );
  }
}

// Fonksiyon kullanım örneği
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React!!
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
