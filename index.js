
const handleCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );

  data = await res.json();

  const allCategory = document.getElementById("all-category");

  data.data.forEach((category) => {
    // console.log(category);

    const div = document.createElement("div");

    div.innerHTML = `
        <button onclick = "handleClass(${category?.category_id})" class="bg-slate-400 p-2 rounded-md border-2 border-yellow-500 lg:px-6 text-white lg:mx-4 w-9/12 mx-3  md:w-auto">
               ${category.category}
            </button>
        
        `;
    allCategory.appendChild(div);
  });

  // console.log(data.data);

  // console.log(handleCategory());
};

let fetchedVideos = [];
const handleClass = async (categoryId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
  );

  const data = await res.json();
  console.log(data.data.length);
  //  fetchedVideos = data.data
  //  console.log(fetchedVideos);

  //  function sortMaker(){
  //   let result = fetchedVideos.sort()
  //  }

  if (data.data.length === 0) {
    const drawing = document.getElementById("drawing");

    drawing.classList.remove("hidden");
  } else {
    const drawing = document.getElementById("drawing");
    drawing.classList.add("hidden");
  }

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  data.data.forEach((videos) => {
    const check = parseFloat(videos?.others?.posted_date);

    console.log(videos);

    const timeConverter = (second) => {
      if (isNaN(second)) {
        return "";
      }
      // else{

      const hoursWithoutDecimal = Math.floor(second / 3600);
      const minutes = Math.floor((second % 3600) / 60);
      // updateVideoDisplay();

      return `${hoursWithoutDecimal} hrs ${minutes} minutes ago`;
    };

    const div = document.createElement("div");
    // console.log(div);

    const convertedTime = parseFloat(videos?.others?.posted_date ? check : ``);
    // console.log(convertedTime);
    div.innerHTML = `
        <div class="card md:w-full md:p-14 lg:p-1 lg:w-full lg:h-full border-2 border-purple-600 bg-base-100 ">
        <figure class=" pt-2">
          <img class="shadow-xl rounded-xl w-full m-5 lg:p-1 lg:w-full lg:h-[347px] border-2 border-green-600 " src="${
            videos.thumbnail
          }" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <div class="flex"> <img class="object-cover w-10 h-10 rounded-full relative " src="${
              videos.authors[0].profile_picture
            } " alt=""> &nbsp;  &nbsp;
                <h2 class="card-title">${videos.title}</h2>
            </div>
            <div class="flex">
            <p>${videos.authors[0].profile_name} </p>
            <img src="${
              videos.authors[0].verified ? `verified.svg` : ""
            } " alt="">
         </div>
          <p class="-ml-14 " >${videos.others?.views}</p>

          <p class=" font-extrabold text-white -mt-20 ml-52  md:ml-96 md:-mt-20 lg:-mt-28 rounded-lg p-2 lg:ml-28 absolute ${
            isNaN(timeConverter(convertedTime)) ? "" : "hidden"
          } bg-black "> ${timeConverter(convertedTime)}</p>
          
        </div>
      </div>
        `;
    cardContainer.appendChild(div);
  });
};

//     const sortByViewButton = document.querySelector('#sort-by-view');
// sortByViewButton.addEventListener('click', () => {

// })

// let fetchedVideos = []
// const handleClass = async (categoryId) => {
//   const res = await fetch(
//     `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
//   );

//   const data = await res.json();
//   fetchedVideos = data.data;

//   if (data.data.length === 0) {
//     const drawing = document.getElementById('drawing')
//     drawing.classList.remove('hidden')
//   } else {
//     const drawing = document.getElementById('drawing');
//     drawing.classList.add('hidden');
//   }

//   displayVideos(fetchedVideos);
// };

// const displayVideos = (videos) => {
//   const cardContainer = document.getElementById("card-container");
//   cardContainer.innerHTML = "";
//   videos.forEach((video) => {
//     const check = parseFloat(video?.others?.posted_date)

//     const timeConverter = (second) => {
//       if (isNaN(second)) {
//         return '';
//       }
//       const hoursWithoutDecimal = Math.floor(second / 3600);
//       const minutes = Math.floor((second % 3600) / 60);
//       return `${hoursWithoutDecimal} hrs ${minutes} minutes ago`;
//     }

//     const div = document.createElement("div");
//     const convertedTime = parseFloat(video?.others?.posted_date ? check : ``);
//     div.innerHTML = `
//         <div class="card md:w-full md:p-14 lg:p-1 lg:w-full lg:h-full border-2 border-purple-600 bg-base-100 ">
//         <figure class=" pt-2">
//           <img class="shadow-xl rounded-xl w-full m-5 lg:p-1 lg:w-full lg:h-[347px] border-2 border-green-600 " src="${
//       video.thumbnail
//       }" alt="Shoes" class="rounded-xl" />
//         </figure>
//         <div class="card-body items-center text-center">
//             <div class="flex"> <img class="object-cover w-10 h-10 rounded-full relative " src="${
//       video.authors[0].profile_picture
//       } " alt="">&nbsp;  &nbsp;
//                 <h2 class="card-title">${video.title}</h2>
//             </div>
//             <div class="flex">
//             <p>${video.authors[0].profile_name} </p>
//             <img src="${
//       video.authors[0].verified ? `verified.svg` : ""
//       } " alt="">
//          </div>
//           <p class="-ml-14 " >${video.others?.views}</p>

//           <p class=" font-extrabold text-white -mt-20 ml-52  md:ml-96 md:-mt-20 lg:-mt-28 rounded-lg p-2 lg:ml-28 absolute ${isNaN(timeConverter(convertedTime)) ? "" : "hidden"} bg-black "> ${timeConverter(convertedTime)}</p>

//         </div>
//       </div>
//         `;
//     cardContainer.appendChild(div);
//   });
// }

const sortByViewButton = document.querySelector("#sort-by-view");
// console.log(sortByViewButton);
sortByViewButton.addEventListener("click", () => {
  // console.log(sortByViewButton);
 const ck = allCategory.forEach(views)
console.log(ck);
  const sortedVideos = [...fetchedVideos];
  // console.log(fetchedVideos);
  const makeViewCountToInt =
    (sortedVideos) 
  console.log(makeViewCountToInt);
  // const sortAfterViewCountToInt = makeViewCountToInt.sort(
    // (a, b) => b.others.views - a.others.views
  // );
  // displayVideos(sortedVideos);
  // console.log();
});




function blog() {
  open("blog.html");
}


handleClass(1000);
handleCategory();
