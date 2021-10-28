import * as React from 'react';
import { Scrollbar } from '../../Scrollbar/Scrollbar';
import './Showroom.scss';

interface Props {

}

interface States {
    
}

export class Showroom extends React.Component<Props, States> {

    constructor(props: any) {
		super(props);
	}

	render() {
		return (
            <Scrollbar color={'white'} element={'showroom'}>
                <div id='showroom'>
                    <h1>This is the information</h1>
                </div>
            </Scrollbar>
        );
	}
}