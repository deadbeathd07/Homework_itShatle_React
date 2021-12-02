import './App.css';
import HelloReact from './HelloReact/HelloReact';
import UserList from './UserList';
import ComposableUser from './ComposableUser';

function App() {
  let arr = [
    {
      id: '00', 
      name: 'Cler'
    },
    {
      id: '01', 
      name: 'Nastya'
    }, 
    {
      id: '02', 
      name: 'Vlad'
    }, 
    {
      id: '03', 
      name: 'Elena'
    }, {
      id: '04', 
      name: 'Vladislav'
    }, 
    {
      id: '05', 
      name: 'Anna'
    }
  ]

  return (
    <div className="App">
      <HelloReact />
      <div>
        <UserList arr = {arr} />
      </div>
        <ComposableUser>{arr}</ComposableUser>
    </div>
  );
}

export default App;
