import * as React from 'react';
import './Loader.scss';

interface Props {
    color: 'Black' | 'White';
    isLoading: boolean;
    percentage: number;
}

interface States {
    isVisible: boolean;
}

export class Loader extends React.Component<Props, States> {

    state: States = {
        isVisible: true
    }

    componentDidUpdate(prevProps: any) {
        if (!this.props.isLoading && prevProps.isLoading)
            setTimeout(() => this.setState({ isVisible: false }), 250);
    }

	render() {
		return (
            <div className={['loader', 'white', this.state.isVisible ? 'show' : ''].filter(x => x).join(' ')}>
                <div id="circle"></div>
                <div id="percentage">{this.props.percentage}%</div>
            </div>
        );
	}
}