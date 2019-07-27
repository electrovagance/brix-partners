import React from 'react'
import { Link } from 'gatsby'
import { Linkedin, Twitter } from 'react-feather'

import Logo from '../../assets/img/bp-logo-footer.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>

        <div className='columns'>

          <div className='column'>
            <Link to='/'>
              <img src={Logo} alt='Home' width='200' />
            </Link>
          </div>
          <div className='column'>
            <Link to='/kanzlei'>
              <h4 className='title is-4'> Kanzlei</h4>
            </Link>
            <Link to='/partner'>
              <h5 className='subtitle is-6'>Partner</h5>
            </Link>
            <Link to='/mitarbeiter'>
              <h5 className='subtitle is-6'>Mitarbeiter</h5>
            </Link>
            <h4 className='title is-4'> Leistungs&shy;umfang</h4>
            <Link to='/laufende-steuerberatung'>
              <h5 className='subtitle is-6'>Laufende Steuerberatung</h5>
            </Link>
            <Link to='/buchfuehrung-und-bilanzierung'>
              <h5 className='subtitle is-6'>Buchführung und Bilanzierung</h5>
            </Link>
            <Link to='/gutachterliche-taetigkeiten'>
              <h5 className='subtitle is-6'>Gutachterliche Tätigkeiten</h5>
            </Link>
            <Link to='/unternehmerliche-realisierung'>
              <h5 className='subtitle is-6'>Unternehmerliche Realisierung</h5>
            </Link>
            <Link to='/unternehmungsnachfolge'>
              <h5 className='subtitle is-6'>Unternehmens&shy;nachfolge</h5>
            </Link>
            <Link to='/erbschafts-und-schenkungsplanung'>
              <h5 className='subtitle is-6'>Erbschafts- und Schenkungsplanung</h5>
            </Link>
          </div>

          <div className='column'>
            <Link to='/news-und-events'>
              <h4 className='title is-4'> News & Events</h4>
            </Link>
            <Link to='/publikationen'>
              <h5 className='subtitle is-6'>Publikationen</h5>
            </Link>
            <Link to='/veranstaltungen'>
              <h5 className='subtitle is-6'>Veranstaltungen</h5>
            </Link>
            <Link to='/vlogs'>
              <h5 className='subtitle is-6'>Vlogs</h5>
            </Link>
            <Link to='/karriere'>
              <h4 className='title is-4'>Karriere</h4>
            </Link>
            <Link to='/berufserfahrende'>
              <h5 className='subtitle is-6'>Berufserfahrende</h5>
            </Link>
            <Link to='/studierende-und-absolventen'>
              <h5 className='subtitle is-6'>Studierende & Absolventen</h5>
            </Link>
            <Link to='/alumni'>
              <h5 className='subtitle is-6'>Alumni</h5>
            </Link>
          </div>

          <div className='column'>
            <Link to='/disclaimer'>
              <h5 className='subtitle is-6'>Disclaimer</h5>
            </Link>
            <Link to='/impressum'>
              <h5 className='subtitle is-6'>Impressum</h5>
            </Link>
            <Link to='/datenschutzerklaerung'>
              <h5 className='subtitle is-6'>Datenschutz&shy;erklärung</h5>
            </Link>
            <a href='https://twitter.com/Brix_Partners' target='_blank' >
              <Twitter size={50} color='grey' />
            </a>
            <a href='https://www.linkedin.com/company/brix-partners-llc/about/' target='_blank' >
              <Linkedin size={50} color='grey' />
            </a>
            {/* <a href='https://www.xing.com/companies/brix+partnersllc' target='_blank' >
              <img src={XING} alt='XING' width='50' />
            </a> */}
          </div>
        </div>

        <h4 className='has-text-centered'>© 2019 Brix + Partners LLC. All Rights Reserved.</h4>

      </div>
    </footer>
  )
}

export default Footer
