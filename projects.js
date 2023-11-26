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

    document.getElementById("sectionProjectsProjectTitle").scrollIntoView({ behavior: "smooth", });

}