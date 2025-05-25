/*!
* Start Bootstrap - Full Width Pics v5.0.6 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

let state = false;
let btn = document.querySelector(".btn");
let record = document.querySelector(".record");
let toneArm = document.querySelector(".tone-arm");
let song = document.querySelector(".my-song");
let slider = document.querySelector(".slider");

btn.addEventListener("click", () => {
  if (state == false) {
    record.classList.add("on");
    toneArm.classList.add("play");
    setTimeout(() => {
      song.play();
    }, 1000);
  } else {
    record.classList.remove("on");
    toneArm.classList.remove("play");
    song.pause();
  }
  state = !state;
});

slider.addEventListener("input", (e) => {
  song.volume = Number(e.target.value);
});

// ... existing code ...

document.addEventListener('DOMContentLoaded', function() {
    // Record player code
    const toggleButton = document.getElementById('togglePlayer');
    const playerContent = document.getElementById('playerContent');
    const container = document.querySelector('.record-player-container');
    let isExpanded = false;

    toggleButton.addEventListener('click', function() {
        isExpanded = !isExpanded;
        
        // Toggle the player content visibility
        playerContent.classList.toggle('hidden');
        
        // Update the button icon
        const icon = toggleButton.querySelector('i');
        if (isExpanded) {
            icon.classList.remove('fa-chevron-right');
            icon.classList.add('fa-chevron-left');
            container.style.transform = 'translate(165px, -50%) rotate(-90deg)';
        } else {
            icon.classList.remove('fa-chevron-left');
            icon.classList.add('fa-chevron-right');
            container.style.transform = 'translate(-100%, -50%) rotate(-90deg)';
        }
    });
});

// Arrow toggling functionality - moved outside the record player code
document.addEventListener('DOMContentLoaded', function() {
    const toggleArrow = document.getElementById('toggleArrow');
    const musicIcon = toggleArrow.querySelector('i');
    const recordPlayer = document.querySelector('.record-player-container');
    let isPlayerVisible = false;

    // Set initial position (off-screen)
    recordPlayer.style.transform = 'translateX(-200%) translateY(-50%) scale(0.4)';

    toggleArrow.addEventListener('click', function() {
        isPlayerVisible = !isPlayerVisible;
        
        // Toggle music note rotation
        if (!isPlayerVisible) {
            musicIcon.style.transform = 'rotate(0deg)';
            // Slide the player in
            recordPlayer.style.transform = 'translateX(0) translateY(-50%) scale(0.4)';
        } else {
            musicIcon.style.transform = 'rotate(180deg)';
            // Slide the player out
            recordPlayer.style.transform = 'translateX(-200%) translateY(-50%) scale(0.4)';
        }
    });
});