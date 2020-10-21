import React from "react";
import { Link, graphql } from "gatsby";

const PortfolioPage = ({ data }) => {
  const { nodes: posts } = data.allMdx;
  return (
    <div>
      <h1>Awesome MDX Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const pageQuery = graphql`
  query portfolioIndex {
    allMdx(filter: { frontmatter: { post_type: { eq: "portfolio" } } }) {
      nodes {
        frontmatter {
          date
          path
          title
          post_type
        }
        fields {
          slug
        }
      }
    }
  }
`;

export default PortfolioPage;
