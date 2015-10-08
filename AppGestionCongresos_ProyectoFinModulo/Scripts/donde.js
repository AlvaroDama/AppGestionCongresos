var centro = "40.420405,-3.705030";

function position(pos) {

    var pm = pos.coords.latitude + "," + pos.coords.longitude;
    var url = "http://maps.googleapis.com/maps/api/staticmap?center=" + pm + "&zoom=16&size=400x400&sensor=false";
    var canv = document.getElementById("mapaCliente");
    var context = canv.getContext("2d");
    var img = document.getElementById("imgOculta");


    document.getElementById("imgOculta").src = url;

    context.drawImage(img, 0, 0);

    context.strokeStyle = "red";
    context.font = "14px Arial";
    context.strokeText("Usted está aquí", 150, 150);
    context.strokeText("|", 200, 165);

    url = "http://maps.googleapis.com/maps/api/staticmap?center=" + centro + "&zoom=16&size=400x400&sensor=false";
    document.getElementById("imgOculta").src = url;

    canv = document.getElementById("mapaSite");
    context = canv.getContext("2d");

    context.drawImage(img, 0, 0);

    context.strokeStyle = "red";
    context.font = "14px Arial";
    context.strokeText("Nuestra empresa", 150, 150);
    context.strokeText("|", 200, 165);
    
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position, function (error) {
        alert("No se pudo acceder a la posición.");
    });

}


