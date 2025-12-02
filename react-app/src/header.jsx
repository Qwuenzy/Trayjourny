import logo from "../public/images/world.png"

function Header(){
    return (
        <div className="header-div">
            <img src={logo} className="logo" />
          <h1 className="header-text">my travel journal.</h1>
        </div>
    )
}
export default Header;