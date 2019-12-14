// JavaScript source code
var listado;
function getDataFromServer() {
    $.ajax({
        type: "GET",
        url: "https://api.kivaws.org/v1/loans/newest.json",
        success: function (data) {
            alert("conectado al server"),
                parseData(data);
        },
        error: function (data) {
            alert("error de conexion")
        }
    });
}
getDataFromServer();


function parseData(data) {
    listado = data;
    //var html = "<label>Deudores</label>";
    //html += '<select id="lista">';
    html = "";
    var loans = data.loans;
    for (i = 0; i < loans.length; i++) {
        html += '<option value="' + loans[i].id + '">' + loans[i].name + '</option>';
    }
    html += '</select>';
    $('#lista').append(html);
}
$('#lista').change(function () {
    var html = '<label>Estatus</label>';
    html += '<label>';
    var miId = $("#lista").val();
    var loans = listado.loans;

    alert("entro");
    for (i = 0; i < loans.length; i++) {
        if (loans[i].id == miId) {
            html += loans[i].status + '</label><br>';
            html += '<label> ' + loans[i].activity + '</label><br>';
            html += '<label> ' + loans[i].sector + '</label><br>';
            break;
        }
    }
    $('#datosDeudor').empty();
    $('#datosDeudor').append(html);
});