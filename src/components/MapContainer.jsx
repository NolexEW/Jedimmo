"use client";
import React from "react";
import { TileLayer } from "react-leaflet/TileLayer";
import { MapContainer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css"; // Importer les styles CSS de Leaflet

export default function Map() {
    return (
        <div className="relative">
            <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                scrollWheelZoom={false}
                className="hidden md:block lg:h-[300px] lg:w-[250px] xl:h-[500px] xl:w-[400px]  rounded-md overflow-hidden sticky top-8"
            >
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    );
}
