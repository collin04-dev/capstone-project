import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from 'react-router-dom';

export default function Home({data}) {
  return (

  <Layout>
    <h3>Best Sellers</h3>

    <br/>

    {data.allContentfulGames.nodes.map((node, index) => (
      <div class="card text-white bg-dark mb-3">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src={ node.thumbnail.file.url } class="card-img" alt={ node.name } data-holder-rendered="true"/>
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">{ node.title }</h5>
              <p class="card-text">{ node.summary.summary }</p>
              <div class="btn-group">
                <a href={node.title} class="btn btn-outline-success">View Product</a>
                <p class="card-text price-text"><strong>$ { node.price } </strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}

  </Layout>

  )
}

export const query = graphql`
query MyQuery {
  allContentfulGames(filter: {node_locale: {eq: "en-US"}}) {
    nodes {
      title
      summary {
        summary
      }
      thumbnail {
        file {
          url
        }
      }
      price
    }
  }
}





`
