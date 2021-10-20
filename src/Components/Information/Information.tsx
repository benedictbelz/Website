import * as React from 'react';
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
            <div id='information'>
                <h1>This is the information</h1>
            </div>
        );
	}
}