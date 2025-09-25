
const ACCCESS_TOKEN = '1iHTRyhnXxgF6ij8LsYGfttXLr7kL2oturjbojw0yUQ'
let keyword = document.getElementById('keyword');


document.getElementById('btn').addEventListener('click' , ()=>{
    document.getElementById('allImgid').innerHTML = ''
   let val = keyword.value;
   keyword.value = ''
   fetchImg(val);
   
})
async function fetchImg(val) {
    let response = await fetch(`https://api.unsplash.com/search/photos?query=${val}&client_id=${ACCCESS_TOKEN}`);
    let result = await response.json();
    displayImg(result);
}
function displayImg(res) {
       res.results.map((data) => {

       let div = document.createElement(`div`);
       div.setAttribute("class","singleImg");
       div.innerHTML=` <div class="firstDiv">
                <img src=${data.user.profile_image.large
                } alt="" class="userImg">
                <p class="Username">${data.user.username}</p>
            </div>
            <div class="secondDiv">
                <img src=${data.urls.regular} alt="" class="mainImg">
                <p class="imgDes">${data.alt_description}</p>
            </div>`
       document.getElementById('allImgid').appendChild(div);
        
   })
}


