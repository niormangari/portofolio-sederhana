import Content from "./components/Content";
import Footer from "./components/Footer";
import Navi from "./components/Navi";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./style/landingPage.css";

const App = () => {
  return (
    <>
      <Navi />
      <Content />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Belajar React</h1>
//       </div>
//     );
//   }
// }

// class Timer extends Component {
//   render() {
//     return(
//       <div></div>
//     )
//   }
// }

// function Hai(props) {
//   return (
//     <h1>
//       hai {props.name} {props.age}
//     </h1>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <h1>Belajar React</h1>
//       <Hai name="juniorM" age="20" />
//     </div>
//   );
// }

// export default App;

// COMPONENT FUNCTION AND CLASS WITH JSX

// const Button = () => {
//   return (
//     <>
//       <button>Button</button>
//       <Button2 />
//     </>
//   );
// };
