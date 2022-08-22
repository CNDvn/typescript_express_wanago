import express, { Request, Response } from 'express'
import Post from './post.interface'

class PostsController{
    public path = '/posts';
    public router = express.Router();

    private posts: Post[] = [
        {
            author: "Hieu",
            content: "Sach day lap trinh ne",
            title: "Day lap trinh"
        }
    ]

    constructor(){
        this.initializeRoutes()
    }

    public initializeRoutes(){
        this.router.get(this.path, this.getAllPosts);
        this.router.post(this.path, this.createPost)
    }

    getAllPosts = (req: Request, res: Response) => {
        res.send(this.posts)
    }

    createPost = (req: Request, res: Response) => {
        const post: Post = req.body;
        this.posts.push(post);
        res.send(post)
    }
}

export default PostsController;