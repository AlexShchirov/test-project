import './App.css';
import { UserList } from './features/filteredUsers/components/UserList/UserList';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Frontend test task</h1>
      <h2 className="text-xl font-bold mb-4">Module 1</h2>
      <UserList />
    </div>
  );
}

export default App;
