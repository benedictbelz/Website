import * as React from 'react';
import { Scrollbar } from '../../Scrollbar/Scrollbar';
import { Device } from '../../../@types/typeCommon';
import './Showroom.scss';

interface Props {
    currentDevice: Device;
}

interface States {
    
}

export class Showroom extends React.Component<Props, States> {

	render() {
		return (
            <Scrollbar color={'white'} currentDevice={this.props.currentDevice} element={'showroom'}>
                <div id='showroom'>
                    <h1>This is the information</h1>
                </div>
            </Scrollbar>
        );
	}
}