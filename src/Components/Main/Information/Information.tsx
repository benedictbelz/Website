import * as React from 'react';
import { Scrollbar } from '../../Scrollbar/Scrollbar';
import { TypeDevice } from '../../../@types/typeCommon';
import './Information.scss';

interface Props {
    currentDevice: TypeDevice | null;
}

export class Information extends React.Component<Props,{}> {

    calculateAge() {
        const today = new Date();
        const birth = new Date('1991-04-09');
        const year = today.getFullYear() - birth.getFullYear();
        const month = today.getMonth() - birth.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
            return year-1;
        } else {
            return year;
        }
    }

	render() {
		return (
            <Scrollbar color={'white'} currentDevice={this.props.currentDevice} id={'information'}>
                <div className='wrapper'>
                    <div id='picture'>
                        <img src='assets/interface/picture.jpg' draggable='false' />
                    </div>
                    <div id='introduction'>
                        <p>
                            I'm a <span id='age'>{this.calculateAge()}</span> year old Designer living and working in Berlin. I like shaping digital products, creating films and diving into various disciplines of art.<br/><br/>
                            I studied »Visual Communication« at Bauhaus University and am working currently as a freelancer.<br/><br/>
                            Just write an email if you like to contact me. Rumors say that I will respond within the next 24 hours.
                        </p>
                    </div>
                    <div id='contact'>
                        <div id='phone'>
                            <img src='assets/interface/phone.svg' draggable='false' />
                            <a className='underline white' href='tel:+491633938055'>+49 163 3938055</a>
                        </div>
                        <div id='email'>
                            <img src='assets/interface/email.svg' draggable='false' />
                            <a className='underline white' href='mailto:info@benedictbelz.eu'>info@benedictbelz.eu</a> 
                        </div>
                    </div>
                    <div id='social'>
                        <div>
                            <a title='LinkedIn' className='linkedin' href='https://www.linkedin.com/in/benedictbelz/' target='_blank' rel='noopener noreferrer'>
                                <img src='assets/social/linkedin.svg' draggable='false'/>
                            </a>
                            <a title='Instagram' className='instagram' href='https://www.instagram.com/benedictbelz' target='_blank' rel='noopener noreferrer'>
                                <img src='assets/social/instagram.svg' draggable='false'/>
                            </a>
                            <a title='Vimeo' className='vimeo' href='https://vimeo.com/benedictbelz' target='_blank' rel='noopener noreferrer'>
                                <img src='assets/social/vimeo.svg' draggable='false'/>
                            </a>
                            <a title='Pinterest' className='pinterest' href='https://www.pinterest.de/benedictbelz' target='_blank' rel='noopener noreferrer'>
                                <img src='assets/social/pinterest.svg' draggable='false'/>
                            </a>
                            <a title='GitHub' className='github' href='https://github.com/benedictbelz?tab=repositories' target='_blank' rel='noopener noreferrer'>
                                <img src='assets/social/github.svg' draggable='false'/>
                            </a>
                        </div>
                    </div>
                </div>
            </Scrollbar>
        );
	}
}
