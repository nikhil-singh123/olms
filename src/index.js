import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBook from "./pages/AddBook";
import RemoveBook from "./pages/RemoveBook";
import ListIssue from "./pages/ListIssue";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddBook />}>
          <Route index element={<RemoveBook />} />
          <Route path="listissue" element={<ListIssue />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);