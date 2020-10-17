const path = require("path")

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
  
    const gameTemplate = path.resolve(`src/templates/gameTemplate.js`)
  
    return graphql(` 
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
            sku
          }
        }
      }


    `).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }
  
      result.data.allContentfulGames.nodes.forEach((node) => {
        createPage({
            path: node.title,
            component: gameTemplate,
            context: {
                slug: node.title
            }, // additional data can be passed via context
        })
      })
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error);
    });
  }