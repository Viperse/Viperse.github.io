const home = document.querySelector('#home');
const homeLink = document.querySelector('#home-link');
const aboutMe = document.querySelector('#about-me');
const aboutMeLink = document.querySelector('#about-me-link');
const skils = document.querySelector('#skils');
const skilsLink = document.querySelector('#skils-link');
const eduCerti = document.querySelector('#edu-certi');
const eduCertiLink = document.querySelector('#edu-certi-link');
const project = document.querySelector('#project');
const projectLink = document.querySelector('#project-link');
const contact = document.querySelector('#contact');
const contactLink = document.querySelector('#contact-link');

let currentDiv = home;

window.addEventListener('wheel', function(event) {
    if(event.deltaY > 0) {
        if(currentDiv == home) {
            window.scrollTo({top: aboutMe.offsetTop, behavior: 'smooth'});
            currentDiv = aboutMe;
        }

        else if(currentDiv == aboutMe) {
            window.scrollTo({top: skils.offsetTop, behavior: 'smooth'});
            currentDiv = skils;
        }

        else if(currentDiv == skils) {
            window.scrollTo({top: eduCerti.offsetTop - 0.5, behavior: 'smooth'});
            currentDiv = eduCerti;
        }

        else if(currentDiv == eduCerti) {
            window.scrollTo({top: project.offsetTop, behavior: 'smooth'});
            currentDiv = project;
        }

        else if(currentDiv == project) {
            window.scrollTo({top: contact.offsetTop, behavior: 'smooth'});
            currentDiv = contact;
        }
    }

    else {
        if(currentDiv == contact) {
            this.window.scrollTo({top: project.offsetTop, behavior: 'smooth'});
            currentDiv = project;
        }
        
        else if(currentDiv == project) {
            this.window.scrollTo({top: eduCerti.offsetTop - 0.5, behavior: 'smooth'});
            currentDiv = eduCerti;
        }

        else if(currentDiv == eduCerti) {
            this.window.scrollTo({top: skils.offsetTop, behavior: 'smooth'});
            currentDiv = skils;
        }

        else if(currentDiv == skils) {
            this.window.scrollTo({top: aboutMe.offsetTop, behavior: 'smooth'});
            currentDiv = aboutMe;
        }

        else if(currentDiv == aboutMe) {
            this.window.scrollTo({top: home.offsetTop, behavior: 'smooth'});
            currentDiv = home;
        }
        
    }
});

window.addEventListener('scroll', function() {
    if(aboutMe.getBoundingClientRect().top === 0) {
        aboutMeLink.style.color = 'steelblue';
    } else {
        aboutMeLink.style.color = 'black';
    }

    if(skils.getBoundingClientRect().top === 0) {
        skilsLink.style.color = 'steelblue';
    } else {
        skilsLink.style.color = 'black';
    }

    if(eduCerti.getBoundingClientRect().top === 0) {
        eduCertiLink.style.color = 'steelblue';
    } else {
        eduCertiLink.style.color = 'black';
    }

    if(project.getBoundingClientRect().top === 0) {
        projectLink.style.color = 'steelblue';   
    } else {
        projectLink.style.color = 'black';
    }

    if(contact.getBoundingClientRect().top === 0) {
        contactLink.style.color = 'steelblue';
    } else {
        contactLink.style.color = 'black';
    }
})