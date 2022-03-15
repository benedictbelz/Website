import * as React from 'react';
import { Slider } from '../../../Slider/Slider';
import { TypeDevice } from '../../../../@types/typeCommon';
interface Props {
    currentDevice: TypeDevice | null;
}

export class AdmiralCloud extends React.Component<Props, {}> {
    render() {
        return (
            <div className='wrapper'>
                <div className='category information'>
                    <div>
                        <p className='uppercase'>Project</p>
                        <p>AdmiralCloud AG</p>
                    </div>
                    <div>
                        <p className='uppercase'>Year</p>
                        <p>2020</p>
                    </div>
                    <div>
                        <p className='uppercase'>Role</p>
                        <p>Development</p>
                        <p>UX Design</p>
                        <p>UI Design</p>
                    </div>
                </div>
                <div className='category information'>
                    <div>
                        <p className='uppercase'>Collaboration</p>
                        <p>Anabell Jung</p>
                        <p>Daniel Züwerink</p>
                    </div>
                    <div>
                        <p className='uppercase'>Technology</p>
                        <p>CSS</p>
                        <p>HTML</p>
                        <p>JavaScript</p>
                        <p>WordPress</p>
                    </div>
                </div>
                <div className='category image square'>
                    <img src='assets/projects/admiralCloud/media.png'/>
                </div>
                <div className='category text'>
                    <p>
                        This website was a project for the company »AdmiralCloud AG«.
                        Their main product is a »Digital Asset Management« which includes a media
                        management system, a collaboration tool and additional presentation possibilities.
                    </p>
                </div>
                <div className='category image'>
                    <img src='assets/projects/admiralCloud/logo_01.jpg'/>
                </div>
                <div className='category text'>
                    <p>
                        The original logo was a combination of the letters »A« and »C« forming a loop as a
                        metaphor for the unlimited possibilities in the media magagement system.
                        Furthermore, it symbolizes a cloud as well.
                    </p>
                </div>
                <div className='category image'>
                    <img src='assets/projects/admiralCloud/logo_02.jpg'/>
                </div>
                <div className='category text'>
                    <p>
                        We wanted to modernize the logo to improve readibility. In this way, both letters should be
                        clearly legible and the overall look appearing and straightforward. I tried different color
                        palettes and played around with different shapes.
                    </p>
                </div>
                <div className='category image'>
                    <img src='assets/projects/admiralCloud/logo_03.jpg'/>
                </div>
                <div className='category text'>
                    <p>
                        We decided to go with the most simple approach and created a colorful and flat version of the logo. 
                        This has enabled us to use the logo for various purposes, be it marketing brochures, the website or product branding.
                    </p>
                </div>
                <Slider currentDevice={this.props.currentDevice}>
                    <video src='assets/projects/admiralCloud/infoGraphic_01.mp4' autoPlay loop muted disablePictureInPicture playsInline preload='auto'/>
                    <video src='assets/projects/admiralCloud/infoGraphic_02.mp4' autoPlay loop muted disablePictureInPicture playsInline preload='auto'/>
                    <video src='assets/projects/admiralCloud/infoGraphic_03.mp4' autoPlay loop muted disablePictureInPicture playsInline preload='auto'/>
                    <video src='assets/projects/admiralCloud/infoGraphic_04.mp4' autoPlay loop muted disablePictureInPicture playsInline preload='auto'/>
                    <video src='assets/projects/admiralCloud/infoGraphic_05.mp4' autoPlay loop muted disablePictureInPicture playsInline preload='auto'/>
                    <video src='assets/projects/admiralCloud/infoGraphic_06.mp4' autoPlay loop muted disablePictureInPicture playsInline preload='auto'/>
                    <video src='assets/projects/admiralCloud/infoGraphic_07.mp4' autoPlay loop muted disablePictureInPicture playsInline preload='auto'/>
                    <video src='assets/projects/admiralCloud/infoGraphic_08.mp4' autoPlay loop muted disablePictureInPicture playsInline preload='auto'/>
                    <video src='assets/projects/admiralCloud/infoGraphic_09.mp4' autoPlay loop muted disablePictureInPicture playsInline preload='auto'/>
                    <video src='assets/projects/admiralCloud/infoGraphic_10.mp4' autoPlay loop muted disablePictureInPicture playsInline preload='auto'/>
                    <video src='assets/projects/admiralCloud/infoGraphic_11.mp4' autoPlay loop muted disablePictureInPicture playsInline preload='auto'/>
                    <video src='assets/projects/admiralCloud/infoGraphic_12.mp4' autoPlay loop muted disablePictureInPicture playsInline preload='auto'/>
                    <video src='assets/projects/admiralCloud/infoGraphic_13.mp4' autoPlay loop muted disablePictureInPicture playsInline preload='auto'/>
                    <video src='assets/projects/admiralCloud/infoGraphic_14.mp4' autoPlay loop muted disablePictureInPicture playsInline preload='auto'/>
                    <video src='assets/projects/admiralCloud/infoGraphic_15.mp4' autoPlay loop muted disablePictureInPicture playsInline preload='auto'/>
                    <video src='assets/projects/admiralCloud/infoGraphic_16.mp4' autoPlay loop muted disablePictureInPicture playsInline preload='auto'/>
                    <video src='assets/projects/admiralCloud/infoGraphic_17.mp4' autoPlay loop muted disablePictureInPicture playsInline preload='auto'/>
                    <video src='assets/projects/admiralCloud/infoGraphic_18.mp4' autoPlay loop muted disablePictureInPicture playsInline preload='auto'/>
                    <video src='assets/projects/admiralCloud/infoGraphic_19.mp4' autoPlay loop muted disablePictureInPicture playsInline preload='auto'/>
                    <video src='assets/projects/admiralCloud/infoGraphic_20.mp4' autoPlay loop muted disablePictureInPicture playsInline preload='auto'/>
                    <video src='assets/projects/admiralCloud/infoGraphic_21.mp4' autoPlay loop muted disablePictureInPicture playsInline preload='auto'/>
                    <video src='assets/projects/admiralCloud/infoGraphic_22.mp4' autoPlay loop muted disablePictureInPicture playsInline preload='auto'/>
                    <video src='assets/projects/admiralCloud/infoGraphic_23.mp4' autoPlay loop muted disablePictureInPicture playsInline preload='auto'/>
                </Slider>
                <div className='category text'>
                    <p>
                        I animated several infographics to illustrate the different features of the product.
                        All the individual graphics are attached at the upper side of each page to offer a quick understanding.
                        We chose the »GIF« format to ensure an accurate representation of each color.
                    </p>
                </div>
                <div className='category design'>
                    <div className='color'>
                        <div style={{color: '#FFFFFF', background: '#19324B' }}>
                            <div>
                                <p className='bold'>Pantone</p>
                                <p>533 C</p>
                            </div>
                            <div>
                                <p className='bold'>C</p>
                                <p>73%</p>
                                <p className='bold'>M</p>
                                <p>33%</p>
                                <p className='bold'>Y</p>
                                <p>0%</p>
                                <p className='bold'>K</p>
                                <p>71%</p>
                            </div>
                            <div>
                                <p className='bold'>R</p>
                                <p>20</p>
                                <p className='bold'>G</p>
                                <p>50</p>
                                <p className='bold'>B</p>
                                <p>75</p>
                            </div>
                            <div>
                                <p className='bold'>HEX</p>
                                <p>#19324B</p>
                            </div>
                        </div>
                        <div>
                            <div style={{ background: '#394f64' }}></div>
                            <div style={{ background: '#4C5F73' }}></div>
                            <div style={{ background: '#677888' }}></div>
                            <div style={{ background: '#9AA5B0' }}></div>
                            <div style={{ background: '#FFFFFF' }}></div>
                        </div>
                    </div>
                    <div className='color'>
                        <div style={{color: '#FFFFFF', background: '#90A0AF' }}>
                            <div>
                                <p className='bold'>Pantone</p>
                                <p>7543 C</p>
                            </div>
                            <div>
                                <p className='bold'>C</p>
                                <p>17%</p>
                                <p className='bold'>M</p>
                                <p>9%</p>
                                <p className='bold'>Y</p>
                                <p>0%</p>
                                <p className='bold'>K</p>
                                <p>31%</p>
                            </div>
                            <div>
                                <p className='bold'>R</p>
                                <p>145</p>
                                <p className='bold'>G</p>
                                <p>160</p>
                                <p className='bold'>B</p>
                                <p>175</p>
                            </div>
                            <div>
                                <p className='bold'>HEX</p>
                                <p>#91A0AF</p>
                            </div>
                        </div>
                        <div>
                            <div style={{ background: '#A0ADBA' }}></div>
                            <div style={{ background: '#A9B5C1' }}></div>
                            <div style={{ background: '#B6C0CA' }}></div>
                            <div style={{ background: '#CFD5DC' }}></div>
                            <div style={{ background: '#FFFFFF' }}></div>
                        </div>
                    </div>
                    <div className='color'>
                        <div style={{color: '#FFFFFF', background: '#4BAFFA' }}>
                            <div>
                                <p className='bold'>Pantone</p>
                                <p>2915 C</p>
                            </div>
                            <div>
                                <p className='bold'>C</p>
                                <p>70%</p>
                                <p className='bold'>M</p>
                                <p>30%</p>
                                <p className='bold'>Y</p>
                                <p>0%</p>
                                <p className='bold'>K</p>
                                <p>2%</p>
                            </div>
                            <div>
                                <p className='bold'>R</p>
                                <p>75</p>
                                <p className='bold'>G</p>
                                <p>175</p>
                                <p className='bold'>B</p>
                                <p>250</p>
                            </div>
                            <div>
                                <p className='bold'>HEX</p>
                                <p>#4BAFFA</p>
                            </div>
                        </div>
                        <div>
                            <div style={{ background: '#64BAFB' }}></div>
                            <div style={{ background: '#73C1FB' }}></div>
                            <div style={{ background: '#88CAFC' }}></div>
                            <div style={{ background: '#B0DCFD' }}></div>
                            <div style={{ background: '#FFFFFF' }}></div>
                        </div>
                    </div>
                    <div className='color'>
                        <div style={{color: '#FFFFFF', background: '#FFAA28' }}>
                            <div>
                                <p className='bold'>Pantone</p>
                                <p>1235 C</p>
                            </div>
                            <div>
                                <p className='bold'>C</p>
                                <p>0%</p>
                                <p className='bold'>M</p>
                                <p>33%</p>
                                <p className='bold'>Y</p>
                                <p>84%</p>
                                <p className='bold'>K</p>
                                <p>0%</p>
                            </div>
                            <div>
                                <p className='bold'>R</p>
                                <p>255</p>
                                <p className='bold'>G</p>
                                <p>170</p>
                                <p className='bold'>B</p>
                                <p>40</p>
                            </div>
                            <div>
                                <p className='bold'>HEX</p>
                                <p>#FFAA28</p>
                            </div>
                        </div>
                        <div>
                            <div style={{ background: '#FFB646' }}></div>
                            <div style={{ background: '#FFBD57' }}></div>
                            <div style={{ background: '#FFC771' }}></div>
                            <div style={{ background: '#FFDAA0' }}></div>
                            <div style={{ background: '#FFFFFF' }}></div>
                        </div>
                    </div>
                    <div className='font' style={{ fontFamily: 'Arial, Helvetica Neue, sans-serif', color: '#19324B' }}>
                        <p>Arial</p>
                        <div>
                            <p style={{ fontWeight: 100 }}>Aa</p>
                            <p style={{ fontWeight: 300 }}>Bb</p>
                            <p style={{ fontWeight: 500 }}>Cc</p>
                            <p style={{ fontWeight: 700 }}>123</p>
                        </div>
                        <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                        <p>abcdefghijklmnopqrstuvwxyz</p>
                        <p>1234567890!"#€%()=/@</p>
                    </div>
                </div>
                <div className='category text'>
                    <p>
                        We used a dark blue and a soft grey as fundamental colors and introduced a light blue,
                        and juicy orange as accent colors. The font for the website is »Arial« which ensures an easy readibility.
                    </p>
                </div>
                <div className='category image'>
                    <img src='assets/projects/admiralCloud/admiralCloud_01.jpg'/>
                </div>
                <div className='category text'>
                    <p>
                        All pages contain the same navigation and header which also introduce the particular functionality of the product.
                        The whole concept is orientated torwards »Flat Design« which offers clarity and a simple comprehension.
                    </p>
                </div>
                <div className='category image'>
                    <img src='assets/projects/admiralCloud/admiralCloud_02.jpg'/>
                </div>
            </div>
        );
    }
}
