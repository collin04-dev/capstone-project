import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Carousel from "react-bootstrap/Carousel"
import AddToCart from "../components/add-to-cart.js"


export default function RecipeTemplate({data}) {

    const game = data.contentfulGames

    return (
        <Layout bodyAttributes={ { class: `product-page ${game.sku}` } }>

            <div class="container title-container">
                <div class="row">
                    <div class="col-8 container-middle">
                        <h2>{game.title}</h2>
                        <div>
                            <button class="btn btn-outline-success ml-auto left" type="button">Add to Cart</button>
                            <p class="card-text price-text"><strong>  $ { game.price } </strong></p>
                            <AddToCart item={ {sku: game.sku, price: game.price, title: game.title} }></AddToCart>
                            
                        </div>
                    </div>
                    <div class="col-4">
                       <img class="gameImg" src ={game.thumbnail.file.url}></img> 
                    </div>
                </div>
            </div>
            
            <div class="container container-middle">
            <Carousel interval = {null} class="casousel-features">
                <Carousel.Item>
                    <h2>Game Decription</h2>
                    {game.description.description}
                </Carousel.Item>
                <Carousel.Item>
                    <h2>Features</h2>
                    {game.addon.addon}
                </Carousel.Item>
            </Carousel>

            <br/>

            <h1>ScreenShots</h1>
            <Carousel fade>
                <Carousel.Item>
                    <img src={game.screenshots[0].file.url} alt={game.title} class="img-thumbnail" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={game.screenshots[1].file.url} alt={game.title} class="img-thumbnail" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={game.screenshots[2].file.url} alt={game.title} class="img-thumbnail" />
                </Carousel.Item>
            </Carousel>

            <br/>

            <h1>Game Specifications</h1>
            
            <p>
                {game.description.description}
            </p>
            </div>

        </Layout>
    )
}

export const query = graphql`
query gameQuery($slug: String!) {
    contentfulGames(title: {eq: $slug}) {
      title,
      description {
        description
      }
      thumbnail {
          file {
              url
          }
      }
      screenshots {
        file {
          url
        }
      }
      addon {
          addon
      }
      price
      sku
    }
  }

`