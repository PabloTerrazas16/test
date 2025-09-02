function updateClock() {
    const now = new Date
    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");
    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;

}
  
setInterval(updateClock, 1000);
updateClock();

function updateDate() {
    const rightNow = new Date();
    let day = String(rightNow.getDate()).padStart(2, "0");
    let month = String(rightNow.getMonth() - 1).padStart(2, "0");
    let year = rightNow.getFullYear();
    document.getElementById("date").textContent = `${day}/${month}/${year}`;

}
 
setInterval(updateDate, 1000);

updateDate();
