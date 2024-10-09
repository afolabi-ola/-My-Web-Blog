import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import useStickyNav from '../hooks/useStickyNav';

function AppLayout() {
  const { isSticky, secondSectionRef } = useStickyNav();

  return (
    <div>
      <NavBar isSticky={isSticky} />
      <Outlet context={{ secondSectionRef }} />
    </div>
  );
}

export default AppLayout;
