import React from 'react'
import {Link, graphql, StaticQuery} from 'gatsby'
// import SearchBox from '../SearchBox's
import Logo from '../../assets/img/bp-logo-header.png'

const NavBar = ({toggleNavbar, isActive}) => (
  <StaticQuery
    query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
    render={data => (
      <nav className='navbar is-fixed-top is-spaced' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <img src={Logo} alt='Home' height='200' />
          </Link>
          <a
            role='button'
            arial-label='menu'
            aria-expanded='false'
            className={`navbar-burger ${isActive ? 'is-active' : ''}`}
            data-target='navMenu'
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </a>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>
          <div className='navbar-end'>
            <div className='navbar-item has-dropdown is-hoverable'>
              <Link to='/kanzlei'
                className='navbar-link is-arrowless'>
                  Kanzlei
              </Link>
              <div className='navbar-dropdown is-boxed'>
                <Link to='/partner'
                  className='navbar-item'>
                    Partner
                </Link>
                <Link to='/mitarbeiter'
                  className='navbar-item'>
                    Mitarbeiter
                </Link>
              </div>
            </div>

            <div className='navbar-item has-dropdown is-hoverable'>
              <Link className='navbar-link is-arrowless'
                to='/'>
                Leistungsumfang
              </Link>
              <div className='navbar-dropdown is-boxed'>
                <Link className='navbar-item'
                  to='/laufende-steuerberatung'>
                    Laufende Steuerberatung
                </Link>
                <Link className='navbar-item'
                  to='/buchfuehrung-und-bilanzierung'>
                    Buchführung und Bilanzierung
                </Link>
                <Link className='navbar-item'
                  to='/gutachterliche-taetigkeiten'>
                    Gutachterliche Tätigkeiten
                </Link>
                <Link className='navbar-item'
                  to='/unternehmerliche-realisierung'>
                    Unternehmerliche Realisierung
                </Link>
                <Link className='navbar-item'
                  to='/unternehmungsnachfolge'>
                    Unternehmensnachfolge
                </Link>
                <Link className='navbar-item'
                  to='/erbschafts-und-schenkungsplanung'>
                    Erbschafts- und Schenkungsplanung
                </Link>
              </div>
            </div>

            <div className='navbar-item has-dropdown is-hoverable'>
              <Link className='navbar-link is-arrowless'
                to='/news-und-events'>
                  News & Events
              </Link>
              <div className='navbar-dropdown is-boxed'>
                <Link className='navbar-item'
                  to='/newsletter'>
                    Newsletter
                </Link>
                <Link className='navbar-item'
                  to='/publikationen'>
                    Publikationen
                </Link>
                <Link className='navbar-item'
                  to='/veranstaltungen'>
                    Veranstaltungen
                </Link>
                <Link className='navbar-item'
                  to='/vlogs'>
                    Vlogs
                </Link>
              </div>
            </div>

            <div className='navbar-item has-dropdown is-hoverable'>
              <Link className='navbar-link is-arrowless'
                to='/karriere'>
                  Karriere
              </Link>
              <div className='navbar-dropdown is-boxed'>
                <Link className='navbar-item'
                  to='/berufserfahrene'>
                    Berufserfahrene
                </Link>
                <Link className='navbar-item'
                  to='/berufseinsteiger'>
                    Berufseinsteiger
                </Link>
                <Link className='navbar-item'
                  to='/studierende-und-absolventen'>
                    Studierende und Absolventen
                </Link>
                <Link className='navbar-item'
                  to='/alumni'>
                    Alumni
                </Link>
              </div>
            </div>

            <div className='navbar-item'>
              <div className='field is-grouped'>
                <p className='control'>
                  <Link
                    className='button is-primary is-outlined'
                    to='/contact'>
                            ENG
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )}
  />
)

export default NavBar
