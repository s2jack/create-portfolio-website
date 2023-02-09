/* eslint-disable linebreak-style */

const hamimage = document.querySelector('#menubutton');
const shape01 = document.querySelector('#shape01');
const mobileMenu = document.querySelector('#mobile_menu');
const homeSec = document.querySelector('#home_sec');
const crossImg = document.querySelector('#close_icon');
const mobMenuItems = document.querySelectorAll('.mob_menu_item');
const body = document.getElementsByTagName('body')[0];
const projectSection = document.querySelector('#project_sec');

const projectData = [
  {
    title: 'Project name goes here',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    long_description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    button: 'See Project',
    image: 'images/pr01img.png',
    link: 'https://s2jack.github.io/',
    github: 'https://github.com/s2jack/create-portfolio-website',
  },
  {
    title: 'Project Name goes here',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    image: 'images/pr02img.png',
    link: 'https://s2jack.github.io/',
    github: 'https://github.com/s2jack/create-portfolio-website',
  },
  {
    title: 'Project Name goes here',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    image: 'images/pr03img.png',
    link: 'https://s2jack.github.io/',
    github: 'https://github.com/s2jack/create-portfolio-website',
  },
  {
    title: 'Project Name goes here',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    image: 'images/pr04img.png',
    link: 'https://s2jack.github.io/',
    github: 'https://github.com/s2jack/create-portfolio-website',
  },
  {
    title: 'Project Name goes here',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    image: 'images/pr05img.png',
    link: 'https://s2jack.github.io/',
    github: 'https://github.com/s2jack/create-portfolio-website',
  },
  {
    title: 'Project Name goes here',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    image: 'images/pr06img.png',
    link: 'https://s2jack.github.io/',
    github: 'https://github.com/s2jack/create-portfolio-website',
  },
];

const addCardName = (prData) => {
  const title = document.createElement('h3');
  title.textContent = prData[0].title;
  return title;
};

const addTechsList = (prData) => {
  const modelTechsList = document.createElement('ul');
  for (let i = 0; i < prData[0].technologies.length; i += 1) {
    const modelTech = document.createElement('li');
    modelTech.textContent = prData[0].technologies[i];
    modelTechsList.appendChild(modelTech);
  }
  return modelTechsList;
};

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

const popUpClose = () => {
  body.style.overflow = 'unset';

  const projectPopUp = document.getElementById('pr_popUp');
  projectPopUp.parentElement.removeChild(projectPopUp);
};

const popUpOpen = () => {
  const projectPopUp = document.createElement('div');
  projectPopUp.id = 'pr_popUp';
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
  seeSourceText.textContent = 'See Source';
  seeSourceButton.appendChild(seeSourceText);
  const seeSourceIcon = document.createElement('div');
  seeSourceIcon.id = 'seeSource_icon';
  seeSourceButton.appendChild(seeSourceIcon);

  popUpCloseIcon.addEventListener('click', popUpClose);
};

