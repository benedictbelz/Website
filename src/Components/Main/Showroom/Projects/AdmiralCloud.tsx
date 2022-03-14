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
                        <p className='uppercase'>Collaborators</p>
                        <p>Anabell Jung</p>
                        <p>Daniel Züwerink</p>
                    </div>
                </div>
                <div className='category image square'>
                    <img src='assets/projects/admiralCloud/media.png'/>
                </div>
                <div className='category text'>
                    <p>
                        This website was a project for the company »AdmiralCloud AG«.
                        Their service includes a »Digital Asset Management« which covers an archive,
                        a collaboration tool and additional presentation opportunities.
                    </p>
                </div>
                <div className='category image'>
                    <img src='assets/projects/admiralCloud/logo.jpg'/>
                </div>
                <div className='category text'>
                    <p>
                        Bla Bla, development of logo...
                    </p>
                </div>
                <div className='category image'>
                    <img src='assets/projects/admiralCloud/logo.jpg'/>
                </div>
                <div className='category text'>
                    <p>
                        Bla Bla, decision for logo...
                    </p>
                </div>
                <Slider currentDevice={this.props.currentDevice}>
                    <img src='assets/projects/droemerKnaur/droemerKnaur_01.jpg'/>
                    <img src='assets/projects/droemerKnaur/droemerKnaur_02.jpg'/>
                    <img src='assets/projects/droemerKnaur/droemerKnaur_03.jpg'/>
                    <img src='assets/projects/droemerKnaur/droemerKnaur_04.jpg'/>
                    <img src='assets/projects/droemerKnaur/droemerKnaur_05.jpg'/>
                    <img src='assets/projects/droemerKnaur/droemerKnaur_06.jpg'/>
                </Slider>
                <div className='category text'>
                    <p>
                        I animated several infographics to illustrate the different features of the product.
                        All individual graphics are attached at the upper side of each page to offer a quick understanding.
                        We chose the »GIF« format to ensure an accurate representation of each color.
                    </p>
                </div>
                <div className='category design'>
                    <div className='color'>
                        <div style={{color: '#FFFFFF', background: '#1488CA' }}>
                            <div>
                                <p className='bold'>Pantone</p>
                                <p>7689 C</p>
                            </div>
                            <div>
                                <p className='bold'>C</p>
                                <p>80%</p>
                                <p className='bold'>M</p>
                                <p>35%</p>
                                <p className='bold'>Y</p>
                                <p>0%</p>
                                <p className='bold'>K</p>
                                <p>0%</p>
                            </div>
                            <div>
                                <p className='bold'>R</p>
                                <p>30</p>
                                <p className='bold'>G</p>
                                <p>140</p>
                                <p className='bold'>B</p>
                                <p>205</p>
                            </div>
                            <div>
                                <p className='bold'>HEX</p>
                                <p>#1488CA</p>
                            </div>
                        </div>
                        <div>
                            <div style={{ background: '#3599D1' }}></div>
                            <div style={{ background: '#48A2D6' }}></div>
                            <div style={{ background: '#64B0DC' }}></div>
                            <div style={{ background: '#98CBE8' }}></div>
                            <div style={{ background: '#FFFFFF' }}></div>
                        </div>
                    </div>
                    <div className='color'>
                        <div style={{color: '#FFFFFF', background: '#544F4F' }}>
                            <div>
                                <p className='bold'>Pantone</p>
                                <p>Black 7 C</p>
                            </div>
                            <div>
                                <p className='bold'>C</p>
                                <p>0%</p>
                                <p className='bold'>M</p>
                                <p>0%</p>
                                <p className='bold'>Y</p>
                                <p>0%</p>
                                <p className='bold'>K</p>
                                <p>92%</p>
                            </div>
                            <div>
                                <p className='bold'>R</p>
                                <p>65</p>
                                <p className='bold'>G</p>
                                <p>60</p>
                                <p className='bold'>B</p>
                                <p>60</p>
                            </div>
                            <div>
                                <p className='bold'>HEX</p>
                                <p>#544F4F</p>
                            </div>
                        </div>
                        <div>
                            <div style={{ background: '#6C6868' }}></div>
                            <div style={{ background: '#7A7676' }}></div>
                            <div style={{ background: '#8E8b8b' }}></div>
                            <div style={{ background: '#B4B2B2' }}></div>
                            <div style={{ background: '#FFFFFF' }}></div>
                        </div>
                    </div>
                    <div className='font' style={{ fontFamily: 'Nunito Sans, Helvetica Neue, sans-serif', color: '#544F4F' }}>
                        <p>Nunito Sans</p>
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
                        Überarbeitung...

                        We used a dark blue and a soft black as fundamental colors and introduced a light blue,
                        strong orange and juicy lime as accent colors. The font for the website is »Arial« which ensures an easy readibility.
                    </p>
                </div>
                <div className='category image'>
                    <img src='assets/projects/mmpro/mmpro_01.jpg'/>
                </div>
                <div className='category text'>
                    <p>
                        Überarbeitung...

                        All pages contain the same navigation and header which also introduce the particular functionality of the product.
                        The owl is part of the branding and appears several times on the website.
                        The whole concept is orientated torwards »Flat Design« which offers clarity and a simple comprehension.
                        The pages for the »Image Editing Service« have their own individual design to offer an additional platform for the department.
                    </p>
                </div>
                <div className='category image'>
                    <img src='assets/projects/mmpro/mmpro_01.jpg'/>
                </div>
            </div>
        );
    }
}
