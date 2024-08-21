function isURL(str) {
    const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/.*)?$/i;
    return urlPattern.test(str);
  }
  
  console.log(isURL("https://www.example.com")); // true
  console.log(isURL("www.example.com")); // true
  console.log(isURL("not a url")); // false
function searchitem(id) {
    // https://www.google.com/search?q=${document.querySelector('#search-value').value}
    const searchvalue = document.querySelector(`#${id}`).value;
    const searchurl = `https://www.google.com/search?q=${searchvalue}`
    window.open(searchurl,'_blank');
}
// function date() {

//     // Create a new Date object
// let currentDate = new Date();

// // Get individual components of the date
// let year = currentDate.getFullYear();
// let month = currentDate.getMonth() + 1; // Note: January is 0, so we add 1
// let day = currentDate.getDate();

// // Format the date if needed
// let dateString = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;

// // Display or use the dateString as needed
// document.querySelector('#date').innerHTML = dateString// Example output: "3:30:45 PM"

// }
// date()
function time() {
    // Create a new Date object
    let now = new Date();

    // Get hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Determine AM or PM
    let period = hours < 12 ? 'AM' : 'PM';

    // Convert hours from 24-hour to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)

    // Format the time nicely
    let timeString = `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds} ${period}`;

    // Display or use the timeString as needed
     
    document.querySelector('#a-time').innerHTML = timeString// Example output: "3:30:45 PM"
}


time()
// Update time every second using setInterval
setInterval(time, 1000);

function openlink(url){
    window.open(url,'_blank');

}

function setbookmark(){
const bookmarkname = document.querySelector('#bookmarkname')
console.log(bookmarkname.value)
const bookmarkurl = document.querySelector('#bookmarkurl')
console.log(bookmarkurl.value)
if(localStorage.getItem("bookmarkname") == null){
    localStorage.setItem("bookmarkname","[]")
}
if(localStorage.getItem("bookmarkurl") == null){
    localStorage.setItem("bookmarkurl","[]")
}

var old_name = JSON.parse(localStorage.getItem("bookmarkname"));
old_name.push(bookmarkname.value)
localStorage.setItem("bookmarkname",JSON.stringify(old_name))
var old_url = JSON.parse(localStorage.getItem("bookmarkurl"));
old_url.push(bookmarkurl.value)
localStorage.setItem("bookmarkurl",JSON.stringify(old_url))
bookmarkname.value = ''
bookmarkurl.value = ''
}

function viewbookmarkhome(){
    if(localStorage.getItem("bookmarkname") && localStorage.getItem("bookmarkurl")){
        console.log('viewing bookmark name and url for home page')
    const bookmark_name_arr = JSON.parse(localStorage.getItem("bookmarkname"))
    // const bookmark_name_len = JSON.parse(localStorage.getItem("bookmarkname")).length
    const bookmark_url_arr = JSON.parse(localStorage.getItem("bookmarkurl"))
    // const bookmark_url_len = JSON.parse(localStorage.getItem("bookmarkurl")).length
    const display_data = document.querySelector('#home_bookmark')

    bookmark_name_arr.forEach((name,index) => {
        if(isURL(bookmark_url_arr[index]) == true){
            display_data.insertAdjacentHTML(
                'afterbegin',
                `<div class="col-xl-3 col-sm-6 grid-margin stretch-card width-card card-pointer" onclick="openlink('${bookmark_url_arr[index]}')">
                <div class="card">
                  <div class="card-body">
                    <div class="row ssssss">
                      <div class="col-9">
                        <div class="d-flex align-items-center align-self-start">
                          <h3 class="mb-0"><img class="img-xs rounded-circle image-position" src="https://www.google.com/s2/favicons?sz=64&domain_url=${bookmark_url_arr[index]}" alt="${bookmark_url_arr[index]}" title="${bookmark_url_arr[index]}"></h3>
                        </div>
                      </div>
                    </div>
                    <h6 class="text-muted font-weight-normal text-position">${name}</h6>
                  </div>
                </div>
              </div>
            `,
              );
        }else{
            return
        }
        
        console.log(name)
    });

    }
        console.log('sjdjdjd')
//     bookmark_url_arr.forEach((name) => console.log(name));

// // document.getElementById("demo").innerHTML = text;
 
//     const falaha = JSON.parse(localStorage.getItem("bookmarkname"))[0];
//     console.log(falaha)
//     console.log(JSON.parse(localStorage.getItem("bookmarkname")))
//     console.log(JSON.parse(localStorage.getItem("bookmarkurl")))
}
function viewdata(){
    console.log('viewing bookmark name and url')
    const bookmark_name_arr = JSON.parse(localStorage.getItem("bookmarkname"))
    // const bookmark_name_len = JSON.parse(localStorage.getItem("bookmarkname")).length
    const bookmark_url_arr = JSON.parse(localStorage.getItem("bookmarkurl"))
    // const bookmark_url_len = JSON.parse(localStorage.getItem("bookmarkurl")).length
    const display_data = document.querySelector('#display_data')

    bookmark_name_arr.forEach((name,index) => {
        if(isURL(bookmark_url_arr[index]) == true){
            display_data.insertAdjacentHTML(
                'afterbegin',
                `
            <tr id='indexid${index}'>
                                <td>${index + 1}</td>
                                <td>${name}</td>
                                <td> <a href='${bookmark_url_arr[index]}'  target="_blank">${bookmark_url_arr[index]} </a> </td>
                                <td onclick="deletedataarr('${name}','${index}','${bookmark_url_arr[index]}');"><label class="badge badge-danger" style='text-decoration: none;cursor: pointer;' ><i class="fa fa-trash-o"> </i></label></td>
                              </tr>
            `,
              );
        }else{
            display_data.insertAdjacentHTML(
                'afterbegin',
                `
            <tr id='indexid${index}'>
                                <td>${index + 1}</td>
                                <td>${name}</td>
                                <td>${bookmark_url_arr[index]}</td>
                                <td onclick="deletedataarr('${name}','${index}','${bookmark_url_arr[index]}');"><label class="badge badge-danger" style='text-decoration: none;cursor: pointer;' ><i class="fa fa-trash-o"> </i></label></td>
                              </tr>
            `,
              );
        }
        
        console.log(name)
    });
    console.log('sjdjdjd')
//     bookmark_url_arr.forEach((name) => console.log(name));

// // document.getElementById("demo").innerHTML = text;
 
//     const falaha = JSON.parse(localStorage.getItem("bookmarkname"))[0];
//     console.log(falaha)
//     console.log(JSON.parse(localStorage.getItem("bookmarkname")))
//     console.log(JSON.parse(localStorage.getItem("bookmarkurl")))
}


