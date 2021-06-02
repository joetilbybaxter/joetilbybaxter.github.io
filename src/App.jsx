import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Testimonials from "./components/testimonials/Testimonials" 
import Contacts from "./components/contacts/Contacts" 



function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
