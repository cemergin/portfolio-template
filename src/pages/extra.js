import React from "react";
import { Link, graphql } from "gatsby";

const ExtraPage = ({ data }) => {
  const { nodes: posts } = data.allMdx;
  return (
    <div>
      <h1>Awesome MDX Extras</h1>
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
  query extraIndex {
    allMdx(filter: { frontmatter: { post_type: { eq: "extra" } } }) {
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

export default ExtraPage;
