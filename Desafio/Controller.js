class Controller {


    testando() {

        // var array = ['Baby Shark', 'Mommy Shark', 'Daddy Shark', 'Grandma Shark', 'Grandpa Shark'];
        var array = [new Shark('Baby'), new Shark('Mommy'), new Shark('Daddy'), new Shark('Grandma'), new Shark('Grandpa')];

        // array.forEach(element => {
        //     console.log(`${element.nome}, doo doo doo doo doo doo`);
        //     console.log(`${element.nome}, doo doo doo doo doo doo`);
        //     console.log(`${element.nome}, doo doo doo doo doo doo`);
        //     console.log(element.nome);
        // });
        var dodo = 'doo doo doo doo doo doo';
        var shark = 'Shark';

        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < 3; j++) {
                console.log(array[i].nome + shark +', '+ dodo);
                                          
            };
            console.log(array[i].nome + shark);

        }

        // let mostra = array.map(function(item, indice) { 


                


        //         if(indice ==1){
        //             return item - 1; 
        //         } return item;});

    }
}

// new Shark('Baby'), new Shark('Mommy'), new Shark('Daddy'), new Shark('Grandma'), new Shark('Grandpa')
