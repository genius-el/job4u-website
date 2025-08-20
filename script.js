'use strict'

// Select Elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeInfoModal = document.querySelector('.close-infoModal');
const showUpdate = document.querySelector('.show-update');

showUpdate.addEventListener('click', function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

closeInfoModal.addEventListener('click', function() {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
});

