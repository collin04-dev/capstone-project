import React from "react"
import { Link } from "@reach/router"
import "./layout.scss";
import { StaticQuery, graphql } from "gatsby";
import { CartContextProvider } from "../../shopping.js"
import ReactPlayer from "react-player"
import video from "../media/bannercontentful.mp4"
import outer from "../media/outerwilds.jpg"


export default function Layout({children}) {

    return (
        <>
        <CartContextProvider>
        <nav class="navbar navbar-dark bg-dark">
            <form class="form-inline my-2 my-lg-0 mr-sm-2">
                <button class="btn btn-outline-light" type="button"><Link to='/'>Home</Link></button>  
            </form>
            
            <button class="btn btn-outline-success ml-auto" type="button"><Link to='/checkout'>Cart</Link></button>
        </nav>


        <div class="jumbotron jumbotron-fluid center">
            <div class="bannerVideo">
            <ReactPlayer url={video} playing="true" playsInline autoPlay="true" muted loop />
            </div>
            

            <div class="container">
                <div style={{ maxWdith: '800px', margin: '0 auto'}}>
                    

                    {/*<h1>My First React Site</h1>*/}

                    <StaticQuery
                    query={graphql`
                    query HeadingQuery {
                        site {
                            siteMetadata {
                                title
                                description
                            }
                        }
                    }
                    `}
                    render={data => (
                    <header>
                        <h1 class="display-4">{data.site.siteMetadata.title}</h1>
                        <h4 class="muted"><em>{data.site.siteMetadata.description}</em></h4>
                    </header>
                    )}
                    />

                </div>
            </div>
        </div>

        <body>
        <div id="main-front">

        <div id="stars"></div>
        <div id ="stars2"></div>
                
        {children}
    
                
    <nav class="navbar sticky-bottom navbar-expand-lg navbar-light bg-dark">
        <a class="navbar-brand" href="#">Outer Wilds Games</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Products</a>
            </li>
            </ul>
        </div>
    </nav>
    </div>
    </body>

    </CartContextProvider>
            
        </>
    )
}