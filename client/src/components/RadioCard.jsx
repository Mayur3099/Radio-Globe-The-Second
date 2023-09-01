import React from 'react';

import AudioPlayerReact from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import { radioLogo } from '../assets';

const RadioCard = ({ station, index }) => {
    const setDefaultSrc = (event) => {
        event.target.src = radioLogo;
    };

    return (
        <>
            <div className="flex flex-col m-4 relative rounded-b-xl shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">

                <div className="flex pt-5 pb-20">
                    <img
                        className="flex p-2 left-0 mr-auto rounded-full"
                        src={station.favicon}
                        alt="station logo"
                        width="100px"
                        onError={setDefaultSrc}
                    />
                    <div className="flex w-full p-4 font-bold justify-center items-center">{station.name}</div>
                </div>

                <div className='absolute inset-x-0 bottom-0'>
                    <AudioPlayerReact
                        className='rounded-b-xl'
                        src={station.urlResolved}
                        showJumpControls={false}
                        layout="stacked"
                        customProgressBarSection={[]}
                        customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                        autoPlayAfterSrcChange={false}
                    />
                </div>

            </div>
        </>
    )
}

export default RadioCard