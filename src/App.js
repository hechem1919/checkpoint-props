import "./App.css";
import image from "./img/Profile.jpg";
import Profile from "./component/Profile/Profile";
function App() {
 
  const handelName = x => alert(x);
  const name='Hechem Ben Ahmed';
  const bios=' developper works with React';
  const work='Developer';
  return (
    <div>
  
        <Profile
          fullname={name}
          bio={bios}
          profession= {work}
          handelName={handelName}
        >
          {image}
        </Profile>
      
    </div>
  );
}
export default App;