module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/986b4b394cbc474980ee02ddfc7f4791?v=c2a0cb3a2d6941238bf07df62fd881f2"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/406c595110ae49e0a80f90ea07ab9ae5?v=dea0f52f7a5747b3ae220b8fd8080329"
            }
        }
    ],
}
