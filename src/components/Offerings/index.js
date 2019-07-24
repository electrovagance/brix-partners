import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Offerings = ({ gridItems }) => (
  <div className='columns is-multiline'>
    {gridItems.map(item => (
      <div key={item.image} className='column' style={{borderRadius: '5px'}}>
        <section className='section'>
          <Link to={item.link}>
            <p className='has-text-centered has-text'>
              <img alt='' src={item.image} />
            </p>
            <p className='has-text-weight-semibold has-text-centered'>{item.text}</p>
          </Link>
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
