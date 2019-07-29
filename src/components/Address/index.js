import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const Address = ({title, subtitle, location}) => {
  return (
    <address className={styles.address}>
      {console.log({subtitle})}
      <p className='is-size-4'>{title}</p>
      <p className='is-size-5'>{subtitle}</p>
      <p className='is-size-5'>{location.address_line_1}</p>
      <p className='is-size-5'>{location.address_line_2}</p>
      <p className='is-size-5'>{location.state}, {location.state} {location.zip}</p>
      <p className='is-size-5'>Phone: <a href='tel:+12129831550'>{location.phone}</a></p>
      <p className='is-size-5'>Fax: <a href='fax:+121983-1554'>{location.fax}</a></p>
      <p className='is-size-5'>Email: <a href='emailto:info@brixcpa.com'>{location.email}</a></p>
    </address>
  )
}

export default Address

Address.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  location: PropTypes.object,
}

