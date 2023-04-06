"use strict";

const readAllBtn = document.querySelector(".read-all");
const notifCard = document.querySelectorAll(".notif-card");
const notifNumber = document.querySelector(".notif-not-see");

const unread = document.querySelectorAll(".unread");
const dotNotif = document.querySelectorAll(".dot-notif");

notifNumber.innerHTML = unread.length;
readAllBtn.addEventListener("click", () => {
  unread.forEach((unread) => {
    unread.classList.remove("unread");
    dotNotif.forEach((dotNotif) => {
      dotNotif.style.display = "none";
    });
  });
  const newUnread = document.querySelectorAll(".unread");
  notifNumber.innerHTML = newUnread.length;
});

unread.forEach((unread) => {
  unread.addEventListener("click", () => {
    unread.classList.remove("unread");
    dotNotif.forEach((dot) => {
      if (dot.closest(".unread") === null) {
        dot.style.display = "none";
      }
    });
    const newUnread = document.querySelectorAll(".unread");
    notifNumber.innerHTML = newUnread.length;
  });
});

// unread.forEach((card, index) => {
//   let isClicked = false;
//   // set dataset and increment it by 1 for every card;
//   let counter = card.dataset.counter;
//   card.setAttribute("data-counter", 1);
//   counter = index + 1;
//   card.dataset.counter = counter;

//   card.addEventListener("click", (e) => {
//     if (!isClicked) {
//       const target = e.target.closest(".unread");
//       target.classList.remove("unread");
//       counter = counter - 1;
//       delete target.dataset.counter;
//       card.dataset.counter = counter;

//       // if (!target) return;

//       isClicked = true;
//     } else {
//       return;
//     }
//   });

//   // change notif number in UI;
//   notifNumber.innerHTML = counter;
// });
// // handle read all button;
// function handleReadAllBtn() {
//   unread.forEach((notif) => {
//     if (notif.classList.contains("unread")) {
//       notif.classList.remove("unread");
//     }
//   });
// }

// // // handle notifications card click;
// // function handleNotifCard(e) {
// //   const target = e.target.closest(".unread");

// //   if (!target) return;

// //   target.classList.remove("unread");
// //   delete target.dataset.counter;
// // }
// readAllBtn.addEventListener("click", handleReadAllBtn);

// // unread.forEach((card) => card.addEventListener("click", handleNotifCard));
