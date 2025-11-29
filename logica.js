// Asignación simple de bandera según país
const flags = {
    "Spain": "https://flagcdn.com/es.svg",
    "Argentina": "https://flagcdn.com/ar.svg",
    "France": "https://flagcdn.com/fr.svg",
    "England": "https://flagcdn.com/gb.svg",
    "Portugal": "https://flagcdn.com/pt.svg",
    "Netherlands": "https://flagcdn.com/nl.svg",
    "Brazil": "https://flagcdn.com/br.svg",
    "Belgium": "https://flagcdn.com/be.svg",
    "Italy": "https://flagcdn.com/it.svg",
    "Germany": "https://flagcdn.com/de.svg"
};

async function cargarRanking() {
    try {
        const respuesta = await fetch("http://127.0.0.1:8000/ranking");
        const data = await respuesta.json();

        const tbody = document.querySelector("#tablaRanking tbody");
        tbody.innerHTML = "";

        data.items.slice(0, 10).forEach(item => {
            const bandera = flags[item.pais] || "";

            tbody.innerHTML += `
                <tr>
                    <td>${item.rango}</td>
                    <td>
                        <img class="flag" src="${bandera}" alt=""> 
                        ${item.pais}
                    </td>
                    <td>${item.puntos}</td>
                </tr>
            `;
        });

    } catch (error) {
        console.error("Error cargando ranking:", error);
    }
}

cargarRanking();
