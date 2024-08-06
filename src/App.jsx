
import NameEmail from './componet/ComA/NameEmail';
import AgeCity from './componet/ComB/AgeBirth';
import PhoneCourse from './componet/ComC/PhoneCourse'
import Proflie from './componet/Proflie/Profile'
import './App.css'

function App() {

  return (
    <div className="box">
      <Proflie />
      <NameEmail name = {"Tulsi"} email = {"tulsidiyora11@gmail.com"} />
      <AgeCity age = {19} date = {"12-11-2005"}/>
      <PhoneCourse phone = {"8799412827"} course = {"Front-End Development"} />
    </div>
  );
}

export default App;
