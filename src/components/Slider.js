import React, {Component} from "react";
import { tns } from 'tiny-slider/src/tiny-slider.module';
import 'tiny-slider/src/tiny-slider.scss';

class Slider extends Component {
    componentDidMount() {
        console.log(this.carousel);
        this.slider = tns({
            container: this.carousel,
            items: 5,
            controls: false,
            nav: false,
            gutter: 15,
            mouseDrag: true,
            arrowKeys: true,
            autoplay: true,
            autoplayButton: false,
            autoplayButtonOutput: false,
            autoplayHoverPause: true,

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