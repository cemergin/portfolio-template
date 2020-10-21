import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, author }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    title: defaultTitle,
    description: defaultDescription,
    author: defaultAuthor,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    author: author || defaultAuthor,
  };
  return <Helmet title={seo.title} description={seo.description}></Helmet>;
};

export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

// defaultTitle: title
// titleTemplate
// defaultDescription: description
// siteUrl: url
// defaultImage: image
// twitterUsername
