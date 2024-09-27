export async function postBook(req, res) {
        // this is fine 
        // const title = req.body.title
        // const author = req.body.author
    
        const {title, author, description, quote, released, img_url} = req.body
        try {
    
            const result = await db.query(`INSERT INTO books (title, author, description, quote, released, img_url) VALUES ($1, $2, $3, $4, $5, $6)`, [title, author, description, quote, released, img_url])
    
    
            res.status(200).json({success: result})
    
        } catch (error) {
            res.status(500).json(`${e.name}: ${e.message}`)
        }
}