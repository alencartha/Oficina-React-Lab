import './App.css';

import User from './components/User.js';

const users =[
  {
    name: 'Isa',
    description:'Gosta de sorvete'
  },
  {
    name: 'Monica',
    description:'Gosta de mousse'
  },
  {
    name: 'Cintia',
    description:'Gosta de goiabada'
  }
];

const App=() =>{
  return (
    <div className="App">
      <User name={users[0].name} description={users[0].description}/>  
      <User name={users[1].name}  description={users[1].description} />  
      <User name={users[2].name}  description={users[2].description}/>  
    </div>
  );
}

export default App;
