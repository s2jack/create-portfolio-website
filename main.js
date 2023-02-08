/* eslint-disable linebreak-style */

const hamimage = document.querySelector('#menubutton');
const shape01 = document.querySelector('#shape01');
const mobileMenu = document.querySelector('#mobile_menu');
const homeSec = document.querySelector('#home_sec');
const crossImg = document.querySelector('#close_icon');
const mobMenuItems = document.querySelectorAll('.mob_menu_item');
const pr_button = document.querySelectorAll(".pr_btn");
const body = document.getElementsByTagName('body')[0];
const projectSection = document.querySelector('#project_sec');

const projectData = [
  {
    title: 'Project Name goes here 01',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text." ,
    long_description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \nUt aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.' ,
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    button: 'See Project',
    image: './images/Snapshoot Portfolio-desktop.png',
    link: 'https://aminederbal.github.io/Portfolio/',
    github: 'https://github.com/AmineDerbal/Portfolio',
  },
  {
    title: 'Project Name goes here 02',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    image: './images/Snapshoot Portfolio-desktop.png',
    link: 'https://aminederbal.github.io/Portfolio/',
    github: 'https://github.com/AmineDerbal/Portfolio',
  },
  {
    title: 'Project Name goes here 03',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    image: './images/Snapshoot Portfolio-desktop.png',
    link: 'https://aminederbal.github.io/Portfolio/',
    github: 'https://github.com/AmineDerbal/Portfolio',
  },
  {
    title: 'Project Name goes here 04',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    image: './images/Snapshoot Portfolio-desktop.png',
    link: 'https://aminederbal.github.io/Portfolio/',
    github: 'https://github.com/AmineDerbal/Portfolio',
  },
  {
    title: 'Project Name goes here 05',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    image: './images/Snapshoot Portfolio-desktop.png',
    link: 'https://aminederbal.github.io/Portfolio/',
    github: 'https://github.com/AmineDerbal/Portfolio',
  },
  {
    title: 'Project Name goes here 06',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    image: './images/Snapshoot Portfolio-desktop.png',
    link: 'https://aminederbal.github.io/Portfolio/',
    github: 'https://github.com/AmineDerbal/Portfolio',
  },
];

const addCardName = (prData) => {
  const title = document.createElement('h3');
  title.textContent = prData[0].title;
  return title;
}

const addTechsList = (prData) => {
  const modelTechsList = document.createElement('ul');
  for (let i = 0; i < prData[0].technologies.length; i++) {
    const modelTech = document.createElement('li');
    modelTech.textContent = prData[0].technologies[i];
    modelTechsList.appendChild(modelTech);
  }
  return modelTechsList;
}

const popUpOpen = () => {
  const projectPopUp = document.createElement('div');
  projectPopUp.id = "pr_popUp";
  projectSection.appendChild(projectPopUp);
  const popUpCloseIcon = document.createElement('div');
  popUpCloseIcon.id = 'pop_closeIcon';
  projectPopUp.appendChild(popUpCloseIcon);
  body.style.overflow = 'hidden';
  const popUpContainer = document.createElement('div');
  popUpContainer.id = 'pr_popUp_items';
  projectPopUp.appendChild(popUpContainer);
  
  const cardName = document.createElement('div');
  cardName.className = 'card_name';
  popUpContainer.appendChild(cardName);
  cardName.appendChild(addCardName(projectData));

  const techList = document.createElement('div');
  techList.className = 'tech_container';
  popUpContainer.appendChild(techList);
  techList.appendChild(addTechsList(projectData));

  const imageViewer = document.createElement('div');
  imageViewer.className = 'image_viewer';
  popUpContainer.appendChild(imageViewer);
  const previewImage = document.createElement('div');
  previewImage.className = 'big_image';
  imageViewer.appendChild(previewImage);
  const imageGrid = document.createElement('span');
  imageGrid.className = 'sm_image_grid';
  imageViewer.appendChild(imageGrid);
  const sImage01 = document.createElement('div');
  sImage01.className = 'sImage';
  sImage01.id = 'sImage_01';
  imageGrid.appendChild(sImage01);
  const sImage02 = document.createElement('div');
  sImage02.className = 'sImage';
  sImage02.id = 'sImage_02';
  imageGrid.appendChild(sImage02);
  const sImage03 = document.createElement('div');
  sImage03.className = 'sImage';
  sImage03.id = 'sImage_03';
  imageGrid.appendChild(sImage03);
  const sImage04 = document.createElement('div');
  sImage04.className = 'sImage';
  sImage04.id = 'sImage_04';
  imageGrid.appendChild(sImage04);

  const projectDescription = document.createElement('div');
  projectDescription.id = 'popUp_description';
  popUpContainer.appendChild(projectDescription);
  const popUpText = document.createElement('p');
  popUpText.id = 'popUpText';
  projectDescription.appendChild(popUpText);
  popUpText.textContent = projectData[0].long_description;

  const buttonContainer = document.createElement('div');
  buttonContainer.id = 'btn_container';
  popUpContainer.appendChild(buttonContainer);
  const seeLiveButton = document.createElement('button');
  seeLiveButton.id = 'seeLive_btn';
  seeLiveButton.className = 'detail_btn';
  buttonContainer.appendChild(seeLiveButton);
  const seeLiveText = document.createElement('p');
  seeLiveText.id = 'seeLive_txt';
  seeLiveText.className = 'btn_txt';
  seeLiveText.textContent = 'See Live';
  seeLiveButton.appendChild(seeLiveText);
  const seeLiveIcon = document.createElement('div');
  seeLiveIcon.id = 'seeLive_icon';
  seeLiveButton.appendChild(seeLiveIcon);
  const seeSourceButton = document.createElement('button');
  seeSourceButton.id = 'seeSource_btn';
  seeSourceButton.className = 'detail_btn';
  buttonContainer.appendChild(seeSourceButton);
  const seeSourceText = document.createElement('p');
  seeSourceText.id = 'seeSource_txt';
  seeSourceText.className = 'btn_txt';
  seeSourceText.textContent = 'See Source'
  seeSourceButton.appendChild(seeSourceText);
  const seeSourceIcon = document.createElement('div');
  seeSourceIcon.id = 'seeSource_icon';
  seeSourceButton.appendChild(seeSourceIcon);

  popUpCloseIcon.addEventListener('click', popUpClose);
}

const popUpClose = () => {
  body.style.overflow = 'unset';

  const projectPopUp = document.getElementById('pr_popUp');
  projectPopUp.parentElement.removeChild(projectPopUp);
}

const menuOpen = () => {
  hamimage.style.display = 'none';
  shape01.style.display = 'none';
  mobileMenu.style.display = 'flex';
  homeSec.style.visibility = 'hidden';
};

const menuClose = () => {
  hamimage.style.display = 'flex';
  shape01.style.display = 'flex';
  mobileMenu.style.display = 'none';
  homeSec.style.visibility = 'visible';
};

pr_button.forEach((item) => {
  item.addEventListener('click', popUpOpen);
});
hamimage.addEventListener('click', menuOpen);
crossImg.addEventListener('click', menuClose);
mobMenuItems.forEach((item) => {
  item.addEventListener('click', menuClose);
});
