function updatePage() {
    let name = document.getElementById("nameIn").value;
    let color = document.getElementById("color").value;
    let about = document.getElementById("aboutIn").value;

    if (name.trim() !== "") {
        document.getElementById("nameOut").textContent = name;
    }

    if (about.trim() !== "") {
        document.getElementById("aboutOut").textContent = about;
    }
    document.body.style.backgroundColor = color;
}