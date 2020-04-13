export class Entity {
    id : string;
}

export class Dish extends Entity{
    name : string;
    pictureId : string;    
};

export class Appointment extends Entity {
    startTime : Date;  
    duration : Number;
};

export class User extends Entity{
    firstName : string;
    lastName : string;
    email : string;
    joinDate: Date;
    description : string; 
    persona : string;   
};

export class Coach extends User{
    dishes : Dish[];
    appointments : Appointment[];
};