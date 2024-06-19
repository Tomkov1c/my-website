function ChangState() {
    sidebar = document.getElementById("sidebar");
    if(sidebar.getAttribute('data-open') == "true") {
        sidebar.dataset.open = "false";
    }else if(sidebar.getAttribute('data-open') == "false") {
        sidebar.dataset.open = "true";
    }else {

    }
}
