function Lapschool () {
    var filePath = 'projects/lapschool.txt';
    fetch(filePath)
    .then(response => response.text())
    .then(content => {
        document.getElementById('sectionProjectsProjectInfo').innerHTML = content;
    })

    document.getElementById("sectionProjectsProjectTitle").scrollIntoView({ behavior: "smooth", });
}