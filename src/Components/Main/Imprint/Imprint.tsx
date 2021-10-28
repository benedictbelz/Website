import * as React from 'react';
import { Scrollbar } from '../../Scrollbar/Scrollbar';
import './Information.scss';

interface Props {

}

interface States {
    
}

export class Information extends React.Component<Props, States> {

    constructor(props: any) {
		super(props);
	}

	render() {
		return (
            <Scrollbar color={'white'} element={'imprint'}>
                <div id='imprint'>
                    <h1>This is the information</h1>
                </div>
            </Scrollbar>
        );
	}
}