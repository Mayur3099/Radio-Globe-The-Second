import React, { useRef, useEffect } from 'react';
import Globe from "react-globe.gl";

import { earthUvMap, nightEarthUvMap } from '../assets';

const Earth = ({ points, handlePointClick }) => {
	const globeRef = useRef();

	useEffect(() => {
		// Auto-rotate
		globeRef.current.controls().autoRotate = true;
		globeRef.current.controls().autoRotateSpeed = 0.5;
		globeRef.current.controls().enableZoom = false;

		// globeRef.current.camera().position.x = 500;
	}, []);

	return (
		<div>
			<div className='relative overflow-hidden'>
				<div className='flex justify-center z-5'>
					<Globe
						id="myGlobe"

						ref={globeRef}

						globeImageUrl={earthUvMap}
						backgroundImageUrl={nightEarthUvMap}

						pointsData={points}

						onPointClick={handlePointClick}

						// height={1000}

						labelLat={d => d.properties.latitude}
						labelLng={d => d.properties.longitude}
						labelText={d => d.properties.name}
						labelSize={d => Math.sqrt(d.properties.pop_max) * 4e-4}
						labelDotRadius={d => Math.sqrt(d.properties.pop_max) * 4e-4}
						labelColor={() => 'rgba(255, 165, 0, 0.75)'}
						labelResolution={2}
					/>
				</div>
			</div>
		</div>
	)
}

export default Earth