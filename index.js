import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import Fastfood from './App.js';


const titles = <h1>Welcome to react class!</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(titles);

// Function in react: In react we always must give function name in starting letter in capital:
// Two types of components one is functional components and another one is class components:

// Functional components:
function Hello1(){
  return <h1>React class</h1>;
}

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(<Hello1 />);

// Multi functional components:
function Header(){
  return <h2>H2 Heading</h2>
}

function Content(){
  return <h3>H3 Content</h3>
}

function Footer(){
  return <p>paragraph footer</p>
}


function ThreeFunction(){
  return <div>
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </div>
}

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<ThreeFunction />);

// Class components:
class Bike extends React.Component{
  render(){
    return <h1>My bike is Yamaha!</h1>
  }
}

const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(<Bike />);

// Multi class components:
class Train extends React.Component{
  render(){
    return <h1>Vande Bharat Rail service is launched in India!</h1>
  }
}

class Vehicle extends React.Component{
  render(){
    return <div>
      <Train />
      <h2>My car is lamborghini</h2>
      <h3>My bike is royal enfield</h3>
    </div>
  }
}

const root4 = ReactDOM.createRoot(document.getElementById("root4"));
root4.render(<Vehicle />);

// Multi class component external file:
class Twofiles extends React.Component{
  render(){
    return <div>
      <Fastfood />
      <h2>Organic foods are welcoming one!</h2>
    </div>
  }
}

const root5 = ReactDOM.createRoot(document.getElementById("root5"));
root5.render(<Twofiles />);

// 'props' in React props are 'properties' in react:
// React allows us to  pass information to a component using Props. 
// Props are immutable so, we cannot modify the props from inside the component.
// Props are global based variable.
// Syntax : this.props.propName;

// Props in functional component:
function Aeroplane(props) {
  return <h2>This is a { props.brand } brand Aeroplane!</h2>;
}

const root0 = ReactDOM.createRoot(document.getElementById("root0"));
root0.render(<Aeroplane brand="Kingfisher" />);


// Props in class components:
class  PropsEg extends React.Component{
  render(){
    return <h1>This is {this.props.colorName} color</h1>
  }
}

const root6 = ReactDOM.createRoot(document.getElementById("root6"));
root6.render(<PropsEg colorName="red" />);

// Multi Props:
class MultiProps extends React.Component{
  render(){
    return <h1>This is my favorite two colors {this.props.colorOne} and {this.props.colorTwo}.</h1>
  }
}

const root7 = ReactDOM.createRoot(document.getElementById("root7"));
root7.render(<MultiProps colorOne="Blue" colorTwo="Red" />);

// Multi Props with styles:
class MultiPropsStyle extends React.Component{
  render(){
    return <h1 style={colorPara}>This is my favorite two colors {this.props.colorOne} and {this.props.colorTwo}.</h1>
  }
}

var colorPara = {
  color: 'red',
  textAlign: 'center'
}

const root8 = ReactDOM.createRoot(document.getElementById("root8"));
root8.render(<MultiPropsStyle colorOne="Blue" colorTwo="Red" />);

// Passing one component to another component with props:
class PropsComponent1 extends React.Component{
  render(){
    return <h1>This bike is launched in {this.props.year}.</h1>
  }
}

class PropsComponent2 extends React.Component{
  render(){
    const fullYear = 2018;
    return <PropsComponent1 year = {fullYear}/>
  }
}

const root9 = ReactDOM.createRoot(document.getElementById("root9"));
root9.render(<PropsComponent2 />);

// Passing one class to another class by using object:
class PropsComponentObject1 extends React.Component{
  render(){
    return <h1>This bike is launched in {this.props.year}{this.props.month}</h1>
  }
}

class PropsComponentObject2 extends React.Component{
  render(){
    const fullYearMonth = {Year : "2020", Month : "/Aug"}
    return <PropsComponentObject1 year = {fullYearMonth.Year} month = {fullYearMonth.Month}/>
  }
}

const root10 = ReactDOM.createRoot(document.getElementById("root10"));
root10.render(<PropsComponentObject2 />);

// Passing one class to another class by using object another example:
function Car(props) {
  return <h2>I am a { props.brand.model }!</h2>;
}

function Garage() {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={ carInfo } />
    </>
  );
}

const root11 = ReactDOM.createRoot(document.getElementById('root11'));
root11.render(<Garage />);


// Call default in props:
class Reactprops extends React.Component{
  render(){
    return <h1>Welcome to {this.props.concept} in {this.props.subjectName}! </h1>
  }
}

Reactprops.defaultProps = {concept: "Props", subjectName: "React"};  // Here, 'defaultProps' is a predefined function:
const root12 = ReactDOM.createRoot(document.getElementById("root12"));
root12.render(<Reactprops concept="State" />);


