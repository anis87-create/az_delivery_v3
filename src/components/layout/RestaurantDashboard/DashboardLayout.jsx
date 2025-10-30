import { useState } from 'react';
import Sidebar from './Sidebar';
import DashboardNavbar from './DashboardNavbar';
import RestaurantDashboard from '../../../pages/RestaurantDashboard/index';
import MenuManagement from '../../../pages/RestaurantDashboard/MenuManagement';
import OrdersManagement from '../../../pages/RestaurantDashboard/OrdersManagement';
import SettingsManagement from '../../../pages/RestaurantDashboard/SettingsManagement';
import {  getRestaurantsByOwner } from '../../../store/features/restaurantSlice';
import { useDispatch, useSelector } from 'react-redux';

const DashboardLayout = ({ 
  restaurantName = "Mon Restaurant", 
  restaurantEmail = "restaurant@example.com",
  restaurantLogo = null 
}) => {
  const [currentSection, setCurrentSection] = useState('Dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
    const {currentUser} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const restaurant = useSelector(state => currentUser ? getRestaurantsByOwner(state, currentUser.id) : null);
  const renderCurrentSection = () => {
    switch(currentSection) {
      case 'Dashboard':
        return <RestaurantDashboard />;
      case 'Menu Management':
        return <MenuManagement />;
      case 'Orders':
        return <OrdersManagement />;
      case 'Settings':
        return <SettingsManagement />;
      default:
        return <RestaurantDashboard />;
    }
  };
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar 
        restaurantName={restaurant?.name || restaurantName}
        restaurantLogo={restaurantLogo}
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 lg:ml-64">
        {/* Navbar */}
        <DashboardNavbar 
          restaurantName={restaurant?.name || restaurantName}
          restaurantEmail={currentUser?.email|| restaurantEmail}
          restaurantLogo={restaurantLogo}
          currentSection={currentSection}
          onMenuClick={() => setSidebarOpen(true)}
        />

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          {renderCurrentSection()}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;