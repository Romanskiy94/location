'use strict';
/*====================Работа с Локалсторидж хостом===============================*/
/*
const autoUser = {
    fullName: "Name Surname",
    email: "test@mail.com",
};
window.localStorage.setItem("test", JSON.stringify(autoUser));
window.onload = function () {
    const autoUser1 = window.localStorage.getItem('test');
    const parsedUser = JSON.parse(autoUser1);
    console.log(parsedUser);

};
*/
/*========Работа с Локалсторидж хостом получение данных из вне===================*/
/*
const AUTHORIZED_USER = 'AUTHORIZED_USER';

function User(name,surname,email) {
    this.name = name;
    this.surname = surname;
    this.email = email;

}
const nameInput = document.querySelector("input[name='name']");
const surnameInput = document.querySelector("input[name='surname']");
const emailInput = document.querySelector("input[name='email']");
const loginButton = document.querySelector("#loginButton");

loginButton.onclick = function (e) {
    const user = new User(nameInput.value,surnameInput.value,emailInput.value);
    localStorage.setItem(AUTHORIZED_USER, JSON.stringify(user));
};
*/

/*==========================Работа с Локациями ==================================*/
const locationPropsList = document.getElementById('location');

for( let prop in location){

    if (typeof  location[prop] === 'string'){
        const listItem =document.createElement('li');
   listItem.innerText = `${prop} = "${location[prop]}"`;
      locationPropsList.appendChild(listItem)
    }

}
/*============================Перезагрузка страницы=============================*/
const reloadButton = document.getElementById('reload');

reloadButton.addEventListener('click', function () {
    location.reload();

});

const goToAboutButton = document.getElementById('about');

goToAboutButton.onclick = function () {
    location.assign( `${location.origin}pages/about.html`);

};