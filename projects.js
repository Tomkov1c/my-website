function DisplayProject (e) {
    var inner = event.target.innerHTML;
    let string = inner.toLowerCase();

    let path = string + ".txt";
    var filePath = 'projects/' + path;
    fetch(filePath)
    .then(response => response.text())
    .then(content => {
        document.getElementById('sectionProjectsProjectInfo').innerHTML = content;
    })


}

async function ProjectClick(e) {
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