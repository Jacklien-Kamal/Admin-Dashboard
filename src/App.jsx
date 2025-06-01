
// App.jsx
// import { Routes, Route } from 'react-router-dom';
// import CreateProduct from './pages/Servants/CreateProduct';
import { useLocalization } from './localization/LocalizationContext';
// import UserList from './pages/users/users';
// import Dashboard from './pages/dashboard';
// import Sidebar from './components/SideBar/Sidebar';
// import TopBar from './components/TopBar/TopBar';
// import UserDetails from './pages/users/userDetails';
// import { LoaderWrapper } from './context/loader';
// import FixedBottomNavigation from './pages/messages/messages';
// import ServantsList from './pages/Servants/servsnts';
// import ServantDetails from './pages/Servants/servantDEtails';
export default function App() {
  const { direction } = useLocalization();
  return (
    <div dir={direction} className="flex h-screen">
      {/* <Sidebar />
      <div className="bg-secondary-body dark:bg-primary-body dark:text-white flex-1 flex flex-col">
        <TopBar />
        <LoaderWrapper>

        <main className=" p-4 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/servants" element={<ServantsList />} />
            <Route path="/users/create" element={<CreateUser />} />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route path="/servants/:id" element={<ServantDetails />} />
            <Route path="/products/create" element={<CreateProduct />} />
            <Route path="/messages" element={<FixedBottomNavigation />} />
          </Routes>
        </main>
        </LoaderWrapper> */}
      {/* </div> */}
      hellop
    </div>
  );
}







// pages/Products/ProductList.jsx (similar structure to UserList)
// pages/Products/CreateProduct.jsx (similar structure to CreateUser)
