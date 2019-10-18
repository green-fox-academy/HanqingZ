// Create a BlogPost class that has
// - an authorName
// - a title
// - a text
// - a publicationDate
// Create a few blog post objects:
// - "Lorem Ipsum" titled by John Doe posted at "2000.05.04."
//      - Lorem ipsum dolor sit amet.
// - "Wait but why" titled by Tim Urban posted at "2010.10.10."
//      - A popular long-form, stick-figure-illustrated blog about almost everything.
// - "One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
//      - Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. 
//        When I asked to take his picture outside one of IBM’s New York City offices, 
//        he told me that he wasn’t really into the whole organizer profile thing.

class BlogPost{
    constructor(authorName, title, text, publicationDate){
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.publicationDate = publicationDate;
    }

    set texts(text){
        this.text = text;
    }

    print(){
        console.log(`"${this.title}" titled by ${this.authorName} posted at "${this.publicationDate}."
        ${this.text}.`);
    }
}

let bp1 = new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet', '2000.05.04');
bp1.print();

let bp2 = new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything', '2010.10.10');
bp2.print();

let bp3 = new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', '', '2017.03.28');
bp3.texts = 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. \n\tWhen I asked to take his picture outside one of IBM’s New York City offices, \n\the told me that he wasn’t really into the whole organizer profile thing';
bp3.print();


module.exports = BlogPost;