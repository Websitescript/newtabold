const form_tab = document.querySelector(`#form-set-tab`)

console.log(form_tab.innerHTML)
document.querySelector(`#form-set-tab`)
const add_url = document.querySelector(`#add_url`)

add_url.addEventListener("click", function (){
    form_tab.insertAdjacentHTML(
        'beforeend',
        `
                    <div class="form-group tab_urls">
                      <label for="bookmarkurl">Url</label>
                      <input type="text" class="form-control"  placeholder="Set Bookmark Url">
                    </div>
        `,
      );
    })

const add_tab = document.querySelector(`#add_tab`)

add_tab.addEventListener("click", function (){
    console.log('form_tab.innerHTML')
    // document.querySelectorAll(".tab_urls").length

    if(document.querySelector(`#tabname`).value && document.querySelector(`#bookmarkurl`).value ){         
      
      

          const tabname = document.querySelector('#tabname')
        console.log(tabname.value)
        const taburls = document.querySelectorAll(".tab_urls")
        console.log(taburls.length)
        taburls.forEach((name) => {
            // console.log(name.querySelector(`input`).value)
        })
        if(localStorage.getItem("tabname") == null){
            localStorage.setItem("tabname","[]")
        }


        if(localStorage.getItem(`${tabname.value}`)){

          console.log("jdsbgvfghnffngmf ")
          var old_tab_url = JSON.parse(localStorage.getItem(`${tabname.value}`));
          taburls.forEach((name) => {
            old_tab_url.push(name.querySelector(`input`).value)
        })
          // old_tab_url.push(taburls[0].querySelector(`input`).value)
          localStorage.setItem(`${tabname.value}`,JSON.stringify(old_tab_url))

        }else{

          var old_tab_name = JSON.parse(localStorage.getItem("tabname"));
          old_tab_name.push(tabname.value)
          localStorage.setItem("tabname",JSON.stringify(old_tab_name))
          var arr = []
          taburls.forEach((name) => {
            if(name.querySelector(`input`).value !== ``){
               arr.push(name.querySelector(`input`).value)
            }
          })
          // console.log(arr)
          var old_tab_url = localStorage.setItem(`${tabname.value}`, JSON.stringify(arr));

        }

        document.querySelector('#display_data').innerHTML = ``
        viewtabdata()


        }

})

//     var old_name = JSON.parse(localStorage.getItem("bookmarkname"));
// old_name.push(bookmarkname.value)
// localStorage.setItem("bookmarkname",JSON.stringify(old_name))

function viewtab(){
  const customtab = document.querySelector("#customtab")
  // customtab.addEventListener("click", function (){
  //   console.log("HHHHHHH")
  //   })
  var old_tab_name_arr = JSON.parse(localStorage.getItem(`tabname`));
  old_tab_name_arr.forEach((name) => {
    console.log(name)

    customtab.insertAdjacentHTML(
      'beforeend',
      `
                <div  class="custombtns" onclick="opentabs('${name}')">
                  <span style="display: flex;
                    justify-content: center;" id='container${name}'>
                  
                  </span>
                </div> 
  `,
    );

    var old_tab_url_arr = JSON.parse(localStorage.getItem(`${name}`));
    
    // old_tab_url_arr.forEach((url) => {
    //   console.log(url)

    //   for (let index = 0; index < 2; index++) {
    //     document.querySelector(`#container${name}`).insertAdjacentHTML(
    //       'beforeend',
    //       `
    //                 <img src="https://www.google.com/s2/favicons?sz=64&amp;domain_url=${url}" class="image">
    //   `,
    //     );
    //   }
      
    //   // console.log(`<a href="${url}"> ${url} </a>`)
    // })

    // for (let index = 0; index < 2; index++) {
    //   old_tab_url_arr.forEach((url) => {
    //     console.log(url)
  
    //   document.querySelector(`#container${name}`).insertAdjacentHTML(
    //     'beforeend',
    //     `
    //               <img src="https://www.google.com/s2/favicons?sz=64&amp;domain_url=${url}" class="image">
    // `,
    //   );
    // })
    // }

    if (old_tab_url_arr.length > 5) {
    
        for (let index = 0; index < 4; index++) {
        
        
          document.querySelector(`#container${name}`).insertAdjacentHTML(
            'beforeend',
            `
                      <img src="https://www.google.com/s2/favicons?sz=64&amp;domain_url=${old_tab_url_arr[index]}" class="image">
        `,
          );
        
        }

    }else{
      for (let index = 0; index < old_tab_url_arr.length; index++) {
        
        
        document.querySelector(`#container${name}`).insertAdjacentHTML(
          'beforeend',
          `
                    <img src="https://www.google.com/s2/favicons?sz=64&amp;domain_url=${old_tab_url_arr[index]}" class="image">
      `,
        );
      
      }
    }

    document.querySelector(`#container${name}`).insertAdjacentHTML(
      'afterend',
      `
                
                  <!-- <i class="mdi mdi-file-check btn-icon-prepend"></i> Submit -->
                  <p class="center" style="text-transform: capitalize;">${name}</p>
  `,
    );
  })
}



