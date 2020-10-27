import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Carousel from "react-bootstrap/Carousel"
import AddToCart from "../components/add-to-cart.js"
import { Helmet } from "react-helmet"
import Tabs from "react-bootstrap/Tabs"
import Tab  from "react-bootstrap/Tab"
import { firestore } from  "../../firebase.js"
import Comments from "../components/comments.js"


export default function GameTemplate({data}) {

    const game = data.contentfulGames
    const [comments, setComments] = useState([])

    useEffect(() => {
        firestore.collection(`comments`).orderBy(`Created`, `desc`).onSnapshot(snapshot => {
          const posts = snapshot.docs
            .filter(doc => doc.data().Page === game.title)
            .map(doc => {
              return { id: doc.id, ...doc.data() }
            })
          setComments(posts)
        })
      }, [game] )
    

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
                        
                        <hr/><h2 class="card-text price-text display text-center"><em>  $ { game.price } </em></h2>
                        <div><AddToCart item={ {sku: game.sku, price: game.price, title: game.title} }></AddToCart></div>
                    </div>
                    
                    <div class="col-sm-4 text-center">
                       <img class="gameImg" src ={game.thumbnail.file.url}></img> 
                    </div>
                </div>
            </div>
            
            <div class="container container-middle">

            <Tabs defaultActiveKey="description" id="mainGameInfo">
                <Tab eventKey="description" title="Description">
                    <div>{game.description.description}</div>
                </Tab>
                <Tab eventKey="features" title="Features">
                    <div>{game.addon.addon}</div>
                </Tab>
                <Tab eventKey="specs" title="Game Specifications">
                    <div>{game.Specifications.Specifications}</div>
                </Tab>
            </Tabs>
            
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

            <hr/>
            
            <h1 class="text-center trailerHeader">Trailer</h1>
            <div class=".trailer">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe title="Embeds Page" className="embed-responsive-item img-thumbnail" src= {game.youtubelink}
                allowfullscreen></iframe>
            </div>
            </div>

            <br/>


            <hr/>

            <h1 class="text-center">See What Customers Say</h1>

            <Comments comments={comments} page={game.title} />

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
      Specifications {
          Specifications
      }
      price
      sku
      youtubelink
      
    }
  }

`