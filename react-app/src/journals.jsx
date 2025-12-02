import locicon from "../public/images/loc-icon.png"

function Journal({Location,Image,Loclink,LocName,Date,Content}) {
  return (
    <section className="loc-cont">
      <img src={Image} alt="location-pc" className="loc-pic" />
      <div className="cont">
        <div className="flex">
          <img
            src={locicon}
            alt="loc-icon"
            className="loc-icon"
          />
          <h2 className="loc">{Location}</h2>
          <a href={Loclink}>view on google maps</a>
        </div>
        <h3 className="loc-name">{LocName}</h3>
        <p>{Date}</p>
        <p>{Content}</p>
      </div>
    </section>
  );
}
export default Journal;
