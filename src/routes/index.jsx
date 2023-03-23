import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostCard from '../components/PostCard';
import PostComents from '../components/PostComments';

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<PostCard />} />
          <Route exact path="/post/:id" element={<PostComents />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;