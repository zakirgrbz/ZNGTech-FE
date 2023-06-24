import { Outlet } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import { UserContextProvider } from './contexts/UserContext';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <NavigationBar />
        <Outlet />
        <Footer />
      </UserContextProvider>
    </div>
  );
}
export default App;