const loadProjectSection = () => {
  const prContainer = document.createElement('div');
  prContainer.id = 'pr_container';
  projectSection.appendChild(prContainer);

  const prbg01 = document.createElement('div');
  prbg01.id = 'pr_bg_01';
  prContainer.appendChild(prbg01);

  const pr01 = document.createElement('div');
  pr01.id = 'pr01';
  prContainer.appendChild(pr01);
  const pr01img = document.createElement('div');
  pr01img.id = 'pr01img';
  pr01.appendChild(pr01img);
  const pr01info = document.createElement('div');
  pr01info.id = 'pr_info_01';
  pr01info.className = 'projectinfo';
  pr01.appendChild(pr01info);
  const pr01Name = document.createElement('div');
  pr01Name.className = 'projectname';
  pr01Name.textContent = projectData[0].title;
  pr01info.appendChild(pr01Name);
  const pr01TagCont = document.createElement('div');
  pr01TagCont.className = 'tech_cont';
  pr01info.appendChild(pr01TagCont);
  pr01TagCont.appendChild(addTechsList(projectData));
  const pr01Button = document.createElement('button');
  pr01Button.className = 'pr_btn';
  pr01Button.id = 'pr_btn_01';
  pr01Button.textContent = 'See this project';
  pr01info.appendChild(pr01Button);
  const pr01BtnSpan = document.createElement('span');
  pr01Button.appendChild(pr01BtnSpan);
  const pr01ButtonIcon = document.createElement('div');
  pr01ButtonIcon.id = 'ic_arr';
  pr01BtnSpan.appendChild(pr01ButtonIcon);

  const prbg02 = document.createElement('div');
  prbg02.id = 'pr_bg_02';
  prContainer.appendChild(prbg02);

  const pr02 = document.createElement('div');
  pr02.id = 'pr02';
  prContainer.appendChild(pr02);
  const pr02img = document.createElement('div');
  pr02img.id = 'pr02img';
  pr02.appendChild(pr02img);
  const pr02info = document.createElement('div');
  pr02info.id = 'pr_info_02';
  pr02info.className = 'projectinfo';
  pr02.appendChild(pr02info);
  const pr02Name = document.createElement('div');
  pr02Name.className = 'projectname';
  pr02Name.textContent = projectData[1].title;
  pr02info.appendChild(pr02Name);
  const pr02TagCont = document.createElement('div');
  pr02TagCont.className = 'tech_cont';
  pr02info.appendChild(pr02TagCont);
  pr02TagCont.appendChild(addTechsList(projectData));
  const pr02Button = document.createElement('button');
  pr02Button.className = 'pr_btn';
  pr02Button.id = 'pr_btn_02';
  pr02Button.textContent = 'See this project';
  pr02info.appendChild(pr02Button);
  const pr02BtnSpan = document.createElement('span');
  pr02Button.appendChild(pr02BtnSpan);
  const pr02ButtonIcon = document.createElement('div');
  pr02ButtonIcon.id = 'ic_arr';
  pr02BtnSpan.appendChild(pr02ButtonIcon);

  const pr03 = document.createElement('div');
  pr03.id = 'pr03';
  prContainer.appendChild(pr03);
  const pr03img = document.createElement('div');
  pr03img.id = 'pr03img';
  pr03.appendChild(pr03img);
  const pr03info = document.createElement('div');
  pr03info.id = 'pr_info_03';
  pr03info.className = 'projectinfo';
  pr03.appendChild(pr03info);
  const pr03Name = document.createElement('div');
  pr03Name.className = 'projectname';
  pr03Name.textContent = projectData[2].title;
  pr03info.appendChild(pr03Name);
  const pr03TagCont = document.createElement('div');
  pr03TagCont.className = 'tech_cont';
  pr03info.appendChild(pr03TagCont);
  pr03TagCont.appendChild(addTechsList(projectData));
  const pr03Button = document.createElement('button');
  pr03Button.className = 'pr_btn';
  pr03Button.id = 'pr_btn_03';
  pr03Button.textContent = 'See this project';
  pr03info.appendChild(pr03Button);
  const pr03BtnSpan = document.createElement('span');
  pr03Button.appendChild(pr03BtnSpan);
  const pr03ButtonIcon = document.createElement('div');
  pr03ButtonIcon.id = 'ic_arr';
  pr03BtnSpan.appendChild(pr03ButtonIcon);

  const pr04 = document.createElement('div');
  pr04.id = 'pr04';
  prContainer.appendChild(pr04);
  const pr04img = document.createElement('div');
  pr04img.id = 'pr04img';
  pr04.appendChild(pr04img);
  const pr04info = document.createElement('div');
  pr04info.id = 'pr_info_04';
  pr04info.className = 'projectinfo';
  pr04.appendChild(pr04info);
  const pr04Name = document.createElement('div');
  pr04Name.className = 'projectname';
  pr04Name.textContent = projectData[3].title;
  pr04info.appendChild(pr04Name);
  const pr04TagCont = document.createElement('div');
  pr04TagCont.className = 'tech_cont';
  pr04info.appendChild(pr04TagCont);
  pr04TagCont.appendChild(addTechsList(projectData));
  const pr04Button = document.createElement('button');
  pr04Button.className = 'pr_btn';
  pr04Button.id = 'pr_btn_04';
  pr04Button.textContent = 'See this project';
  pr04info.appendChild(pr04Button);
  const pr04BtnSpan = document.createElement('span');
  pr04Button.appendChild(pr04BtnSpan);
  const pr04ButtonIcon = document.createElement('div');
  pr04ButtonIcon.id = 'ic_arr';
  pr04BtnSpan.appendChild(pr04ButtonIcon);

  const pr05 = document.createElement('div');
  pr05.id = 'pr05';
  prContainer.appendChild(pr05);
  const pr05img = document.createElement('div');
  pr05img.id = 'pr05img';
  pr05.appendChild(pr05img);
  const pr05info = document.createElement('div');
  pr05info.id = 'pr_info_05';
  pr05info.className = 'projectinfo';
  pr05.appendChild(pr05info);
  const pr05Name = document.createElement('div');
  pr05Name.className = 'projectname';
  pr05Name.textContent = projectData[4].title;
  pr05info.appendChild(pr05Name);
  const pr05TagCont = document.createElement('div');
  pr05TagCont.className = 'tech_cont';
  pr05info.appendChild(pr05TagCont);
  pr05TagCont.appendChild(addTechsList(projectData));
  const pr05Button = document.createElement('button');
  pr05Button.className = 'pr_btn';
  pr05Button.id = 'pr_btn_05';
  pr05Button.textContent = 'See this project';
  pr05info.appendChild(pr05Button);
  const pr05BtnSpan = document.createElement('span');
  pr05Button.appendChild(pr05BtnSpan);
  const pr05ButtonIcon = document.createElement('div');
  pr05ButtonIcon.id = 'ic_arr';
  pr05BtnSpan.appendChild(pr05ButtonIcon);

  const pr06 = document.createElement('div');
  pr06.id = 'pr06';
  prContainer.appendChild(pr06);
  const pr06img = document.createElement('div');
  pr06img.id = 'pr06img';
  pr06.appendChild(pr06img);
  const pr06info = document.createElement('div');
  pr06info.id = 'pr_info_06';
  pr06info.className = 'projectinfo';
  pr06.appendChild(pr06info);
  const pr06Name = document.createElement('div');
  pr06Name.className = 'projectname';
  pr06Name.textContent = projectData[5].title;
  pr06info.appendChild(pr06Name);
  const pr06TagCont = document.createElement('div');
  pr06TagCont.className = 'tech_cont';
  pr06info.appendChild(pr06TagCont);
  pr06TagCont.appendChild(addTechsList(projectData));
  const pr06Button = document.createElement('button');
  pr06Button.className = 'pr_btn';
  pr06Button.id = 'pr_btn_06';
  pr06Button.textContent = 'See this project';
  pr06info.appendChild(pr06Button);
  const pr06BtnSpan = document.createElement('span');
  pr06Button.appendChild(pr06BtnSpan);
  const pr06ButtonIcon = document.createElement('div');
  pr06ButtonIcon.id = 'ic_arr';
  pr06BtnSpan.appendChild(pr06ButtonIcon);

  const prbg03 = document.createElement('div');
  prbg03.id = 'pr_bg_03';
  prContainer.appendChild(prbg03);

  pr01Button.addEventListener('click', popUpOpen);
  pr02Button.addEventListener('click', popUpOpen);
  pr03Button.addEventListener('click', popUpOpen);
  pr04Button.addEventListener('click', popUpOpen);
  pr05Button.addEventListener('click', popUpOpen);
  pr06Button.addEventListener('click', popUpOpen);
};

loadProjectSection();

hamimage.addEventListener('click', menuOpen);
crossImg.addEventListener('click', menuClose);
mobMenuItems.forEach((item) => {
  item.addEventListener('click', menuClose);
});
