import Header from "./header.jsx";
import BodyContent from "./content.jsx";
import Journal from "./journals.jsx";
import Footer from "./footer.jsx";

function App() {
  return (
    <>
      <div className="main">
        <Header />
        {BodyContent.map((content) => {
          const { Location, LocName, Date, Content, Image } = content;
          return (
            <Journal
              Location={Location}
              LocName={LocName}
              Date={Date}
              Content={Content}
              Image={Image}
            />
          );
        })}
        <Footer />
      </div>
    </>
  );
}

export default App;
