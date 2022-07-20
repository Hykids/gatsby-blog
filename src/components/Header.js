import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import '../css/header.css'

const Header = ({ siteTitle }) => (
  <header className="header">
    <div>
      <div className="header-wrapper">
        <h1>
          <Link
            to="/">
            {siteTitle}
          </Link>
        </h1>
        <div>
          <nav>
            <ul className="header-list">
              <li>
                <Link style={{ color: `burlywood`, textDecoration: "none", }} to={'/'}>
                  Home
                </Link>
              </li>

              <li              >
                <Link style={{ color: `burlywood`, textDecoration: "none", }} to={'/about'}>
                  About
                </Link>
              </li>

            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
)
Header.propTypes = {
  siteTitle: PropTypes.string,
}
Header.defaultProps = {
  siteTitle: ``,
}
export default Header