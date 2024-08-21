function isURL(str) {
  const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/.*)?$/i;
  return urlPattern.test(str);
}

// (function ($) {
//   $(function () {
//     var todoListItem = $('.todo-list');
//     var todoListInput = $('.todo-list-input');
//     $('.todo-list-add-btn').on("click", function (event) {
//       event.preventDefault();

//       var item = $(this).prevAll('.todo-list-input').val();

//       if (item) {
//         todoListItem.append("<li><div class='form-check'><label class='form-check-label'>" + item + "<i class='input-helper'></i></label></div><i class='remove mdi mdi-close-box'></i></li>");
//         todoListInput.val("");
//       }

//     });

//     todoListItem.on('change', '.checkbox', function () {
//       if ($(this).attr('checked')) {
//         $(this).removeAttr('checked');
//       } else {
//         $(this).attr('checked', 'checked');
//       }

//       $(this).closest("li").toggleClass('completed');

//     });

//     todoListItem.on('click', '.remove', function () {
//       $(this).parent().remove();
//     });

//   });
// })(jQuery);

const todoinput =  document.querySelector('.todo-list-input');
const todo_add_btn =  document.querySelector('.todo-list-add-btn');
const todo_list_custom =  document.querySelector('.todo-list-custom');
function addtodo(){

  if(todoinput.value){
    todo_list_custom.insertAdjacentHTML(
      'afterbegin',
      `
      <li>
                          <div class="form-check form-check-primary">
                            <label class="form-check-label">
                               ${todoinput.value} </label>
                          </div>
                          <i class="remove mdi mdi-close-box"></i>
                        </li>
      `
    );
  }
  // if(localStorage.getItem("bookmarkurl") == null){
  //     localStorage.setItem("bookmarkurl","[]")
  // }
  
  // var old_name = JSON.parse(localStorage.getItem("bookmarkname"));
  // old_name.push(bookmarkname.value)
  // localStorage.setItem("bookmarkname",JSON.stringify(old_name))
  // var old_url = JSON.parse(localStorage.getItem("bookmarkurl"));
  // old_url.push(bookmarkurl.value)
  // localStorage.setItem("bookmarkurl",JSON.stringify(old_url))
  // bookmarkname.value = ''
  // bookmarkurl.value = ''
  }
  
  function deletenote(id,urlid){
    console.log(id)
    console.log(urlid)
    document.querySelector(`#${id}`).remove()
    fetch(
      `https://ap-south-1.aws.data.mongodb-api.com/app/application-0-mecmrjn/endpoint/deleteurl?urlid=${urlid}`,
      {
        method: "DELETE",
      },
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Handle the response, which might be empty or contain a success message
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }

//   const loadnotes = async () => {
//     try {
//         const res = await fetch('https://ap-south-1.aws.data.mongodb-api.com/app/application-0-mecmrjn/endpoint/geturl');
//         all_video = await res.json();
//         console.log(all_notes);
//     } catch (err) {
//         console.log("Unable to display videos")
//     }
// };

// const loadnotesapi = (notes) => {
//     const notes_html = notes
//         .map((note) => {
//             return `
//             <li id='note9'>
//               <div class="form-check form-check-primary">
//                 <label class="form-check-label" >
//                   ${note} </label>
//               </div>
//               <i class="remove mdi mdi-close-box"  onclick="deletenote('note9')"></i>
//             </li>
//         `;
//         })
//         .join('');
//         home_container.innerHTML = notes_html;
// };
// loadnotes();
function fetchdata(){
fetch('https://ap-south-1.aws.data.mongodb-api.com/app/application-0-mecmrjn/endpoint/geturl', { 
  method: 'GET'
})
.then(function(response) {
  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }
  return response.json();
})
.then(function(data) {
  // Assuming the data is an array of objects with an 'url' property
  data.forEach(i => {
    console.log(i.url)
    if(isURL(i.url) == true){
    todo_list_custom.insertAdjacentHTML(
      'afterbegin',
      `
        <li id='note${i._id}' style='border-bottom: 1px solid #2c2e33;'>
          <div class="form-check form-check-primary">
            <label class="form-check-label" >
              <a href='${i.url}' target="_black">${i.url}</a></label>
          </div>
          <i class="remove mdi mdi-close-box"  onclick="deletenote('note${i._id}','${i.urlid}')"></i>
        </li>
      `
    );
  }else{
    todo_list_custom.insertAdjacentHTML(
      'afterbegin',
      `
        <li id='note${i._id}' style='border-bottom: 1px solid #2c2e33;'>
          <div class="form-check form-check-primary">
            <label class="form-check-label" >
              ${i.url}</label>
          </div>
          <i class="remove mdi mdi-close-box"  onclick="deletenote('note${i._id}','${i.urlid}')"></i>
        </li>
      `
    );
  }
  });
})
.catch(function(err) {
  console.log(`Error: ${err}`);
});

}
fetchdata();
function addnote() {
  async function postRequest(body) {
    try {
      const response = await fetch(`https://ap-south-1.aws.data.mongodb-api.com/app/application-0-mecmrjn/endpoint/url`, {
        method: "POST",
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }



  function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

  const body = {
    url: document.querySelector('.todo-list-input').value,
    urlid: makeid(10),
  };

  postRequest(body)
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
    setTimeout(function(){
      todo_list_custom.innerHTML = " "
      fetchdata();
 },1000); //delay is in milliseconds 


}