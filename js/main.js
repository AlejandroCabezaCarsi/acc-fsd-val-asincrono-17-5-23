

const suma = (a, b, z) => { 

    let resultado = a + b; 

    setTimeout(()=>{ 

        z(resultado)
    
    },1000);
}


const z = (resultado) => {

    console.log(resultado)

};

suma (1,2, z)