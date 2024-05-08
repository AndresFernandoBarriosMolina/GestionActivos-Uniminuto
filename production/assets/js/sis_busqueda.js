<script>
  document.addEventListener('DOMContentLoaded', function() {
    const criterioSelect = document.getElementById('criterio');
    const busquedaSerialDiv = document.getElementById('busquedaSerial');
    const busquedaProgramaDiv = document.getElementById('busquedaPrograma');
    const formSerial = document.getElementById('formSerial');
    const formPrograma = document.getElementById('formPrograma');
    const resultadoDiv = document.getElementById('resultado');

    criterioSelect.addEventListener('change', function() {
      const criterio = criterioSelect.value;
      if (criterio === 'serial') {
        busquedaSerialDiv.style.display = 'block';
        busquedaProgramaDiv.style.display = 'none';
        resultadoDiv.innerHTML = ''; // Limpiar resultados anteriores
      } else if (criterio === 'programa') {
        busquedaSerialDiv.style.display = 'none';
        busquedaProgramaDiv.style.display = 'block';
        resultadoDiv.innerHTML = ''; // Limpiar resultados anteriores
      }
    });

    formSerial.addEventListener('submit', function(event) {
      event.preventDefault();
      const serial = document.getElementById('serialInput').value;
      buscarPorSerial(serial);
    });

    formPrograma.addEventListener('submit', function(event) {
      event.preventDefault();
      const nombrePrograma = document.getElementById('nombreProgramaInput').value;
      buscarPorPrograma(nombrePrograma);
    });

    function buscarPorSerial(serial) {
      // Realizar la consulta AJAX al servidor con el serial
      fetch('buscar_por_serial.php?serial=' + encodeURIComponent(serial))
        .then(response => {
          if (response.ok) {
            return response.text();
          } else {
            throw new Error('Error en la solicitud AJAX');
          }
        })
        .then(data => {
          // Convertir la respuesta XML en un objeto DOM
          const parser = new DOMParser();
          const xmlData = parser.parseFromString(data, 'text/xml');
          mostrarResultados(xmlData); // Llamar a la función mostrarResultados con el objeto DOM
        })
        .catch(error => {
          console.error(error);
        });
    }

    function buscarPorPrograma(nombrePrograma) {
      // Realizar la consulta AJAX al servidor con el nombre del programa
      fetch('buscar_por_programa.php?nombre_programa=' + encodeURIComponent(nombrePrograma))
        .then(response => {
          if (response.ok) {
            return response.text();
          } else {
            throw new Error('Error en la solicitud AJAX');
          }
        })
        .then(data => {
          // Convertir la respuesta XML en un objeto DOM
          const parser = new DOMParser();
          const xmlData = parser.parseFromString(data, 'text/xml');
          mostrarResultados(xmlData); // Llamar a la función mostrarResultados con el objeto DOM
        })
        .catch(error => {
          console.error(error);
        });
    }

    function mostrarResultados(data) {
      // Mostrar los resultados en la tabla
      resultadoDiv.innerHTML = ''; // Limpiar resultados anteriores
      const table = document.createElement('table');
      table.className = 'table table-sm';
      const headerRow = table.insertRow();

      // Obtener la lista de elementos "row" del objeto DOM
      const rows = data.getElementsByTagName('row');

      // Crear los encabezados de la tabla
      const firstRow = rows[0];
      for (let i = 0; i < firstRow.children.length; i++) {
        const headerCell = document.createElement('th');
        headerCell.textContent = firstRow.children[i].tagName;
        headerRow.appendChild(headerCell);
      }

      // Crear las filas de datos de la tabla
      for (let i = 0; i < rows.length; i++) {
        const row = table.insertRow();
        const cells = rows[i].children;
        for (let j = 0; j < cells.length; j++) {
          const cell = row.insertCell();
          // Verificar si el elemento es un enlace
          if (cells[j].tagName === 'computadora_id') {
            const computadoraId = cells[j].textContent;
            const link = document.createElement('a');
            link.href = `data_detalle.php?computadora_id=${encodeURIComponent(computadoraId)}`;
            link.textContent = computadoraId;
            cell.appendChild(link);
          } else {
            cell.textContent = cells[j].textContent;
          }
        }
      }

      // Mostrar el número de resultados obtenidos
      const numResultsRow = table.insertRow();
      const numResultsCell = numResultsRow.insertCell();
      numResultsCell.setAttribute('colspan', firstRow.children.length);
      numResultsCell.textContent = `Número de resultados: ${rows.length}`;

      resultadoDiv.appendChild(table);
    }
  });
</script>