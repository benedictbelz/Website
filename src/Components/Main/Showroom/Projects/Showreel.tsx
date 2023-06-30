import * as React from 'react';
import { Slider } from '../../../Slider/Slider';
import { TypeDevice } from '../../../../@types/typeDevice';

interface Props {
    currentDevice: TypeDevice | null;
}

export class Showreel extends React.Component<Props, {}> {
    render() {
        return (
            <div className='wrapper'>
                <div className='category information'>
                    <div>
                        <p className='uppercase'>Project</p>
                        <p>Showreel</p>
                    </div>
                    <div>
                        <p className='uppercase'>Year</p>
                        <p>2020</p>
                    </div>
                    <div>
                        <p className='uppercase'>Role</p>
                        <p>Motion Design</p>
                        <p>Visual Effects</p>
                    </div>
                    <div>
                        <p className='uppercase'>Collaboration</p>
                        <p>D-Facto Motion GmbH</p>
                        <p>Pixomondo GmbH</p>
                    </div>
                    <div>
                        <p className='uppercase'>Technology</p>
                        <p>Adobe After Effects</p>
                        <p>Adobe Photoshop</p>
                        <p>Cinema 4D</p>
                        <p>The Foundry Nuke</p>
                    </div>
                </div>
                <Slider currentDevice={this.props.currentDevice}>
                    <img src='assets/projects/showreel/showreel_01.jpg'/>
                    <img src='assets/projects/showreel/showreel_02.jpg'/>
                    <img src='assets/projects/showreel/showreel_03.jpg'/>
                    <img src='assets/projects/showreel/showreel_04.jpg'/>
                    <img src='assets/projects/showreel/showreel_05.jpg'/>
                    <img src='assets/projects/showreel/showreel_06.jpg'/>
                    <img src='assets/projects/showreel/showreel_07.jpg'/>
                    <img src='assets/projects/showreel/showreel_08.jpg'/>
                    <img src='assets/projects/showreel/showreel_09.jpg'/>
                    <img src='assets/projects/showreel/showreel_10.jpg'/>
                </Slider>
                <div className='category text'>
                    <p>
                        My Showreel is a collection of different projects I worked on the last couple of years.
                        It consists of motion designs and visual effects which were created for clients, collaborators and own purposes.
                        It includes movies like »Am Himmel der Tag«, »Fear the Walking Dead« or »Live By Night«.
                    </p>
                </div>
                <div className='category video'>
                    <video src='assets/projects/showreel/showreel.mp4' preload='metadata' poster='assets/projects/showreel/showreel_07.jpg' controls disablePictureInPicture controlsList='nodownload noremoteplayback'/>
                </div>
            </div>
        );
    }
}
