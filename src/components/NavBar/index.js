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
              <a className='navbar-link is-arrowless'>
                <Link to='/kanzlei'>
                  Kanzlei
                </Link>
              </a>
              <div className='navbar-dropdown is-boxed'>
                <a className='navbar-item'>
                  <Link to='/partner'>
                    Partner
                  </Link>
                </a>
                <a className='navbar-item'>
                  <Link to='/mitarbeiter'>
                    Mitarbeiter
                  </Link>
                </a>
              </div>
            </div>

            <div className='navbar-item has-dropdown is-hoverable'>
              <a className='navbar-link is-arrowless'>
                Leistungsumfang
              </a>
              <div className='navbar-dropdown is-boxed'>
                <a className='navbar-item'>
                  <Link to='/laufende-steuerberatung'>
                    Laufende Steuerberatung
                  </Link>
                </a>
                <a className='navbar-item'>
                  <Link to='/buchfuehrung-und-bilanzierung'>
                    Buchführung und Bilanzierung
                  </Link>
                </a>
                <a className='navbar-item'>
                  <Link to='/gutachterliche-taetigkeiten'>
                    Gutachterliche Tätigkeiten
                  </Link>
                </a>
                <a className='navbar-item'>
                  <Link to='/unternehmerliche-realisierung'>
                    Unternehmerliche Realisierung
                  </Link>
                </a>
                <a className='navbar-item'>
                  <Link to='/unternehmungsnachfolge'>
                    Unternehmensnachfolge
                  </Link>
                </a>
                <a className='navbar-item'>
                  <Link to='/erbschafts-und-schenkungsplanung'>
                    Erbschafts- und Schenkungsplanung
                  </Link>
                </a>
              </div>
            </div>

            <div className='navbar-item has-dropdown is-hoverable'>
              <a className='navbar-link is-arrowless'>
                <Link to='/news-und-events'>
                  News & Events
                </Link>
              </a>
              <div className='navbar-dropdown is-boxed'>
                <a className='navbar-item'>
                  <Link to='/newsletter'>
                    Newsletter
                  </Link>
                </a>
                <a className='navbar-item'>
                  <Link to='/publikationen'>
                    Publikationen
                  </Link>
                </a>
                <a className='navbar-item'>
                  <Link to='/veranstaltungen'>
                    Veranstaltungen
                  </Link>
                </a>
                <a className='navbar-item'>
                  <Link to='/vlogs'>
                    Vlogs
                  </Link>
                </a>
              </div>
            </div>

            <div className='navbar-item has-dropdown is-hoverable'>
              <a className='navbar-link is-arrowless'>
                <Link to='/karriere'>
                  Karriere
                </Link>
              </a>
              <div className='navbar-dropdown is-boxed'>
                <a className='navbar-item'>
                  <Link to='/berufserfahrene'>
                    Berufserfahrene
                  </Link>
                </a>
                <a className='navbar-item'>
                  <Link to='/berufseinsteiger'>
                    Berufseinsteiger
                  </Link>
                </a>
                <a className='navbar-item'>
                  <Link to='/studierende-und-absolventen'>
                    Studierende und Absolventen
                  </Link>
                </a>
                <a className='navbar-item'>
                  <Link to='/alumni'>
                    Alumni
                  </Link>
                </a>
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
