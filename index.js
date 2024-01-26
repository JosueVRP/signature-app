const tableBody = document.getElementById("table-body");

console.log(tableBody);

let employesData;

async function getData() {
    const response = await fetch('./trabajadores.json');
    const data = await response.json();
    employesData = data.trabajadores;
    insertDataTable();
}

function insertDataTable() {
    employesData.forEach(function (employe) {

        // CREACION DE ETIQUETAS 
        const newRow = document.createElement("tr");
        const nameData = document.createElement("td");
        const areaData = document.createElement("td");
        const signData = document.createElement("td");
        const editData = document.createElement("td");
        const editButton = document.createElement("button");

        // CAPTURAR LA DATA POR EMPLEADO
        const fullName = `${employe.nombre_completo}`;
        const area = `${employe.area}`;
        const photo = `${employe.tiene_foto}`;

        // INSERTANDO EN TD
        nameData.innerHTML = fullName;
        areaData.innerHTML = area;
        // Condicionales fila (subio foto S/N)
        if (photo == "true") {
            signData.innerHTML = "Si";
        }
        else { signData.innerHTML = "No" };
        // Condicional si se editara con el boton o actualizara
        if (photo == "true") {
            editButton.innerHTML = "Editar";
        }
        else { editButton.innerHTML = "Subir" };
        // Boton
        editData.append(editButton);

        // INSERTANDO EN TR
        newRow.append(nameData);
        newRow.append(areaData);
        newRow.append(signData);
        newRow.append(editData);

        // INSERTANDO LA NUEVA FILA EN EL BODY
        tableBody.append(newRow);

    })
}

getData();

