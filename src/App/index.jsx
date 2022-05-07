import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import { Info } from "../Info";

import { Container } from "./styles";

const warZones = [
  "Kharkiv",
  "Luhans'k",
  "Donets'k",
  "Zaporizhia",
  "Kherson",
  "Crimea",
  "Sevastopol'",
];

const warZonesStyles = {
  default: {
    fill: "#ffcccc",
    stroke: "#607D8B",
    strokeWidth: 0.75,
    outline: "none",
  },
  hover: {
    fill: "#ff8080",
    stroke: "#607D8B",
    strokeWidth: 1,
    outline: "none",
  },
  pressed: {
    fill: "#ff4d4d",
    stroke: "#607D8B",
    strokeWidth: 1,
    outline: "none",
  },
};

const peaceZonesStyles = {
  default: {
    fill: "#A2A392",
    stroke: "#D4CDC3",
    strokeWidth: 0.75,
    outline: "none",
  },
  hover: {
    fill: "#748B75",
    stroke: "#D4CDC3",
    strokeWidth: 1,
    outline: "none",
  },
  pressed: {
    fill: "#FF5722",
    stroke: "#607D8B",
    strokeWidth: 1,
    outline: "none",
  },
};

export const App = () => {
  const handleGeographyClick = (geo) => {
    const {
      properties: { NAME_1, NL_NAME_1, VARNAME_1 },
    } = geo;
  };

  return (
    <Container>
      <ComposableMap
        projectionConfig={{ scale: 2700, center: [31.4, 48.4] }}
        height={400}
      >
        <Geographies geography={require("./gadm40_UKR_1.json")}>
          {({ geographies }) => (
            <>
              {geographies.map((geo) => {
                const styles = warZones.includes(geo.properties.NAME_1)
                  ? warZonesStyles
                  : peaceZonesStyles;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={styles}
                    onClick={() => handleGeographyClick(geo)}
                  />
                );
              })}
              {geographies.map((geo, index) => {
                const hideIndexes = index === 0 || index === 12;

                return (
                  <Marker key={geo.rsmKey} coordinates={geoCentroid(geo)}>
                    {/* <g
                        fill="none"
                        stroke="#FF5533"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        transform="translate(-12, -24)"
                      >
                        <circle cx="12" cy="10" r="3" />
                        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                      </g> */}
                    <text
                      y="0"
                      fontSize={5}
                      textAnchor="middle"
                      style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                    >
                      {hideIndexes ? "" : geo.properties.NAME_1}
                    </text>
                  </Marker>
                );
              })}
            </>
          )}
        </Geographies>
      </ComposableMap>
      <Info />
    </Container>
  );
};
