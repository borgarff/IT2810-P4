import React from "react";
import { View, Text } from "react-native";
import { ArrivalTime } from "./ArrivalTime";
import { styles } from "./Styling/Styles";


interface TravelProps {
    arrivalTime: string
    destination: string;
    publicCode: number;
    transportType: string;
    sort: string;
}
  
  //This function sets the right transport string
function getTransportMode(mode:string) {
    switch (mode) {
      case "bus": mode = "Buss"; break;
      case "rail": mode = "Tog"; break;
      case "water": mode = "Båt"; break;
      case "fly": mode = "Fly"; break;
    }
    return mode;
}


  //This function returns a sorted list based on transport
export const RenderTravel: React.FC<TravelProps> = ({arrivalTime, destination, publicCode, transportType, sort}) => {


    if (sort === "bus" && transportType === "bus") {
        return (    
        <View style={styles.depatureStyles}>
        <ArrivalTime estimatedArrival={arrivalTime}/>
        <Text style={({color: "white"})}>{destination}</Text>
        <Text style={({color: "white"})}>{publicCode}</Text>
        <Text style={({color: "white"})}>{getTransportMode(transportType)}</Text>
        </View>
        );
    }
    else if (sort === "rail" && transportType === "rail") {
        return (    
        <View style={styles.depatureStyles}>
            <ArrivalTime estimatedArrival={arrivalTime}/>
            <Text style={({color: "white"})}>{destination}</Text>
            <Text style={({color: "white"})}>{publicCode}</Text>
            <Text style={({color: "white"})}>{getTransportMode(transportType)}</Text>
        </View>
        );
    }
    else if (sort === "water" && transportType === "water") {
        return (    
        <View style={styles.depatureStyles}>
            <ArrivalTime estimatedArrival={arrivalTime}/>
            <Text style={({color: "white"})}>{destination}</Text>
            <Text style={({color: "white"})}>{publicCode}</Text>
            <Text style={({color: "white"})}>{getTransportMode(transportType)}</Text>
        </View>
        );
    }
    else if (sort === "fly" && transportType === "fly") {
        return (    
        <View style={styles.depatureStyles}>
            <ArrivalTime estimatedArrival={arrivalTime}/>
            <Text style={({color: "white"})}>{destination}</Text>
            <Text style={({color: "white"})}>{publicCode}</Text>
            <Text style={({color: "white"})}>{getTransportMode(transportType)}</Text>
        </View>
        );
    }
    else if (sort === "all"){
        return (    
        <View style={styles.depatureStyles}>
            <ArrivalTime estimatedArrival={arrivalTime}/>
            <Text style={({color: "white"})}>{destination}</Text>
            <Text style={({color: "white"})}>{publicCode}</Text>
            <Text style={({color: "white"})}>{getTransportMode(transportType)}</Text>
        </View>
        );
    }
    return null
}