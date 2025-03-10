import Navbar from "./components/Navbar";

import Homepage from "./routes/Homepage";
import Projects from "./routes/Projects";
import Education from "./routes/Education";
import Contact from "./routes/Contact";

import { BrowserRouter, Routes, Route } from "react-router";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index path="/" element={<Homepage />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="education" element={<Education />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
