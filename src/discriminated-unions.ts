interface Bird {
    type: 'bird';
    flyingSpeed:number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function movingAnimal(animal: Animal) {
    switch (animal.type) {
        case 'bird': console.log('Bird Speed ' + animal.flyingSpeed);
        break;
        case 'horse': console.log('Horse Speed ' + animal.runningSpeed);
    }
}

movingAnimal({ type:'bird' , flyingSpeed: 10});
movingAnimal({ type:'horse' , runningSpeed: 100});