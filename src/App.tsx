import './App.css';
import { NotificationProvider } from './components/organisms/NotificationProvider';
import { AppRoutes } from './router/routes';

export const App = () => {
  return (
    <>
      <AppRoutes />
      <NotificationProvider />
    </>
  )
  
};

export default App;