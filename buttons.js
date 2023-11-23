resume = "<strong>Dear Sir or Madam!</strong><br><br>\
I am writing this letter to express my profound motivation and commitment to pursuing excellence in the field of technology, and to showcase my enthusiasm for contributing my skills to a dynamic and forward-thinking company.<br><br>\
As a current student at the School of Electrical and Computer Engineering Velenje, I have not only acquired a solid foundation in the technical aspects of computing but have also cultivated a deep passion for web development and creative endeavors. My proficiency in programming languages such as C++, C#, and JavaScript, coupled with hands-on experience in web development technologies like HTML, CSS, PHP, and MySQL, positions me as a versatile and capable candidate.<br><br>\
In addition to my technical skills, I am well-versed in utilizing design tools like Photoshop, Illustrator, Lightroom, and Figma, showcasing a keen eye for aesthetics and creativity. My familiarity with video editing tools such as Premier Pro and After Effects adds an extra dimension to my skill set.<br><br>\
What sets me apart is not just my technical prowess but also my understanding of the importance of collaboration and teamwork. Having worked on various projects, I have honed my ability to contribute effectively to group efforts, maintain a positive attitude, and uphold a strong work ethic and mindset.<br><br>\
I am excited about the possibility of applying my skills and knowledge to a real-world professional setting. Your company, known for mention something specific about the company, aligns perfectly with my career aspirations, and I am eager to contribute to its continued success.<br><br>\
I sincerely appreciate your consideration of my application and look forward to the opportunity to discuss how my skills and experiences align with the goals of your esteemed company. Thank you for your time and consideration.<br><br>\
Sincerely,<br>\
Tom Kliner\
<hr id=\"sectionWorkResumeExtender\">\
"

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
function SocialsSectionRem() {
    document.getElementById("body").classList.remove("bodySocials");
    document.location.hash = "#";

    GetCurrentSection();

}



function ProjectClick(e) {
    var inner = event.target.innerHTML;



    var projectButtons = document.getElementsByClassName("sectionProjectsProjectButtonActive");
    for (let i = 0; i < projectButtons.length; i++) {
        projectButtons[i].classList.remove("sectionProjectsProjectButtonActive");
    }

    projectButtons = document.getElementsByClassName("sectionProjectsProjectButton");
    for (let i = 0; i < projectButtons.length; i++) {
        projectButtons[i].id = "";
    }
    event.target.id = "sectionProjectsProjectButtonActive";
    for (let i = 0; i < projectButtons.length; i++) {
        if (projectButtons[i].id != "sectionProjectsProjectButtonActive") {
            projectButtons[i].classList.add("sectionProjectsProjectButtonInactive");
        }
    }

    document.getElementById("sectionProjectsProjectTitle").scrollIntoView({ behavior: "smooth", });
    document.getElementById("sectionProjectsProjectButtonActive").classList.remove("sectionProjectsProjectButtonInactive");
}