import Header from "./header.jsx";
import BodyContent from "./content.jsx";
import Journal from "./journals.jsx";
import Footer from "./footer.jsx";

function App() {
  return (
    <>
      <div className="main">
        <Header />
        {BodyContent.map((content, id) => {
          return (
            <Journal
              key={id}
              {...content}
            />
          );
        })}
        <Footer />
      </div>
    </>
  );
}

export default App;
