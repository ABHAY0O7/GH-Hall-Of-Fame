getData();
var data;
async function getData() {

    const response = await fetch('HOF.csv');
    data = await response.text();
    console.log(data);
    const rows = data.split('\n').slice(1);
    const loop = rows.forEach(row => {
        const elt = row.split(',');
            var element = " <a class=\"carousel-item-image\" href=\"#one!\"><img src = \"Rectangle 17.png\" /></a> <h5>" +
                elt[0] + "</h5> <h6>" + elt[2] + " Wing" + " '" + elt[1].substring(2) + "</h6>";
            var elem = document.createElement("div");
            elem.className = "carousel-item";
            elem.innerHTML = element;
            document.getElementById(elt[1]).appendChild(elem);
    });
}
setTimeout(() => {
    $(document).ready(function () {
        $(".carousel").carousel();
    });
}, 300);
