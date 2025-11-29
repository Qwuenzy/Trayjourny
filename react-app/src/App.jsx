import Header from "./header"
import Journal from "./journals";
import Footer from "./footer";

function App() {
  return (
    <>
      <div className="main flex-col">
        <Header />
        <Journal />
        <Footer />
      </div>
    </>
  );
}

export default App;
