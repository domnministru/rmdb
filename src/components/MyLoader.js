import React from "react";
import { Loader, Segment } from "semantic-ui-react";

const MyLoader = () => (
    <div>
        <Segment>
            <Loader active />
        </Segment>
    </div>
);

export default MyLoader;