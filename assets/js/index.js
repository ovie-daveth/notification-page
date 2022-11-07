//declarations for the header
const unreadmessages = document.querySelectorAll(".unread");
const  unread = document.getElementById("notification");
const markAll = document.querySelector("#mark");


unread.innerText = unreadmessages.length; //count the number of classes tagged unread

//on clicking each unread bar removes the unread class 
unreadmessages.forEach((message) => {
    message.addEventListener("click", () => {
        message.classList.remove("unread");
        const newUnreadMessages = document.querySelectorAll(".unread");
        unread.innerText = newUnreadMessages.length;
    })
})

//on clicking the mark all as read, removes all unread class
markAll.addEventListener("click", () => {
    unreadmessages.forEach((message) => {
        message.classList.remove("unread");
        const newUnreadMessages = document.querySelectorAll(".unread");
        unread.innerText = newUnreadMessages.length;
    })
    
})


const message = document.querySelector(".message");
const notice = document.querySelector(".notification-1");

notice.addEventListener("click", () => {
    notice.classList.toggle("active");
    message.classList.toggle("active");
})

document.querySelectorAll(".notice").forEach(n => n.addEventListener("click", () => {
    notice.classList.remove("active");
    message.classList.remove("active");
}))
