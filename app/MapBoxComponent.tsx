"use client";
import React from "react";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import { useRouter } from "next/navigation"; // ここを変更
import Image from "next/image";

export default function MapBoxComponent() {
	const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY ?? "";
	const Router = useRouter();
	const handleClick = () => {
		Router.push("/forest");
	};
	return (
		<APIProvider apiKey={API_KEY}>
			<Map
				mapId={"a1f0dd4e628657b8"}
				style={{ width: "56rem", height: "100vh" }}
				defaultCenter={{ lat: 35.7029973, lng: 139.6471817 }}
				defaultZoom={15}
				gestureHandling={"greedy"}
				disableDefaultUI={true}
			>
				<AdvancedMarker
					position={{ lat: 35.7129973, lng: 139.6571817 }}
					onClick={handleClick}
				>
					<Image src="/tree-8.png" width={80} height={80} alt="木" />
				</AdvancedMarker>
				<AdvancedMarker
					position={{ lat: 35.7329943, lng: 139.6871812 }}
					onClick={handleClick}
				>
					<Image src="/tree-8.png" width={80} height={80} alt="木" />
				</AdvancedMarker>
				<AdvancedMarker
					position={{ lat: 35.7029932, lng: 139.6471833 }}
					onClick={handleClick}
				>
					<Image src="/forest-max.png" width={120} height={120} alt="木" />
				</AdvancedMarker>
			</Map>
		</APIProvider>
	);
}
