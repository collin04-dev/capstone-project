import React from "react"
import { Link } from "@reach/router"
import "./layout.scss";
import { StaticQuery, graphql } from "gatsby";
import { CartContextProvider } from "../../shopping.js"
import video from "../media/bannercontentful.mp4"
import outer from "../media/outerwilds.jpg"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


export default function Layout({children}) {

    return (
        
        <body>
        <CartContextProvider>
        <nav class="navbar navbar-dark bg-dark">
            <form class="form-inline my-2 my-lg-0 mr-sm-2">
                <button class="btn btn-outline-light" type="button"><Link to='/'>Home</Link></button>  
            </form>
            
            <button class="btn btn-outline-success ml-auto" type="button"><Link to='/checkout'>Cart</Link></button>
        </nav>


        <div class="jumbotron jumbotron-fluid center">
            <video playsInline autoPlay muted loop><source src={video} type="video/mp4"/>
            <img src = {outer} title="Outer Wilds" /></video>

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

        
        <div id="main-front">
        <div id ="stars2"></div>
        <div id ="stars3"></div>
                
        {children}
    

    </div>     
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Outer Wild Games</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/checkout">Cart</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    
    

    </CartContextProvider>
    </body>      
    
    )
}