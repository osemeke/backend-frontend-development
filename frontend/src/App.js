import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import PrivateLayout from "./layouts/PrivateLayout";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <Router>
    <div className="App">
      <Routes>
          <Route path='/*' element={<PublicLayout />} />
          <Route path='/admin/*' element={<PrivateLayout />} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
