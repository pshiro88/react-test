import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { Tooltip as ReactTooltip } from 'react-tooltip'

// Replace this URL with the actual path to your India GeoJSON file
const INDIA_GEO_JSON = "https://gist.githubusercontent.com/anilnairxyz/1ca20f47982712cf6d4128064e3a6feb/raw/3e0c829745ebf567cb8e15399168ba2777ba1864/ne_10m_admin_1_India_Official.json";

const markers = [
    { name: "Delhi", coordinates: [77.2090, 28.6139], description: "lorem ipsum and some random address." },
    { name: "Mumbai", coordinates: [72.8777, 19.0760], description: "Please hire me, It took a lot of tinkering to learn something new" },
    { name: "Bangalore", coordinates: [77.5946, 12.9716], description: "Completing this project shows that I can learn anything." },
    { name: "Raipur", coordinates: [81.629997, 21.250000], description: "Please hire me, It took a lot of tinkering to learn something new" },
    { name: "Jalpaiguri", coordinates: [88.719391, 26.540457], description: "Completing this project shows that I can learn anything." },
    { name: "Patan, Gujarat, India", coordinates: [72.126625, 23.849325], description: "lorem ipsum and some random address." },
    { name: "Port Blair", coordinates: [92.726486, 11.623377], description: "Please hire me, It took a lot of tinkering to learn something new" },
    { name: "Pali", coordinates: [73.323685, 25.771315], description: "Completing this project shows that I can learn anything." },
    { name: "Jetpur, Gujarat, India", coordinates: [70.627625, 21.761524], description: "Another random address in India." },
    { name: "Basirhat, West Bengal, India", coordinates: [88.867180, 22.657402], description: "Another random address in India." },
    { name: "Konnagar, Mirpur, West Bengal, India", coordinates: [88.319069, 22.700474], description: "Another random address in India." },
    { name: "Ranchi, Jharkhand, India", coordinates: [85.296013, 23.344315], description: "Another random address in India." },
    { name: "Gudur, Andhra Pradesh, India", coordinates: [79.850388, 14.146319], description: "Another random address in India." },
    { name: "Gola Gokarannath, Uttar Pradesh, India", coordinates: [80.471588, 28.078636], description: "Another random address in India." },
    { name: "Shikohabad, Uttar Pradesh, India", coordinates: [78.584602, 27.108416], description: "Another random address in India." },
    { name: "Tirumangalam, Tamil Nadu, India", coordinates: [77.986565, 9.823619], description: "Another random address in India." },
    { name: "Anakaputhur, Sriperumbudur, Tamil Nadu, India", coordinates: [79.959244, 12.946366], description: "Another random address in India." },
    { name: "Suryapet, Telangana, India", coordinates: [79.623924, 17.143908], description: "Another random address in India." },
    { name: "Udupi, Karnataka, India", coordinates: [74.742142, 13.340881], description: "Another random address in India." },
];

function IndiaMap() {
    const [tooltipContent, setTooltipContent] = useState("");
    const [hoveredMarker, setHoveredMarker] = useState(null);


    return (
        <div className='lg:w-1/2 w-full'>
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: 1000,
                    center: [78.9629, 22.5937], // Centering the map to India
                }}
                width={800}
                height={600}
                style={{ width: "100%", height: "auto" }}
                data-tip=""
            >
                <Geographies geography={INDIA_GEO_JSON}>
                    {({ geographies }) =>
                        geographies.map(geo => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                onMouseEnter={() => {
                                    const { name } = geo.properties;
                                    setHoveredMarker(name);
                                }}
                                onMouseLeave={() => {
                                    setHoveredMarker(null);
                                }}
                                style={{
                                    default: { fill: "#f78d54", outline: "none" },
                                    hover: { fill: "#fa6d20", outline: "none" },
                                    pressed: { fill: "#E42", outline: "none" },
                                }}
                            />
                        ))
                    }
                </Geographies>
                {markers.map(({ name, coordinates, description }) => (
                    <Marker
                        key={name}
                        coordinates={coordinates}
                        onMouseEnter={() => setHoveredMarker(name)}
                        onMouseLeave={() => setHoveredMarker(null)}
                    >
                        <circle r={6} fill="#fff" className='animate-ping' />
                        <circle r={6} fill="#218fce" stroke='#fff' />
                        {hoveredMarker === name && (
                            <foreignObject x={-200} y={0} width={200} height={200}>
                                <div className="bg-white text-black p-2 rounded-lg shadow-lg">
                                    <h2 className='text-lg font-semibold'>SHM shipcare</h2>
                                    <p className='text-xs text-gray-500'>{description}</p>
                                    <div className='h-[2px] w-1/2 mt-2 bg-orange-500'></div>
                                    <a href={`https://maps.google.com/?q=${coordinates[0]},${coordinates[1]}`} target="_blank" className='text-xs text-orange-500 font-semibold pt-2'>View Map</a>
                                </div>
                            </foreignObject>
                        )}
                    </Marker>
                ))}
            </ComposableMap>
            <ReactTooltip>{tooltipContent}</ReactTooltip>
        </div>
    );
}

export default IndiaMap;
