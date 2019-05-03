import React, {Component} from 'react';

import { BounceLoader } from 'react-spinners';

import { css } from "@emotion/core";

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class Spinner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    render() {
        return (
            <div className='sweet-loading'>
                <BounceLoader
                    css={override}
                    sizeUnit={"px"}
                    size={75}
                    color={'#4C586F'}
                    loading={this.state.loading}
                />
            </div>
        )
    }
}

export default Spinner;