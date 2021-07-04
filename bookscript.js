function createBook(){
    alert("successfully created")
    

//getting textbox values

let book_name=t1.value;
let book_author=t2.value;
let book_pages=t3.value;
let book_price=t4.value;

//create book object


let book={
    book_name,book_author,book_pages,book_price

}
localStorage.setItem(book_name,JSON.stringify(book))

}
//function display
function displayBook(book){
    let html_data=`<div class="card" style="width: 24rem;">
    <div class="card-header">
      ${book.book_name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${book.book_author}</li>
      <li class="list-group-item">${book.book_pages}</li>
      <li class="list-group-item">${book.book_price}</li>
    </ul>
  </div>`
  
  result.innerHTML=html_data
  
}
//function for search
function searchBy(){
    let book_name=t5.value;
    
    let book=JSON.parse(localStorage.getItem(book_name))

    if(book)
    {
        displayBook(book)

    }
    else{
        console.log("book not found")
    }

}
//listing all books

function allBooks(){
  let books=[]
  for(let i=0;i<localStorage.length;i++){
    books.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
  }
  let html_data=""
  for(let book of books){
    html_data+=`<div class="card" style="width: 24rem;">
    <div class="card-header">
      ${book.book_name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${book.book_author}</li>
      <li class="list-group-item">${book.book_pages}</li>
      <li class="list-group-item">${book.book_price}</li>
    </ul>
  </div>`
  }
  result.innerHTML=html_data
}
