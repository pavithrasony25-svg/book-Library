let bookedit=null;

function add(){
    const bookname=document.getElementById("bname").value
    const authorname=document.getElementById("aname").value
    const category=document.getElementById("bkcat").value
    if(bookedit== null)
    {
        console.log(bookname)
        console.log(authorname)
        console.log(category)
        localStorage.setItem("bname",bookname)
         localStorage.setItem("aname",authorname)
          localStorage.setItem("bkcat",category)
          alert("Book Record Added")
          document.getElementById("addTable").innerHTML+=
  `
  <tr>
  <td>${bookname}</td>
    <td>${authorname}</td>
      <td>${category}</td>
        <td>
        <button type="button" onclick="editbook(this)">
    <img src="https://static.vecteezy.com/system/resources/thumbnails/002/103/774/small_2x/hand-writing-with-pen-black-glyph-icon-vector.jpg" width="40px" alt="img2">
    </button>
            <button type="button" onclick="deletebook(this)">
    <img src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" width="40px" alt="img2">
    </button>
        
        </td>
        `
         }
    else{
       
        bookedit.children[0].innerText = bookname;
         bookedit.children[1].innerText = authorname;
           bookedit.children[2].innerText = category;
             localStorage.setItem("bname", bookname);
              localStorage.setItem("aname", authorname)
               localStorage.setItem("bkcat", category);
                 alert("Book record updated");
                 bookedit = null;
    }
 bname.value=""
      aname.value=""
      bkcat.value=""
}
function editbook(button)
{
    bookedit=button.parentNode.parentNode

    let bookname=bookedit.children[0].innerText;
     let authorname =bookedit.children[1].innerText;
      let category = bookedit.children[2].innerText;
       document.getElementById("bname").value=bookname
              document.getElementById("aname").value=authorname
       document.getElementById("bkcat").value=category

}
function deletebook(button){
     console.log(button);
     row=button.parentNode.parentNode
     row.remove()


}
