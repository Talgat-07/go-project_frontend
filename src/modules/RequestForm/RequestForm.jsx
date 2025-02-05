import { useLocation } from 'react-router-dom';
import { HomeForm } from './components/HomeForm/HomeForm';
import { PagesForm } from './components/PagesForm/PagesForm';

export const RequestForm = () => {
  let navigation = useLocation();

  if (navigation.pathname === '/') return <HomeForm />;

  return <PagesForm />;
};
