class Car {
    drive() {
        console.log(`Driving...`);
    }
}
class Truck extends Car {
    loadCargo(amount: number) {
        console.log(`Loading cargo: ${amount}`);
    }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();

    // Approach1
    // check whether 'loadCargo' method is in vehicle
    // if ('loadCargo' in vehicle) {
    //     vehicle.loadCargo(1000);
    // }

    // Approach2
    // check whether vehicle is an instance of Truck
    // to confirm 'loadCargo' method exists
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
//useVehicle(v1);
useVehicle(v2);