function deletedataarr(name,iindex,url){
    console.log(`${name}`)
    console.log(`${iindex}`)
    console.log(`${url}`)

    const old_bookmark_name_arr = JSON.parse(localStorage.getItem("bookmarkname"))
    const old_bookmark_url_arr = JSON.parse(localStorage.getItem("bookmarkurl"))
    old_bookmark_name_arr.forEach((dataname,index) => {
        if(name == dataname){
            old_bookmark_name_arr.splice(index, 1);
        }
    });
    localStorage.setItem("bookmarkname",JSON.stringify(old_bookmark_name_arr))
     old_bookmark_url_arr.forEach((dataurl,index) => {
        if(url == dataurl){
            old_bookmark_url_arr.splice(index, 1);
        }
    });
    localStorage.setItem("bookmarkurl",JSON.stringify(old_bookmark_url_arr))

    const elementid = `indexid${iindex}`
    document.querySelector(`#${elementid}`).remove()
}

// viewdata()


/*
const news_slider = document.querySelector('#owl-carousel-basic')

console.log(news_slider)
// function fetchXMLData() {
const proxyUrl = 'https://api.allorigins.win/get?url=';
const targetUrl = encodeURIComponent('https://news.google.com/rss?hl=en-IN&gl=IN&ceid=IN:en');
console.log(proxyUrl + targetUrl)
fetch(proxyUrl + targetUrl)
    .then(response => response.json())
    .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data.contents, 'application/xml');
        displayData(xmlDoc);
        console.log(`sssss `,xmlDoc);
    })
    .catch(err => console.error('Error fetching data:', err));
// }

function displayData(xml) {
// const resultDiv = document.getElementById('result');
const items = xml.getElementsByTagName('item');
let output = '';
// for (let i = 0; i < 10; i++) {
for (let i = 0; i < 10; i++) {
    output += `
                    <div class="item">
                        <!-- <img src="assets/images/dashboard/Img_5.jpg" alt=""> -->
                        <p class="text-muted">${items[i].getElementsByTagName('title')[0].textContent}</p>
                      </div>
                      
    `;
    // output += `
    //     <div class="item">
    //                     <img src="assets/images/dashboard/Rectangle.jpg" alt="">
    //                     <div class="d-flex py-4">
    //                       <div class="preview-list w-100">
    //                         <div class="preview-item p-0">
    //                           <div class="preview-thumbnail">
    //                             <img src="assets/images/faces/face12.jpg" class="rounded-circle" alt="">
    //                           </div>
    //                           <div class="preview-item-content d-flex flex-grow">
    //                             <div class="flex-grow">
    //                               <div class="d-flex d-md-block d-xl-flex justify-content-between">
    //                                 <h6 class="preview-subject">${items[i].getElementsByTagName('title')[0].textContent}</h6>
    //                                 <p class="text-muted text-small">${items[i].getElementsByTagName('pubDate')[0].textContent}</p>
    //                               </div>
    //                               <p class="text-muted"><a href="${items[i].getElementsByTagName('link')[0].textContent}" target="_blank">Read more</a></p>
    //                             </div>
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </div>
    //                     </div>
                      
    // `;
}
output += ` <br> <br> <strong>${items.length}</strong>`;
news_slider.innerHTML = output;
}
*/

function backupdata() {
    const keys = Object.keys(localStorage);
        let code = '';
    
        // Generate code to store each key-value pair in localStorage
        keys.forEach(key => {
            const value = localStorage.getItem(key);
            console.log(`the value of ${key} is ${value}`)
            code+= `localStorage.setItem('${key}', '${value}');\n `
        });
        console.log(code)
    
        var blob = new Blob([code], { type: "text/plain" });
                var link = document.createElement("a");
    
                link.href = URL.createObjectURL(blob);
                link.download = "/backup/backupfile.txt";
                link.click();
                
                // Clean up the object URL
                URL.revokeObjectURL(link.href);
    
    }