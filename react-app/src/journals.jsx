import { Bodycontent } from "./content";

function Journal() {
  return Bodycontent.map((bodycont) => {
    const { Location, LocName, Date, Content, Image } = bodycont;
    return (
      <section className="loc-cont">
        <img src={Image} alt="location-pc" className="loc-pic"/>
        <div className="cont">
            <div className="flex">
                <img src="/public/images/loc-icon.png" alt="loc-icon" className="loc-icon" />
                <h2 className="loc">{Location}</h2>
            </div>
          <h3 className="loc-name">{LocName}</h3>
          <p>{Date}</p>
          <p>{Content}</p>
        </div>
      </section>
    );
  });
}
export default Journal;
