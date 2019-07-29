import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import HomePageTemplate from '../components/HomePageTemplate'
import Layout from '../components/Layout'

const HomePage = ({data}) => {
  const {frontmatter} = data.markdownRemark
  // saved image from GraphQL seperately from frontmatter query
  const hero_background = data.heroImage

  return (
    <Layout>
      <HomePageTemplate
        title={frontmatter.title}
        firm_subtitle={frontmatter.firm_subtitle}
        hero_title={frontmatter.hero_title}
        hero_subtitle={frontmatter.hero_subtitle}
        hero_background={hero_background}
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
    heroImage: PropTypes.object,
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
    heroImage: file(relativePath: { eq: "jonathan-pease-1nlhZy86uPU-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2500, grayscale: true) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
