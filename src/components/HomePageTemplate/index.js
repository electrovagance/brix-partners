import React from 'react'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import Address from '../Address'
import Map from '../Map'
import PropTypes from 'prop-types'

const HomePageTemplate = ({
  title,
  title_2,
  hero,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
  location,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='hero is-primary is-bold is-medium'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 className='title is-2'>
                  {hero.welcome}
                </h1>
                <h3 className='subtitle is-4'>
                  {hero.welcome_subtitle}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='section section--gradient'>
      <div className='container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <div>
                  {/* Kanzleiprofil + Kurzbeschreibung */}
                  <h3 className='has-text-weight-semibold is-size-2'>
                    {heading}
                  </h3>
                  <p>{description}</p>
                  <Offerings gridItems={offerings.blurbs} />
                  <h2 className='has-text-weight-semibold is-size-2 has-text-centered'>Erfahrungs&shy;berichte</h2>
                  <Testimonials testimonials={testimonials} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Contact us */}
    <section className='section section--gradient'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>

            <div className='columns is-tablet'>
              <div className='column is-half-tablet'>
                <Map />
              </div>
              <div className='column is-centered'>
                <Address title={title} title_2={title_2} location={location} />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  title_2: PropTypes.string,
  hero: PropTypes.object,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,
  location: PropTypes.array,
}

export default HomePageTemplate
