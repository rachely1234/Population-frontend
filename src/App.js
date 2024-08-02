import logo from './logo.svg';
import './App.css';
import GetCities from './Componnent/Get.city'

import SearchInput from './Componnent/Search.input'
import store from './App/Store';
import AddCityp from './Componnent/Add.city'
import { Provider } from 'react-redux';



function App() {
  return (
    
    
      <Provider store={store} > 
       <SearchInput/>
    
     <AddCityp/>
      <GetCities/>
      
       </Provider> 
     
      
  );
}

export default App;
