import '@styles/global.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <div className='navcontainer'>
        <div className='nav'>
            Noah.dev
        </div>
        <div className='nav'>
        <FontAwesomeIcon
        icon={faBarsStaggered}
        className="fas fa-bars-sort"
        style={{ color: "black", fontSize: 30 }}
      />
        </div>
    </div>
  )
}

export default Nav
