'use strict'

const BlogPost = require('./02-Blog-Post');

class Blog {
    constructor(){
        this.blogPost = [];
    }

    addBlogPost(authorName, title, text, publicationDate){
        let blogPost = new BlogPost(authorName, title, text, publicationDate);
        this.blogPost.push(blogPost);
    }

    deletePost(index){
        if(parseInt(index) < this.blogPost.length){
            delete this.blogPost[parseInt(index)];
        }
        else{
            delete this.blogPost[this.blogPost.length-1];
        }
    }

    updatePost(index, blogPost){
        if(parseInt(index) < this.blogPost.length){
            //delete this.blogPost[parseInt(index)];
            this.blogPost[parseInt(index)] = blogPost;
        }
        else{
            console.log('We don\'t have the selected blog.');
        }
    }
}

let blog = new Blog();
blog.addBlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet', '2000.05.04');
blog.addBlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything', '2010.10.10');
console.log(blog);

blog.deletePost(1);
console.log(blog);

let blogposts = new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet', '2000.05.04');
blog.updatePost(1,blogposts);
console.log(blog);