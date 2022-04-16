import { Component } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

class Map extends Component {
  handleGeographyClick = (geography) => {
    console.log(geography);
  };

  render() {
    return (
      <div>
        <ComposableMap
          projectionConfig={{ scale: 2700, center: [31.4, 48.4] }}
          height={400}
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography={require("./gadm40_UKR_1.json")}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#ECEFF1",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    hover: {
                      fill: "#CFD8DC",
                      stroke: "#607D8B",
                      strokeWidth: 1,
                      outline: "none",
                    },
                    pressed: {
                      fill: "#FF5722",
                      stroke: "#607D8B",
                      strokeWidth: 1,
                      outline: "none",
                    },
                  }}
                  onClick={this.handleGeographyClick}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
    );
  }
}

export default Map;
