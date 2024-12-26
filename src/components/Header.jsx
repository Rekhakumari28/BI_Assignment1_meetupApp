import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <div className="col-auto">
            <Link
              id="meetupNavBrand"
              className="navbar-brand text-danger "
              to="/"
            >
              Meetup
            </Link>
          </div>

          <div className="col-auto">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </span>
              <input
                onChange={props.searchEventByTitalOrTag}
                className="form-control"
                type="search"
                placeholder="search by title and t.."
                value={props.value}
              />
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
};
export default Header;
