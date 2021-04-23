abstract class House {
    
    static Television: string;

    constructor(protected beds: number) {
        this.beds = beds;
    }

    addBeds(bed: number) {
       this.beds = bed;
    //    this.Television
    }

    static bathRooms() {
        console.log('No Bathrooms');
    }

    abstract mainHall(feets: string) : string;
}

class oneBHK extends House {
     Chairs: number;
     private diningTable: string;
     private static instance: oneBHK;
     
    private constructor(beds: number , public rooms: number) {
        super(beds);
        this.rooms = rooms;
        this.Chairs = 0;
        this.diningTable = 'one table with four chairs'
    }

    static getInstance() {
        if(oneBHK.instance) {
            return this.instance
        }
        else {
            this.instance = new oneBHK(1 , 1);
            return this.instance;
        }
    }
    

    get table() {
        if(this.diningTable) {
            return this.diningTable
        }
        else {
           throw new Error('There is no dining table')
        }
    }

    set table(value: string) {
        if(!value) {
            throw new Error('Please Provide value for Dining Table')
        }
        else {
            this.diningTable = value;
        }
    }

    adddBeds(bed: number) {
        this.beds = bed;
    } 

    addChairs(chair: number) {
      this.Chairs = chair;
    }

    mainHall() {
     return 'mainnnnnnnnnnnn'
    }
}

// const houseObj = new House(2);
// House.bathRooms();
// houseObj.addBeds(3);

// console.log(houseObj);

// const onebhk = new oneBHK(1 , 1);

const newOneBHK = oneBHK.getInstance();


newOneBHK.addBeds(5);
newOneBHK.addChairs(3);
const hall = newOneBHK.mainHall();
console.log(hall);
// console.log(onebhk.table);
newOneBHK.table = 'one table with ten chairs'
console.log(newOneBHK);



