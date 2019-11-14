const express = require('express');
const PORT = 3000;
const app = express();

/*
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
  //res.sendFile('/public/index.html', {root:__dirname});
})

//or

app.use(express.static('public')); //use is a middlewire, when client ask something to server, 'use' will use the middlewire to 


app.get('*', (req, res) => {
  res.sendFile('/public/index.html', {root:__dirname});  //this * will force any request to have the same response
                                                        // but the previous get will still exist, the post one will be ignore
})
*/



//npm run start:dev
const posts = [
  {id:1, text: 'bla'},
  {id:2, text: 'blab'},
  {id:3, text: 'blabbb'}
]

app.set('view engin', 'ejs');
app.get('/posts', (req, res)=>{
  res.render('post');
})

//in ejs file
{/* <body>
  <% posts.forEach(post => { %>
    <div><%= post.text %></div>
  <%})%>
</body> */}

app.get('/', (req, res) => {
  const {some} = req.query;
  res.sendFile(`${__dirname}./index.html`);
  //res.sendFile('/public/index.html', {root:__dirname});
})

app.listen(PORT, () => console.log(`app run `));








