// function isURL(str) {
//     const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/.*)?$/i;
//     return urlPattern.test(str);
//   }
  
//   console.log(isURL("https://www.example.com")); // true
//   console.log(isURL("www.example.com")); // true
//   console.log(isURL("not a url")); // false
// function searchitem(id) {
//     // https://www.google.com/search?q=${document.querySelector('#search-value').value}
//     const searchvalue = document.querySelector(`#${id}`).value;
//     const searchurl = `https://www.google.com/search?q=${searchvalue}`
//     window.open(searchurl,'_blank');
// }

// function openlink(url){
//     window.open(url,'_blank');

// }

// function setfolders(){
// const bookmarkname = document.querySelector('#bookmarkname')
// console.log(bookmarkname.value)
// const bookmarkurl = document.querySelector('#bookmarkurl')
// console.log(bookmarkurl.value)
// if(localStorage.getItem("microsoft_folder") == null){
//     localStorage.setItem("microsoft_folder","[]")
// }
// if(localStorage.getItem("ai_folder") == null){
//     localStorage.setItem("ai_folder","[]")
// }
// if(localStorage.getItem("other_folder") == null){
//     localStorage.setItem("other_folder","[]")
// }

// var old_name = JSON.parse(localStorage.getItem("bookmarkname"));
// old_name.push(bookmarkname.value)
// localStorage.setItem("bookmarkname",JSON.stringify(old_name))
// var old_url = JSON.parse(localStorage.getItem("bookmarkurl"));
// old_url.push(bookmarkurl.value)
// localStorage.setItem("bookmarkurl",JSON.stringify(old_url))
// bookmarkname.value = ''
// bookmarkurl.value = ''
// }

// function viewbookmarkhome(){
//     if(localStorage.getItem("bookmarkname") && localStorage.getItem("bookmarkurl")){
//         console.log('viewing bookmark name and url for home page')
//     const bookmark_name_arr = JSON.parse(localStorage.getItem("bookmarkname"))
//     // const bookmark_name_len = JSON.parse(localStorage.getItem("bookmarkname")).length
//     const bookmark_url_arr = JSON.parse(localStorage.getItem("bookmarkurl"))
//     // const bookmark_url_len = JSON.parse(localStorage.getItem("bookmarkurl")).length
//     const display_data = document.querySelector('#home_bookmark')

//     bookmark_name_arr.forEach((name,index) => {
//         if(isURL(bookmark_url_arr[index]) == true){
//             display_data.insertAdjacentHTML(
//                 'afterbegin',
//                 `<div class="col-xl-3 col-sm-6 grid-margin stretch-card width-card card-pointer" onclick="openlink('${bookmark_url_arr[index]}')">
//                 <div class="card">
//                   <div class="card-body">
//                     <div class="row ssssss">
//                       <div class="col-9">
//                         <div class="d-flex align-items-center align-self-start">
//                           <h3 class="mb-0"><img class="img-xs rounded-circle image-position" src="https://www.google.com/s2/favicons?sz=64&domain_url=${bookmark_url_arr[index]}" alt="${bookmark_url_arr[index]}" title="${bookmark_url_arr[index]}"></h3>
//                         </div>
//                       </div>
//                     </div>
//                     <h6 class="text-muted font-weight-normal text-position">${name}</h6>
//                   </div>
//                 </div>
//               </div>
//             `,
//               );
//         }else{
//             return
//         }
        
//         console.log(name)
//     });

//     }
//         console.log('sjdjdjd')
// //     bookmark_url_arr.forEach((name) => console.log(name));

// // // document.getElementById("demo").innerHTML = text;
 
// //     const falaha = JSON.parse(localStorage.getItem("bookmarkname"))[0];
// //     console.log(falaha)
// //     console.log(JSON.parse(localStorage.getItem("bookmarkname")))
// //     console.log(JSON.parse(localStorage.getItem("bookmarkurl")))
// }
// function viewdata(){
//     console.log('viewing bookmark name and url')
//     const bookmark_name_arr = JSON.parse(localStorage.getItem("bookmarkname"))
//     // const bookmark_name_len = JSON.parse(localStorage.getItem("bookmarkname")).length
//     const bookmark_url_arr = JSON.parse(localStorage.getItem("bookmarkurl"))
//     // const bookmark_url_len = JSON.parse(localStorage.getItem("bookmarkurl")).length
//     const display_data = document.querySelector('#display_data')

//     bookmark_name_arr.forEach((name,index) => {
//         if(isURL(bookmark_url_arr[index]) == true){
//             display_data.insertAdjacentHTML(
//                 'afterbegin',
//                 `
//             <tr id='indexid${index}'>
//                                 <td>${index + 1}</td>
//                                 <td>${name}</td>
//                                 <td> <a href='${bookmark_url_arr[index]}'  target="_blank">${bookmark_url_arr[index]} </a> </td>
//                                 <td onclick="deletedataarr('${name}','${index}','${bookmark_url_arr[index]}');"><label class="badge badge-danger" style='text-decoration: none;cursor: pointer;' ><i class="fa fa-trash-o"> </i></label></td>
//                               </tr>
//             `,
//               );
//         }else{
//             display_data.insertAdjacentHTML(
//                 'afterbegin',
//                 `
//             <tr id='indexid${index}'>
//                                 <td>${index + 1}</td>
//                                 <td>${name}</td>
//                                 <td>${bookmark_url_arr[index]}</td>
//                                 <td onclick="deletedataarr('${name}','${index}','${bookmark_url_arr[index]}');"><label class="badge badge-danger" style='text-decoration: none;cursor: pointer;' ><i class="fa fa-trash-o"> </i></label></td>
//                               </tr>
//             `,
//               );
//         }
        
//         console.log(name)
//     });
//     console.log('sjdjdjd')
// //     bookmark_url_arr.forEach((name) => console.log(name));

// // // document.getElementById("demo").innerHTML = text;
 
// //     const falaha = JSON.parse(localStorage.getItem("bookmarkname"))[0];
// //     console.log(falaha)
// //     console.log(JSON.parse(localStorage.getItem("bookmarkname")))
// //     console.log(JSON.parse(localStorage.getItem("bookmarkurl")))
// }


// function deletedataarr(name,iindex,url){
//     console.log(`${name}`)
//     console.log(`${iindex}`)
//     console.log(`${url}`)

//     const old_bookmark_name_arr = JSON.parse(localStorage.getItem("bookmarkname"))
//     const old_bookmark_url_arr = JSON.parse(localStorage.getItem("bookmarkurl"))
//     old_bookmark_name_arr.forEach((dataname,index) => {
//         if(name == dataname){
//             old_bookmark_name_arr.splice(index, 1);
//         }
//     });
//     localStorage.setItem("bookmarkname",JSON.stringify(old_bookmark_name_arr))
//     old_bookmark_url_arr.forEach((dataurl,index) => {
//         if(url == dataurl){
//             old_bookmark_url_arr.splice(index, 1);
//         }
//     });
//     localStorage.setItem("bookmarkurl",JSON.stringify(old_bookmark_url_arr))

//     const elementid = `indexid${iindex}`
//     document.querySelector(`#${elementid}`).remove()
// }

// // viewdata()