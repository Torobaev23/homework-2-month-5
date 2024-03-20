import {Routes, Route} from 'react-router-dom'

import './App.css'
import Layout from './components/Layout'
import PostsPage from './pages/PostsPage'
import SinglePostPage from './pages/SinglePostPage'
import Create from './pages/CreatePage.jsx'


function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='posts' element={<PostsPage/>}/>
                    <Route path='posts/:postId' element={<SinglePostPage/>}/>
                    <Route path='create' element={<Create/>}/>

                    <Route path='*' element={<h4>Ошибка 404: Такой страницы не существует</h4>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App