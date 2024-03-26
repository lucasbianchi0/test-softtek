
const analizarCadena= (str) =>{
    const caracteres = str.split('');
    const repeticiones = new Map();
    
    caracteres.forEach(letra => {
        repeticiones.set(letra, (repeticiones.get(letra) || 0) + 1);
    });
    
    const max = () => {
        let letraMax = '';
        let maxRepeticiones = 0;
        repeticiones.forEach((repeticion, letra) => {
            if (repeticion > maxRepeticiones) {
                letraMax = letra;
                maxRepeticiones = repeticion;
            }
        });
        return `${letraMax}:${maxRepeticiones}`;
    };
    
    const min = () => {
        let letraMin = '';
        let minRepeticiones = Infinity;
        repeticiones.forEach((repeticion, letra) => {
            if (repeticion < minRepeticiones) {
                letraMin = letra;
                minRepeticiones = repeticion;
            }
        });
        return `${letraMin}:${minRepeticiones}`;
    };
    
    const getRepeticiones = () => {
        return repeticiones;
    };
    
    return {
        max,
        min,
        getRepeticiones
    };
}

export default analizarCadena;