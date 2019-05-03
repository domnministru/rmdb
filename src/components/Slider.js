import React, {Component} from "react";

import { tns } from "tiny-slider/src/tiny-slider.module";

import "tiny-slider/src/tiny-slider.scss";

class Slider extends Component {
    componentDidMount() {
        this.slider = tns({
            container: this.carousel,
            items: this.props.items,
            controls: "#customize-controls",
            nav: this.props.nav,
            mouseDrag: this.props.mouseDrag,
            arrowKeys: this.props.arrowKeys,
            controlsText: ['<span class="fas fa-chevron-left" />', '<span class="fas fa-chevron-right" />']
        })
    }

    render() {
        return(
            <div ref={e => this.carousel = e}>
                {this.props.children}
            </div>
        )
    }
}

export default Slider;