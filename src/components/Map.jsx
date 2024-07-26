import React from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Geographies, Geography, Annotation } from "react-simple-maps";

const App = () => (
  <div style={{ width: "100%", height: "100%" }}>
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        center: [78.9629, 20.5937], // Approximate center of India
        scale: 1000
      }}
      style={{ width: "100%", height: "100%", background: "transparent" }}
    >
      <Geographies geography="/features.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="transparent" // Set fill to transparent
              stroke="#FFFFFF" // Set border color
              strokeWidth={0.5} // Set border width
            />
          ))
        }
      </Geographies>
      <Annotation
        subject={[80.9462, 26.8467]}
        dx={-30}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Lucknow"}
        </text>
      </Annotation>
      <Annotation
        subject={[77.376, 12.841]}
        dx={-30}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-5" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Bangalore"}
        </text>
      </Annotation>
    </ComposableMap>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
