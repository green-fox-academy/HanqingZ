'use strict'

const BlogPost = require('./02-Blog-Post');

class Blog {
    constructor(){
        this.blogPost = [];
    }

    addBlogPost(blogPost){
        this.blogPost.push(blogPost);
    }

    deletePost(index){
        this.blogPost.splice(parseInt(index), 1);
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
let blog1 = new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet', '2000.05.04');
let blog2 = new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything', '2010.10.10');
let blog3 = new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. \n\tWhen I asked to take his picture outside one of IBM’s New York City offices, \n\the told me that he wasn’t really into the whole organizer profile thing', '2017.03.28');
blog.addBlogPost(blog1);
blog.addBlogPost(blog2);
blog.addBlogPost(blog3);
console.log(blog);

blog.deletePost(1);
console.log(blog);

let blogposts = new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet', '2000.05.04');
blog.updatePost(1,blogposts);
console.log(blog);