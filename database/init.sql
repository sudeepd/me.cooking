CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    email VARCHAR (256) UNIQUE NOT NULL,
    phone VARCHAR (12)     
)

CREATE TABLE Persona (
    id SERIAL PRIMARY KEY,
    persona VARCHAR (256) UNIQUE NOT NULL
)

CREATE TABLE Dishes(
    id SERIAL PRIMARY KEY,
    name VARCHAR (256) UNIQUE NOT NULL,
    description VARCHAR(512) NOT NULL
)

CREATE TABLE Ingredients(
    id SERIAL PRIMARY KEY,
    name VARCHAR (256) UNIQUE NOT NULL,
    description VARCHAR(512) NOT NULL
)

CREATE TABLE Appointments(
    id SERIAL PRIMARY KEY,
    organizerId INTEGER REFERENCES Users(id),
    startTime INTEGER NOT NULL,
    duration INTEGER NOT NULL,
    additional VARCHAR(512) 
)

CREATE TABLE UserPersona(
    userId INTEGER REFERENCES Users(id),
    personaId INTEGER REFERENCES Persona(id),
    CONSTRAINT UserPersona_PK PRIMARY KEY (userId, personaId) 
)

CREATE TABLE UserDishes(
    userId INTEGER REFERENCES Users(id),
    dishId INTEGER REFERENCES Dishes(id),
    CONSTRAINT UserDishes_PK PRIMARY KEY (userId, dishId) 
)

CREATE TABLE DishIngredients(
    dishId INTEGER REFERENCES Dishes(id),
    ingredientId INTEGER REFERENCES Ingredients(id),
    CONSTRAINT DishIngredients_PK PRIMARY KEY (dishId, ingredientId) 
)

CREATE TABLE AppointmentInvitees(
    appointmentId INTEGER REFERENCES Appointments(id),
    inviteeId INTEGER REFERENCES Users(id),
    CONSTRAINT AppointmentInvitees_PK PRIMARY KEY (appointmentId, inviteeId)
)
