import * as React from 'react';
import { Slider } from '../../../Slider/Slider';
import { TypeDevice } from '../../../../@types/typeCommon';

interface Props {
    currentDevice: TypeDevice | null;
}

interface States {
    
}
export class ZdfAspekte extends React.Component<Props, States> {
    render() {
        return (
            <div className='wrapper'>
                <Slider currentDevice={this.props.currentDevice}>
                    <img src='assets/projects/zdfaspekte/zdfaspekte_01.jpg'/>
                    <img src='assets/projects/zdfaspekte/zdfaspekte_02.jpg'/>
                    <img src='assets/projects/zdfaspekte/zdfaspekte_03.jpg'/>
                    <img src='assets/projects/zdfaspekte/zdfaspekte_04.jpg'/>
                </Slider>
            </div>
        );
    }
}
