let frases=["El respeto al derecho ajeno es la paz", "No contaban con mi astucia",
"La tierra es de quien la trabaja", "With grat power comes great responsibility", 
"El que madruga dios lo ayud"];

function obteneerFrase(){

    return indice = Math.floor(Math.random() * frases.length);
    return frases[indice];
}

module.exports.obteneerFrase=obteneerFrase;

// console.log(module);


