import React, { useState } from 'react';
import AudioPlayerReact from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import { radioLogo } from '../assets';

const AudioPlayer = ({ selectedStation }) => {
    return (
        <>
            <div
                className="relative w-full appearance-none bg-transparent  text-sm text-gray-900 bg-opacity-0  border-gray-300 rounded-lg"
            >

                <div className='flex items-center'>
                    <img src={selectedStation.favicon || radioLogo} alt="" className='absolute rounded-full object-cover w-20 h-20 -ml-24' />

                    <AudioPlayerReact
                        className="flex h-24 px-8 appearance-none bg-transparent text-sm text-gray-900 bg-opacity-0 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-opacity-0 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                        autoPlay={false}
                        src={selectedStation.url_resolved}
                        layout='stacked'
                    />
                </div>
            </div>
        </>
    )
}

export default AudioPlayer