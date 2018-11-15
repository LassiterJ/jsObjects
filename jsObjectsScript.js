// var person = {
//     name: "Travis",
//     age: 21,
//     city: "LA"
// };

// let movies = [
//     {
//         title: "Frozen",
//         rating: "5",
//         hasWatched: true
//     },

//     {
//         title: "Death Note",
//         rating: "3",
//         hasWatched: true
//     },
//     {
//         title: "Incredibles 2",
//         rating: "N/A",
//         hasWatched: false
//     },
//     {
//         title: "Infinity War",
//         rating: "N/A",
//         hasWatched: false
//     },

// ]

// // function printMovie(object) {
// //     for (var i = 0; i < object.length; i++) {
// //         if (object[i].hasWatched === true) {
// //             console.log("You have watched " + object[i].title + "-" + object[i].rating)
// //         }
// //         else {
// //             console.log("You have not seen " + object[i].title + "-" + object[i].rating)
// //         }

// //     };
// // }

// function printMovie2(movies) {
//     movies.forEach(function (movie) {
//         if (movie.hasWatched === true) {
//             console.log("You have watched " + movie.title + "-" + movie.rating)
//         }
//         else {
//             console.log("You have not seen " + movie.title + "-" + movie.rating)
//         }
//     })
// }






// const butt = document.querySelector("button");
// const body = document.getElementsByTagName("body");
// let isPurple = false;
// this.addEventListener("click", function () {
//     if (isPurple) {
//         body[0].style.background = "white";
        
//     }
//     else {
//         body[0].style.background = "purple";
        
//     }
//     isPurple = !isPurple;
// });
// if white
// make it purple
// else
// make it white

const butt = document.querySelector("button");
const body = document.getElementsByTagName("body");

this.addEventListener("click", function () {
    document.body.classList.toggle("purple");
})