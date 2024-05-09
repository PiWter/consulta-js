fetch('clientes.json', {method: 'GET'})
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        datos = data;
        mostrarContenido()
    });

    function borra(id) {

        const indice = datos.findIndex(cliente => cliente.Id === id);
        if (indice !== -1) {
            console.log("Usuario encontrado en el índice:", indice);
            datos.splice(indice, 1);
            console.log("Usuario borrado con ID:", id);

            mostrarContenido();

        } else {
            console.log("Usuario no encontrado");
        }
    }
    
    function mostrarContenido(){
        let html = '';
            datos.forEach(function(cliente) {
            
                html += `
                <tr style="padding: 50px">

                    <td>
                        ${cliente.Id}
                    </td>

                    <td>
                        ${cliente.Nombre}
                    </td>

                    <td>
                        <button class="btn btn-primary" onclick="borra(${cliente.Id})">Borrar</button>
                    </td>
                
                </tr>
                <br>
            
                `;
            });
            document.getElementById('resultado').innerHTML = html;
    }

    function AñadirUsuario() {
        var Id = document.getElementById("nid").value;
        var Nombre = document.getElementById("nnombre").value;
   
        datos.push({ Id, Nombre });
        console.log(datos);
    }