import Index from './Pages/Index/Index'
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Category from "./Pages/Category/Category";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import BlogBox from "./Pages/blogBox/BlogBox";
import ProjectPage from "./Pages/ProjectBox/ProjectPage";

let routes = [
    {path: '/', element: <Index />},
    {path: '/contact', element: <Contact />},
    {path: '/about', element: <About />},
    {path: '/category', element: <Category />},
    {path: '/register', element: <Register />},
    {path: '/login', element: <Login />},
    {path: '/blog/*', element: <BlogBox />},
    {path: '/project/*', element: <ProjectPage />}
]

export default routes