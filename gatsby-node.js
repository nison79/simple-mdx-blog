// exports.createPages = async function({actions, graphql}) {
//     const {data} = await graphql`
//         query {
//             allMdx(sort: {fields: frontmatter___date, order: DESC}) {
//                 nodes {
//                 frontmatter {
//                     slug
//                 }
//                 id
//                 }
//             }
//         }
//     `

//     //Create Paginated pages for posts

// const postPerPage = 3

// const numPages = Math.ceil(data.allMdx.nodes.length/ postPerPage)


//         Array.from ({ length:numPages }).forEach((_,i) => {
//             actions.createPages({
//                 path:i === 0 ? `/` : `/${i+1}`,
//                 component: require.resolve("./src/templates/allPosts.js"),
//                 context: {
//                     limit:postPerPage,
//                     skip: i * postPerPage,
//                     numPages,
//                     currentPage: i + 1,

//                 }
//             })
//         })

//         //create single blog posts

//         data.allMdx.edges.forEach(nodes => {
//             const slug = nodes.frontmatter.slug
//             const id = nodes.id
//             actions.createPages({
//                 path:slug,
//                 component: require.resolve(`./src/templates/singlePost.js`),
//                 context: {id},
//             })
//         })

// }