import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import HomePageTemplate from '../components/HomePageTemplate'
import Layout from '../components/Layout'

const HomePage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <Layout>
      <HomePageTemplate
        title={frontmatter.title}
        title_2={frontmatter.title_2}
        hero={frontmatter.hero}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        heading={frontmatter.heading}
        description={frontmatter.description}
        offerings={frontmatter.offerings}
        testimonials={frontmatter.testimonials}
        location={frontmatter.location}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        title_2
        meta_title
        meta_description
        heading
        description
        hero {
          welcome
          welcome_subtitle
          background_image
        }
        offerings {
          blurbs {
            image
            text
            link
          }
        }
        testimonials {
          author
          quote
        }
        location {
          contact_text
          address_line_1
          address_line_2
          city
          state
          zip
          phone
          fax
          email
        }
      }
    }
  }
`
