resume = "<h2>This page needs to be rewritten. Pls hire me.</h2>\
<hr id=\"sectionWorkResumeExtender\">"

document.getElementById("sectionWorkResume").innerHTML = resume;


window.setInterval( function(){
    MoveBackOnBeckPress();
  },50)

function MoveBackOnBeckPress() {
    if(document.location.hash == "" || document.location.hash == "#nav" || document.location.hash == "#") {
        document.getElementById("body").classList.remove("bodyAbout");
        document.getElementById("body").classList.remove("bodyProjects");
        document.getElementById("body").classList.remove("bodySocials");
        document.getElementById("body").classList.remove("bodyWork");
    }else if(document.location.hash == "#Projects") {
        document.getElementById("body").classList.add("bodyProjects");
    }else if(document.location.hash == "#Socials") {
        document.getElementById("body").classList.add("bodySocials");
    }else if(document.location.hash == "#About") {
        document.getElementById("body").classList.add("bodyAbout");
    }else if(document.location.hash == "#Work") {
        document.getElementById("body").classList.add("bodyWork");
    }else {

    }
}

function GetCurrentSection() {
    var currentSection = document.getElementById("body").className.split(" ");
}


function AboutSection() {
    document.getElementById("body").classList.add("bodyAbout");
    document.location.hash = "#About";

    GetCurrentSection();

}
function ProjectsSection() {
    document.getElementById("body").classList.add("bodyProjects");
    document.location.hash = "#Projects";

    GetCurrentSection();
    
    if (document.body.clientWidth < 1000) {
        document.getElementById("sectionProjectsProjectTitle").scrollIntoView({ behavior: "smooth", });
        document.getElementById("sectionProjectsLSide").style.display = "none";

    }

}
function SocialsSection() {
    document.getElementById("body").classList.add("bodySocials");
    document.location.hash = "#Socials";

    GetCurrentSection();

}
function WorkSection() {
    document.getElementById("body").classList.add("bodyWork");
    document.location.hash = "#Work";

    GetCurrentSection();

}

function AboutSectionRem() {
    document.getElementById("body").classList.remove("bodyAbout");
    document.location.hash = "";

    GetCurrentSection();

}
function ProjectsSectionRem() {
    document.getElementById("body").classList.remove("bodyProjects");
    document.location.hash = "";

    GetCurrentSection();

}
function SocialsSectionRem() {
    document.getElementById("body").classList.remove("bodySocials");
    document.location.hash = "";

    GetCurrentSection();

}
function WorkSectionRem() {
    document.getElementById("body").classList.remove("bodyWork");
    document.location.hash = "";

    GetCurrentSection();

}

