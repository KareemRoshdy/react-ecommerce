import { Link } from "react-router-dom";

const TopHeader = ({ setToggle }) => {
  return (
    <div className="top-header">
      <div className="top-header-menu" onClick={() => setToggle(true)}>
        <i className="bi bi-list"></i>
      </div>
      <Link to="/">
        <div className="top-header-logo">
          <i className="bi bi-basket2"></i>
          هابي ستور
        </div>
      </Link>
      <div className="top-header-text">اهلا وسهلا بكم</div>
      <div className="top-header-phone">
        123-456-789
        <i className="bi bi-telephone"></i>
      </div>
    </div>
  );
};

export default TopHeader;