function viewtabdata(){
  var old_tab_name_arr = JSON.parse(localStorage.getItem(`tabname`));
  // const bookmark_name_len = JSON.parse(localStorage.getItem("bookmarkname")).length
  // const bookmark_url_len = JSON.parse(localStorage.getItem("bookmarkurl")).length
  const display_data = document.querySelector('#display_data')

  old_tab_name_arr.forEach((name,index) => {
      if(JSON.parse(localStorage.getItem(`${name}`))){
        let title = localStorage.getItem(`${name}`).replaceAll('[', '').replaceAll(']', '')
        // .replaceAll('"', '').replaceAll(',', ' , ')
          display_data.insertAdjacentHTML(
              'afterbegin',
              `
          <tr id='indexid${index}'>
                              <td>${index + 1}</td>
                              <td title='${title}'>${name}</td>
                              <td >
                              <label class="badge" style='text-decoration: none;cursor: pointer; background:#2caae1;' onclick="edittab('${name}','${index}');" ><i class="fa fa-pencil"> </i></label>
                              <label class="badge badge-danger" style='text-decoration: none;cursor: pointer;' onclick="deletetab('${name}','${index}');" ><i class="fa fa-trash-o"> </i></label>
                              </td>
                            </tr>
          `,
            );
      }
      // else{
      //     display_data.insertAdjacentHTML(
      //         'afterbegin',
      //         `
      //     <tr id='indexid${index}'>
      //                         <td>${index + 1}</td>
      //                         <td>${name}</td>
      //                         <td>${bookmark_url_arr[index]}</td>
      //                         <td onclick="deletedataarr('${name}','${index}','${bookmark_url_arr[index]}');"><label class="badge badge-danger" style='text-decoration: none;cursor: pointer;' ><i class="fa fa-trash-o"> </i></label></td>
      //                       </tr>
      //     `,
      //       );
      // }
      
      // console.log(name)
  });
//     bookmark_url_arr.forEach((name) => console.log(name));

// // document.getElementById("demo").innerHTML = text;

//     const falaha = JSON.parse(localStorage.getItem("bookmarkname"))[0];
//     console.log(falaha)
//     console.log(JSON.parse(localStorage.getItem("bookmarkname")))
//     console.log(JSON.parse(localStorage.getItem("bookmarkurl")))
}

function deletetab(name,id){
  console.log(name , id )

  const old_tab_name = JSON.parse(localStorage.getItem("tabname"))
    // const old_tab_data = JSON.parse(localStorage.getItem(`${name}`))
    old_tab_name.forEach((dataname,index) => {
        if(name == dataname){
          old_tab_name.splice(index, 1);
        }
    });
    localStorage.setItem("tabname",JSON.stringify(old_tab_name))

   

    const elementid = `indexid${id}`
    document.querySelector(`#${elementid}`).remove()

    localStorage.removeItem(`${name}`)

}




// const url = new URL(window.location.href);

// // Create a URLSearchParams object from the query string
//  const params = new URLSearchParams(url.search);

// // Get a specific parameter value
//  const value = params.get('id');
//  const value = params.has('id');


function opentabs(name){
  let array = JSON.parse(localStorage.getItem(`${name}`))
  array.forEach((url) => {
    console.log(`opening ${url}`)
    window.open(url,'_blank');
    console.log(`opened ${url}`)
  })
  
}

