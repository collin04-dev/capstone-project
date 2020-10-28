import React from "react"
import { Link } from "@reach/router"
import "./layout.scss";
import { StaticQuery, graphql } from "gatsby";
import { CartContextProvider } from "../../shopping.js"
import video from "../media/bannercontentful.mp4"
import outer from "../media/outerwilds.jpg"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCartPlus } from '@fortawesome/free-solid-svg-icons'


export default function Layout({children}) {

    const home = <FontAwesomeIcon icon={faHome} />
    const cart = <FontAwesomeIcon icon={faCartPlus} />

    return (
        
        <body>
        <CartContextProvider>
        <nav class="navbar navbar-dark bg-dark">
            <form class="form-inline my-2 my-lg-0 mr-sm-2">
                <button class="btn btn-outline-light" type="button"><Link to='/'>{home}</Link></button>  
            </form>
            <button class="btn btn-outline-success ml-auto" type="button"><Link to='/checkout'>{cart}</Link></button>
        </nav>

        {/*Video In Banner*/}
        <div class="jumbotron jumbotron-fluid center">
            <video playsInline autoPlay muted loop><source src={video} type="video/mp4"/>
            <img src = {outer} title="Outer Wilds" /></video>
            <div class="container">
                <div style={{ maxWdith: '800px', margin: '0 auto'}}>
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
        {/*Main Star Animation*/}
        <div id="main-front">
        <div id ="stars2"></div>
        <div id ="stars3"></div>      
        {children}
    </div>     
    
    {/*Bottom NavBar*/}
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