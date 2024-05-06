import './App.css';
import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main.js';
import Footer from'./Footer.js';
<head>
<meta name="description" content="This is our Little Lemon Restaurant."/> 
<meta name="og:title" content="Little Lemon Restaurant"/>
<meta name="og:description" content="Our restaurant serves various food items."/>
<meta name="og:image" content=""/>

</head>


function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <Main/>
    <Footer/>

    </>
  );
}

export default App;
