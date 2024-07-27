import './App.css';
import { store } from './store';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import TheLastest from "./pages/TheLastest"
import Layout from './pages/Layout';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import TheAcolyte from './pages/TheAcolyte';
import TheBadBatch from './pages/TheBadBatch';
import TheHighRepublic from './pages/TheHighRepublic';
import QuizzesPolls from './pages/QuizzesPolls';
import BookComic from './pages/BookComic';
import Video from './pages/Video';
import WeekStarWar from './pages/WeekStarWar';
import Flims from './pages/Flims';
import Series from './pages/Series';
import TheAcolytes from './pages/TheAcolytes';

function App() {
  return (
   <Provider store={store} >
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/TheLastest' element={<TheLastest/>}/>
      <Route path='/the-acolyte' element={<TheAcolyte/>}/>
      <Route path='/the-bad-batch' element={<TheBadBatch/>}/>
      <Route path='/the-high-republic' element={<TheHighRepublic/>}/>
      <Route path='/quizzes-polls' element={<QuizzesPolls/>}/>
      <Route path='/books-comics' element={<BookComic/>}/>
      <Route path='/video' element={<Video/>}/>
      <Route path='/week-star-war' element={<WeekStarWar/>}/>
      <Route path='/flims' element={<Flims/>}/>
      <Route path='/series' element={<Series/>}/>
      <Route path='/the-acolytes' element={<TheAcolytes/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
   </Provider>
  );
}

export default App;
