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
				style={{ width: "100vw", height: "100vh" }}
				defaultCenter={{ lat: 35.7029973, lng: 139.6471817 }}
				defaultZoom={15}
				gestureHandling={"greedy"}
				disableDefaultUI={true}
			>
				<AdvancedMarker
					position={{ lat: 35.7029973, lng: 139.6471817 }}
					onClick={handleClick}
				>
					<Image src="/tree-4.png" width={100} height={100} alt="木" />
				</AdvancedMarker>
			</Map>
		</APIProvider>
	);
}
