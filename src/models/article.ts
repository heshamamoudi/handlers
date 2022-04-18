import client from '../database'

export type Article = {
  id?: string;
  title: string;
  content: string;
}

export class ArticleStore {
    
  async index(): Promise<Article[]> {
    try {
      // @ts-ignore
      const conn = await client.connect()
      const sql = 'SELECT * FROM articles;'
  
      const result = await conn.query(sql)
  
      conn.release()
  
      return result.rows 
    } catch (err) {
      throw new Error(`Could not get articles. Error: ${err}`)
    }
  }

  async show(id: string): Promise<Article> {
    try {
        const sql = `SELECT * FROM articles WHERE id=${id};`
        // @ts-ignore
        const conn = await client.connect()

        const result = await conn.query(sql)

        conn.release()

        return result.rows[0]
    } catch (err) {
        throw new Error(`Could not get article ${id}. Error: ${err}`)
    }
  }str

  async create(article: Article): Promise<Article> {
    try {
        console.log('article: ', article)
      
        const sql = `INSERT INTO articles (title, content) VALUES (${article.title}, ${article.content}) RETURNING *;`
        // @ts-ignore
        const conn = await client.connect()

        const result = await conn.query(sql);
        console.log(result.rows[0])
        const article1 = result.rows[0]
        
        conn.release()

        return article1 
    } catch (err) {
        throw new Error(`Could not add article ${article.title}. Error: ${err}`)
    }
  }

  async delete(id: string): Promise<Article> {
    try {
      const sql = `DELETE FROM articles WHERE id=${id}`
        // @ts-ignore
        const conn = await client.connect()

        const result = await conn.query(sql)

        const article = result.rows[0]

        conn.release()

        return article  
    } catch (err) {
        throw new Error(`Could not delete article ${id}. Error: ${err}`)
    }
  }
}