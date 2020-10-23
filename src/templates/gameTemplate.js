import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Carousel from "react-bootstrap/Carousel"
import AddToCart from "../components/add-to-cart.js"
import { Helmet } from "react-helmet"


export default function gameTemplate({data}) {

    const game = data.contentfulGames
    

    return (
        <>
        <Helmet bodyAttributes={ { class: `product-page ${game.sku}` } }>
          <title>{game.title}</title>
          <meta name="description" value="Come and See the Game we have!"/>
        </Helmet>

        <Layout bodyAttributes={ { class: `product-page ${game.sku}` } }>

            <div class="container title-container">
                <div class="row">
                    <div class="col-sm-8 container-middle carousel-inner">
                        <h1 id="gameTitle" class="display">{game.title}</h1>  
                        <h2 class="card-text price-text display"><em>  $ { game.price } </em></h2>
                        <hr/>
                        <div><AddToCart item={ {sku: game.sku, price: game.price, title: game.title} }></AddToCart></div>
                    </div>
                    
                    <div class="col-sm-4 text-center">
                       <img class="gameImg" src ={game.thumbnail.file.url}></img> 
                    </div>
                </div>
            </div>
            
            <div class="container container-middle">
            <Carousel interval = {null} class="casousel-features">
                <Carousel.Item>
                    <h2 class="text-center">Game Decription</h2>
                    <div class="text-left">{game.description.description}</div>
                </Carousel.Item>
                <Carousel.Item>
                    <h2 class="text-center">Features</h2>
                    <div class="text-left">{game.addon.addon}</div>
                </Carousel.Item>
            </Carousel>

            <br/>

            <h1 class="text-center">ScreenShots</h1>
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

            <h1 class="text-center">Game Specifications</h1>
            
            <p>
                {game.description.description}
            </p>
            </div>

        </Layout>
        </>
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