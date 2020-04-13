
import {Coach, Dish, Appointment} from './models'

function generateRandomFutureDate() {
    let start : Date = new Date();
    let end : Date = new Date("2020/12/31");
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


function generateRandomSubset( input : any[]) : any[] {
    return input.filter( () => Math.random() >= 0.5);
}

function generateRandomDuration() {
    return (Math.floor(Math.random() * 4 + 1)) * 15;
}

const DISHES : Dish[] = [
    {
        id : "dish-1",
        name : "Aloo Matar",
        pictureId : "../assets/dish-1.png"
    },
    {
        id : "dish-2",
        name : "Dahi Poori",
        pictureId : "../assets/dish-2.png"
    },
    {
        id : "dish-3",
        name : "Rajma",
        pictureId : "../assets/dish-3.png"
    },
    {
        id : "dish-4",
        name : "Kadhi",
        pictureId : "../assets/dish-1.png"
    },
    {
        id : "dish-5",
        name : "Lasagna",
        pictureId : "../assets/dish-2.png"
    },
    {
        id : "dish-6",
        name : "Pizza",
        pictureId : "../assets/dish-3.png"
    },
    {
        id : "dish-7",
        name : "Pasta",
        pictureId : "../assets/dish-1.png"
    },
    {
        id : "dish-8",
        name : "Calzone",
        pictureId : "../assets/dish-2.png"
    },
];

const APTS : Appointment[] = [
    {
        id : "appt-1",
        startTime : generateRandomFutureDate(),
        duration : generateRandomDuration()
    },
    {
        id : "appt-2",
        startTime : generateRandomFutureDate(),
        duration : generateRandomDuration()
    },
    {
        id : "appt-3",
        startTime : generateRandomFutureDate(),
        duration : generateRandomDuration()
    },
    {
        id : "appt-4",
        startTime : generateRandomFutureDate(),
        duration : generateRandomDuration()
    },
    {
        id : "appt-5",
        startTime : generateRandomFutureDate(),
        duration : generateRandomDuration()
    },
    {
        id : "appt-6",
        startTime : generateRandomFutureDate(),
        duration : generateRandomDuration()
    },
    {
        id : "appt-7",
        startTime : generateRandomFutureDate(),
        duration : generateRandomDuration()
    },
];


export const COACHES : Coach[] = [
    {
        id : "user-1", 
        firstName : "sudeep", 
        lastName : "Das",
        persona : "coach",
        description : "The awesome cook",
        email : "sudeep.das.in@gmail.com",
        joinDate : new Date(Date.now()),
        dishes : generateRandomSubset(DISHES),
        appointments : generateRandomSubset(APTS)
    },
    {
        id : "user-1", 
        firstName : "sudeep", 
        lastName : "Das",
        persona : "coach",
        description : "The awesome cook",
        email : "sd@gudcook.me",
        joinDate : new Date(Date.now()),
        dishes : generateRandomSubset(DISHES),
        appointments : generateRandomSubset(APTS)
    },
    {
        id : "user-2", 
        firstName : "Bidan", 
        lastName : "Sinha",
        persona : "coach",
        description : "The awesome Bidan the cook",
        email : "bs@gudcook.me",
        joinDate : new Date(Date.now()),
        dishes : generateRandomSubset(DISHES),
        appointments : generateRandomSubset(APTS)
    },
    {
        id : "user-3", 
        firstName : "Alok", 
        lastName : "Shukla",
        persona : "coach",
        description : "The awesome Alok the cook",
        email : "as@gudcook.me",
        joinDate : new Date(Date.now()),
        dishes : generateRandomSubset(DISHES),
        appointments : generateRandomSubset(APTS)
    },
    {
        id : "user-4", 
        firstName : "Parul", 
        lastName : "Shukla",
        persona : "coach",
        description : "The awesome Parul the cook",
        email : "ps@gudcook.me",
        joinDate : new Date(Date.now()),
        dishes : generateRandomSubset(DISHES),
        appointments : generateRandomSubset(APTS)
    },
    {
        id : "user-5", 
        firstName : "Arpit", 
        lastName : "Pradhan",
        persona : "coach",
        description : "The awesome Arpit cook",
        email : "ap@gudcook.me",
        joinDate : new Date(Date.now()),
        dishes : generateRandomSubset(DISHES),
        appointments : generateRandomSubset(APTS)
    }
]

