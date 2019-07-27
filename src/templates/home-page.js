import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import HomePageTemplate from '../components/HomePageTemplate'
import Layout from '../components/Layout'

const HomePage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <Layout>
      <HomePageTemplate
        title={frontmatter.title}
        hero_title={frontmatter.hero_title}
        hero_subtitle={frontmatter.hero_subtitle}
        featured_image={frontmatter.featured_image}
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
        firm_subtitle
        meta_title
        meta_description
        heading
        description
        hero_title
        hero_subtitle
        featured_image  {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
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
