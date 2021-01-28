import * as React from "react";
import Head from "next/head";
import { Marker } from "@react-google-maps/api";
import styles from "../styles/Home.module.css";
import Modal from "../components/modal";
import Map from "../components/map";

export type VisitedLocation = {
  city: string;
  stateOrCountry: string;
  position: { lat: number; lng: number };
  description?: string;
};

const visitedLocations: VisitedLocation[] = [
  {
    city: "Dallas",
    stateOrCountry: "Texas",
    position: {
      lat: 32.7767,
      lng: -96.797,
    },
    description:
      "Where i was born! I attended university at Southern Methodist University and started my first job at Texas Instruments here.",
  },
  {
    city: "Los Angeles",
    stateOrCountry: "California",
    position: {
      lat: 34.091840169470146,
      lng: -118.29366168172164,
    },
    description: "I visited here to run the the Disneyland Star Wars half marathon. While here I visited sites such as the Colloseum and a plethora of museums!"
  },
  {
    city: "Munich",
    stateOrCountry: "Germany",
    position: {
      lat: 48.14383068048086,
      lng: 11.563115139434696,
    },
    description: "I visited here for two weeks while on a work trip. Explored the city and drank a lot of wonderful beer!"
  },
  {
    city: "New York",
    stateOrCountry: "New York",
    position: {
      lat: 40.72082587705354,
      lng: -73.99273469323667,
    },
    description: "I visted my sister and future brother in law here. One of my favorite memories was visiting Ellis Island where I found the names of my relatives who emigrated into the country."
  },
  {
    city: "Stoupa",
    stateOrCountry: "Greece",
    position: {
      lat: 36.84583657301394,
      lng: 22.25950635400729,
    },
    description: "My mother was born here and over half my family lives here. I visited here many summers growing up."
  },
  {
    city: "Athens ",
    stateOrCountry: "Greece",
    position: {
      lat: 37.98460850109632,
      lng: 23.73627893190142,
    },
    description: "Home of the Acropolis and a frequent stop on the way to visiting my family in the summer."
  },
  {
    city: "Chicago",
    stateOrCountry: "Illinois",
    position: {
      lat: 41.802943969793596,
      lng: -87.69969892471528,
    },
    description: "I have made several visits here to meet family and visit the downtown area."
  },
  {
    city: "Washington",
    stateOrCountry: "D.C",
    position: {
      lat: 38.88849830968004,
      lng: -77.03517726965336,
    },
    description: "I have made several visits here including multiple visits to our national monuments and of course the Smithsonean!"
  },
  {
    city: "Portland",
    stateOrCountry: " Oregon",
    position: {
      lat: 45.543108364317646,
      lng: -122.63236136148967,
    },
    description:"Did a lot of hiking in the area around this city including visits to sites such as Multnomah Falls."
  },
];

export default function Home() {
  // return <div>Map 🗺️ cannot be loaded right now, sorry. 🙍‍♂️</div>
  const [isModalEnabled, setIsModalEnabled] = React.useState(false);
  const [activeLocationData, setActiveLocationData] = React.useState<
    VisitedLocation | undefined
  >(undefined);

  const handleMarkerClick = (location: VisitedLocation) => {
    setIsModalEnabled(true);
    setActiveLocationData(location);
  };

  const handleModalClose = () => {
    setActiveLocationData(undefined);
    setIsModalEnabled(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Where has Paul visited around the world? 🗺️</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Where has Paul visited around the world? 🗺️
        </h1>
        <Map>
          {visitedLocations.map((location) => (
            <Marker
              key={location.city}
              label={location.city}
              title={`${location.city}, ${location.stateOrCountry}`}
              position={location.position}
              onClick={() => handleMarkerClick(location)}
            />
          ))}
        </Map>
        {/* Show modal */}
        {isModalEnabled ? (
          <Modal onClose={handleModalClose} locationData={activeLocationData} />
        ) : null}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.pcoroneos.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my portfolio pcoroneos.com for more projects and blog posts!
        </a>
      </footer>
    </div>
  );
}
