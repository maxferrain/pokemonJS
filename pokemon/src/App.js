import './App.css';
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import bg1 from "../src/assets/bg1.jpeg"
import bg3 from "../src/assets/bg3.jpeg"

function App() {
  return (
      <>
          <Header title='This is title' descr='This is Description!'/>
          <Layout title='Title1' descr='Descr1' urlBg={bg1} colorBg={null} />
          <Layout title='Title2' descr='Descr2' urlBg={null} colorBg='#e2e2e2'/>
          <Layout title='Title3' descr='Descr3' urlBg={bg3} colorBg={null} />
          <Footer/>
      </>
  );
}

export default App;
