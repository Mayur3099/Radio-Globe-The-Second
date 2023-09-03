import React from 'react';
import Globe from "react-globe.gl";

import { earthClouds, milkyWay } from '../assets';
import { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

const About = () => {
	const globeRef = useRef(null);

	useEffect(() => {
		// Auto-rotate
		globeRef.current.controls().autoRotate = true;
		globeRef.current.controls().autoRotateSpeed = 0.5;
		globeRef.current.controls().enableZoom = false;

		// globeRef.current.camera().position.x = 500;

	}, []);

	return (
		<>
			<div className='relative overflow-hidden'>
				<div className='absolute bg-white z-10 w-80 h-80 -m-40 -rotate-45'></div>

				<div className='absolute text-6xl pl-6 py-4 z-10 bg-black text-transparent bg-clip-text rounded-lg bg-gradient-to-r from-black via-violet-300 to-violet-600'>
					<h1 className='font-bold'>Discover the World of Radio Earth</h1>
				</div>

				<div className='absolute z-10 mt-20 pl-6 w-1/2 text-transparent bg-clip-text rounded-lg'>
					<div className="py-5 pl-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-rose-700 via-white to-purple-900">
						Welcome to Radio Earth! We are your ultimate destination for a mesmerizing auditory journey across the globe. Our innovative website showcases radio stations on a captivating 3D Earth, bringing the world's sounds right to your fingertips. With an extensive database of radio stations spanning languages, countries, and genres, Radio Earth allows you to explore and discover music, news, and culture from every corner of the planet. Whether you're seeking to tune in to your favorite station or eager to explore new voices, our platform empowers you to navigate the world of radio like never before. Join us in celebrating the universal language of music and stay connected with the pulse of the world through our immersive radio experience.
					</div>

				</div>

				<div className='z-5 -mt-28'>
					<Globe
						id="myGlobe"

						ref={globeRef}

						width={2500}
						height={1100}

						globeImageUrl={earthClouds}
						backgroundImageUrl={milkyWay}

						atmosphereColor='pink'

						labelLat={d => d.properties.latitude}
						labelLng={d => d.properties.longitude}
						labelText={d => d.properties.name}
						labelSize={d => Math.sqrt(d.properties.pop_max) * 4e-4}
						labelDotRadius={d => Math.sqrt(d.properties.pop_max) * 4e-4}
						labelColor={() => 'rgba(255, 165, 0, 0.75)'}
						labelResolution={2}
					/>
				</div>

				<div className='absolute w-[80rem] -mt-[7rem] ml-[7rem]'>
					<hr className="z-20 my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
					<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to='/' class="hover:underline hover:cursor-pointer hover:text-teal-600">RadioEarth</Link>. All Rights Reserved.</span>
				</div>
			</div>

		</>
	)
}

export default About