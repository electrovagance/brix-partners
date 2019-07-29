import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styles from './styles.module.scss'

const Offerings = ({ gridItems }) => (
  <div className='columns is-centered is-mobile is-multiline'>
    {gridItems.map(item => (
      <div key={item.image} className='column is-full-mobile is-half-tablet is-one-third-desktop is-one-quarter-fullhd' >
        <section className='section'>
          <div className={styles.changeColorOnHover}>
            <Link to={item.link}>
              <p className='has-text-centered has-text'>
                <img alt={item.text} src={item.image} />
              </p>
              <p className={`has-text-weight-semibold has-text-centered has-text-grey`}>{item.text}</p>
            </Link>
          </div>
        </section>
      </div>
    ))}
  </div>
)

Offerings.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default Offerings
