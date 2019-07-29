import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const Address = ({title, subtitle, location}) => {
  return (
    <address className={styles.address}>
      <p>{title}</p>
      <p>{subtitle}</p>
      <p>{location.address_line_1}</p>
      <p>{location.address_line_2}</p>
      <p>{location.state}, {location.state} {location.zip}</p>
      <p>Phone: <a href='tel:+12129831550'>{location.phone}</a></p>
      <p>Fax: <a href='fax:+121983-1554'>{location.fax}</a></p>
      <p>Email: <a href='emailto:info@brixcpa.com'>{location.email}</a></p>
    </address>
  )
}

export default Address

Address.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  location: PropTypes.object,
}

