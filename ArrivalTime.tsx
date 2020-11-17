import React from 'react';
import { Text } from 'react-native';


interface timeProps {
    estimatedArrival: string;
}


export const ArrivalTime: React.FC<timeProps> = ({estimatedArrival}) => {

    let arrivalTimeText: JSX.Element | null = null;

    //Creates to new date objects: arrival and now
    estimatedArrival = estimatedArrival.replace('+', '.');
    let arrival : any = new Date(estimatedArrival)
    let now : any = new Date().getTime();
    arrival.setHours(arrival.getHours() - 1)
    
    //converts date object to realtime
    let minUntilArrival :number = (arrival-now) / 600000;
    let displayAsTime: boolean = false;
    let arrivingNow: boolean = false;
    
    //Checks when the transport is arrivaling
    const zeroPadding = (num:number, places:number) => String(num).padStart(places, '0')
    if (minUntilArrival > 3){
        displayAsTime = true;
    }
    if (minUntilArrival < 1){
        arrivingNow = true;
    }

    //Returns the time until arrival
    if (displayAsTime) {
        arrivalTimeText = (<Text style={({color: "white"})}>{zeroPadding(arrival.getHours(),2)}:{zeroPadding(arrival.getMinutes(),2)}</Text>);
        console.log("Kommer snart")
    }
    else if (arrivingNow) {
        console.log("Kommer nå")
        arrivalTimeText = (<Text style={({color: "white"})}>Kommer nå</Text>)
    }
    else {
        console.log("Kommer om x min")
        arrivalTimeText = (<Text style={({color: "white"})}>om {Math.round(minUntilArrival)} min</Text>)
        
    }

    return arrivalTimeText;
}