let books = [];
let id = 1;

function findIndex (ID) {
  for(var i = 0; i< books.length; i++) {
    if(books[i].id === ID) {
      return i;
    }
  }
};

module.exports = {
  create: ( req, res ) => {
    const { title, author } = req.body;
    books.push( { id, title, author } );
    id++;
    res.send( books );
  },

  read: ( req, res ) => {
    res.send( books );
  },

  update: ( req, res ) => {
    const updateID = req.params.id;
    let index = findIndex(updateID);
  
    books[ index ] = {
      id: books[ index ].id,
      title: req.body.title || books[ index ].title,
      author: req.body.author || books[ index ].author
    };

    res.send( books );
  },

  delete: ( req, res ) => {
    const deleteID = req.params.id;
    let index = findIndex(deleteID);
    books.splice( index, 1 );
    res.send( books );
  }
};