import { ApolloServer } from "apollo-server";
import fetch from "node-fetch";

export const stopPlaces = [
    {
        id: "NSR:StopPlace:60066",
        name: "Trondheim hurtigbåtterminal",
        estimatedCalls: [
            {
            realtime: true,
            aimedArrivalTime: "2020-11-17T22:46:00+0100",
            aimedDepartureTime: "2020-11-17T22:46:00+0100",
            expectedArrivalTime: "2020-11-17T22:46:00+0100",
            expectedDepartureTime: "2020-11-17T22:46:00+0100",
            date: "2020-11-17",
            destinationDisplay: {
                frontText: "Vikåsen via Singsaker"
            },
            serviceJourney: {
                journeyPattern: {
                line: {
                    name: "Vikåsen- Strindheim- Singsaker",
                    transportMode: "bus"
                }
                }
            }
            },
            {
            realtime: true,
            aimedArrivalTime: "2020-11-17T23:06:00+0100",
            aimedDepartureTime: "2020-11-17T23:06:00+0100",
            expectedArrivalTime: "2020-11-17T23:06:00+0100",
            expectedDepartureTime: "2020-11-17T23:06:00+0100",
            date: "2020-11-17",
            destinationDisplay: {
                frontText: "Vikåsen via Singsaker"
            },
            serviceJourney: {
                journeyPattern: {
                line: {
                    name: "Vikåsen- Strindheim- Singsaker",
                    transportMode: "bus"
                }
                }
            }
            },
            {
            realtime: true,
            aimedArrivalTime: "2020-11-17T23:26:00+0100",
            aimedDepartureTime: "2020-11-17T23:26:00+0100",
            expectedArrivalTime: "2020-11-17T23:26:00+0100",
            expectedDepartureTime: "2020-11-17T23:26:00+0100",
            date: "2020-11-17",
            destinationDisplay: {
                frontText: "Vikåsen via Singsaker"
            },
            serviceJourney: {
                journeyPattern: {
                line: {
                    name: "Vikåsen- Strindheim- Singsaker",
                    transportMode: "bus"
                }
                }
            }
            },
            {
            realtime: false,
            aimedArrivalTime: "2020-11-17T23:30:00+0100",
            aimedDepartureTime: "2020-11-17T23:30:00+0100",
            expectedArrivalTime: "2020-11-17T23:30:00+0100",
            expectedDepartureTime: "2020-11-17T23:30:00+0100",
            date: "2020-11-17",
            destinationDisplay: {
                frontText: "Vanvikan"
            },
            serviceJourney: {
                journeyPattern: {
                line: {
                    name: "Trondheim - Vanvikan",
                    transportMode: "water"
                }
                }
            }
            },
            {
            realtime: false,
            aimedArrivalTime: "2020-11-17T23:46:00+0100",
            aimedDepartureTime: "2020-11-17T23:46:00+0100",
            expectedArrivalTime: "2020-11-17T23:46:00+0100",
            expectedDepartureTime: "2020-11-17T23:46:00+0100",
            date: "2020-11-17",
            destinationDisplay: {
                frontText: "Vikåsen via Singsaker"
            },
            serviceJourney: {
                journeyPattern: {
                line: {
                    name: "Vikåsen- Strindheim- Singsaker",
                    transportMode: "bus"
                }
                }
            }
            },
            {
            realtime: false,
            aimedArrivalTime: "2020-11-18T00:06:00+0100",
            aimedDepartureTime: "2020-11-18T00:06:00+0100",
            expectedArrivalTime: "2020-11-18T00:06:00+0100",
            expectedDepartureTime: "2020-11-18T00:06:00+0100",
            date: "2020-11-17",
            destinationDisplay: {
                frontText: "Vikåsen via Singsaker"
            },
            serviceJourney: {
                journeyPattern: {
                line: {
                    name: "Vikåsen- Strindheim- Singsaker",
                    transportMode: "bus"
                }
                }
            }
            },
            {
            realtime: false,
            aimedArrivalTime: "2020-11-18T06:06:00+0100",
            aimedDepartureTime: "2020-11-18T06:06:00+0100",
            expectedArrivalTime: "2020-11-18T06:06:00+0100",
            expectedDepartureTime: "2020-11-18T06:06:00+0100",
            date: "2020-11-18",
            destinationDisplay: {
                frontText: "Vikåsen via Singsaker"
            },
            serviceJourney: {
                journeyPattern: {
                line: {
                    name: "Vikåsen- Strindheim- Singsaker",
                    transportMode: "bus"
                }
                }
            }
            },
            {
            realtime: false,
            aimedArrivalTime: "2020-11-18T06:20:00+0100",
            aimedDepartureTime: "2020-11-18T06:20:00+0100",
            expectedArrivalTime: "2020-11-18T06:20:00+0100",
            expectedDepartureTime: "2020-11-18T06:20:00+0100",
            date: "2020-11-18",
            destinationDisplay: {
                frontText: "Vanvikan"
            },
            serviceJourney: {
                journeyPattern: {
                line: {
                    name: "Trondheim - Vanvikan",
                    transportMode: "water"
                }
                }
            }
            },
            {
            realtime: false,
            aimedArrivalTime: "2020-11-18T06:20:00+0100",
            aimedDepartureTime: "2020-11-18T06:20:00+0100",
            expectedArrivalTime: "2020-11-18T06:20:00+0100",
            expectedDepartureTime: "2020-11-18T06:20:00+0100",
            date: "2020-11-18",
            destinationDisplay: {
                frontText: "Brekstad kai"
            },
            serviceJourney: {
                journeyPattern: {
                line: {
                    name: "Trondheim - Brekstad",
                    transportMode: "water"
                }
                }
            }
            },
            {
            realtime: false,
            aimedArrivalTime: "2020-11-18T06:26:00+0100",
            aimedDepartureTime: "2020-11-18T06:26:00+0100",
            expectedArrivalTime: "2020-11-18T06:26:00+0100",
            expectedDepartureTime: "2020-11-18T06:26:00+0100",
            date: "2020-11-18",
            destinationDisplay: {
                frontText: "Vikåsen via Singsaker"
            },
            serviceJourney: {
                journeyPattern: {
                line: {
                    name: "Vikåsen- Strindheim- Singsaker",
                    transportMode: "bus"
                }
                }
            }
            }
        ]
    }
    
]