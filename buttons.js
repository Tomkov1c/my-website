window.setInterval( function(){
    MoveBackOnBeckPress();
  },50)

function MoveBackOnBeckPress() {
    if(document.location.hash == "" || document.location.hash == "#nav" || document.location.hash == "#") {
        document.getElementById("body").classList.remove("bodyAbout");
        document.getElementById("body").classList.remove("bodyProjects");
        document.getElementById("body").classList.remove("bodySocials");
        document.getElementById("body").classList.remove("bodyWork");
    }else if(document.location.hash == "#sectionProjects") {
        document.getElementById("body").classList.add("bodyProjects");
    }else if(document.location.hash == "#sectionSocials") {
        document.getElementById("body").classList.add("bodySocials");
    }else if(document.location.hash == "#sectionAbout") {
        document.getElementById("body").classList.add("bodyAbout");
    }else if(document.location.hash == "#sectionWork") {
        document.getElementById("body").classList.add("bodyWork");
    }else {

    }
}

function GetCurrentSection() {
    var currentSection = document.getElementById("body").className.split(" ");
    console.log(currentSection);
}


function AboutSection() {
    document.getElementById("body").classList.add("bodyAbout");
    document.location.hash = "#sectionAbout";

    GetCurrentSection();

}
function ProjectsSection() {
    document.getElementById("body").classList.add("bodyProjects");
    document.location.hash = "#sectionProjects";

    GetCurrentSection();

}
function SocialsSection() {
    document.getElementById("body").classList.add("bodySocials");
    document.location.hash = "#sectionSocials";

    GetCurrentSection();

}
function WorkSection() {
    document.getElementById("body").classList.add("bodyWork");
    document.location.hash = "#sectionWork";

    GetCurrentSection();

}

function AboutSectionRem() {
    document.getElementById("body").classList.remove("bodyAbout");
    document.location.hash = "#";

    GetCurrentSection();

}
function ProjectsSectionRem() {
    document.getElementById("body").classList.remove("bodyProjects");
    document.location.hash = "#";

    GetCurrentSection();

}