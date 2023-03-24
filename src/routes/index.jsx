import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostCard from '../components/PostCard';
import PostComents from '../components/PostComments';
import UserCard from '../components/UserCard';

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<PostCard />} />
          <Route exact path="/post/:id" element={<PostComents />} />
          <Route exact path="/user/:id" element={<UserCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;