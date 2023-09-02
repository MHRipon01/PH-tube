let fetchData;

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
        <button onclick = "handleClass(${category?.category_id})" class="bg-slate-400 p-2 rounded-md lg:px-6 text-white lg:mx-4 w-9/12 mx-3  md:w-auto">
               ${category.category}
            </button>
        
        `;
    allCategory.appendChild(div);
  });

  // console.log(data.data);

  // console.log(handleCategory());
};

// let fetchedVideos = [];
let currentCategory = 1000;



const handleClass = async (categoryId , isSort) => {
  currentCategory = categoryId
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categoryId}`);

  const data = await res.json();
  fetchData = data.data;
  // console.log(data.data);
  
  //  console.log(fetchedVideos);
  
  // function sortMaker() {
  //   // let result = fetchedVideos.sort();
  //   fetchd = fetchData
  // }

  if(isSort == true){
    fetchData = fetchData.sort((a, b) => parseInt(b.others.views) - parseInt(a.others.views))
  }

  //sort 
  
    // console.log(fetchData);
    



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

    // console.log(videos);

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
        <div class="card md:w-full md:p-14 lg:p-1 lg:w-full lg:h-full  bg-base-100 ">
        <figure class=" pt-2">
          <img class="shadow-xl rounded-xl w-full m-5 lg:p-1 lg:w-full lg:h-[347px] " src="${
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

          <p class=" font-extrabold text-white -mt-24 ml-[190px]  md:ml-96 md:-mt-24 lg:-mt-28 rounded-lg p-2 lg:ml-28 absolute ${
            isNaN(timeConverter(convertedTime)) ? "" : "hidden"
          } bg-black "> ${timeConverter(convertedTime)}</p>
          
        </div>
      </div>
        `;
    cardContainer.appendChild(div);
  });
};

// const sortByViewButton = document.querySelector("#sort-by-view");
// // console.log(sortByViewButton);
// sortByViewButton.addEventListener("click", () => {
//  sort = sortMaker()
//   console.log(sort);
// });
  // console.log(sortByViewButton);
  //  const ck = allCategory.forEach(views)
  // console.log(ck);
  // const sortedVideos = [...fetchedVideos];
  // console.log(fetchedVideos);
  // const makeViewCountToInt =
  //   (sortedVideos)
  // console.log(makeViewCountToInt);
  // const sortAfterViewCountToInt = makeViewCountToInt.sort(
  // (a, b) => b.others.views - a.others.views
  // );
  // displayVideos(sortedVideos);
  // console.log();
// });

function blog() {
  open("blog.html");
}

const sortByViewButton = document.querySelector("#sort-by-view");
// console.log(sortByViewButton);
sortByViewButton.addEventListener("click", () => {
  handleClass(currentCategory , true)
  // console.log();
});

handleClass(1000);
handleCategory();
