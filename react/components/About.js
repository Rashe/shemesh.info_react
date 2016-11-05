import React from 'react';

import {Link} from 'react-router';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.windowPosition = this.windowPosition.bind(this);
        this.changePosition = this.changePosition.bind(this);
    }

    componentDidMount() {
        document.title = "About - shemesh.info";
        this.changePosition();
        window.addEventListener('scroll', this.windowPosition);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.windowPosition);
    }

    changePosition() {
        let pos = this.props.data.windowPosition;
        if (pos)
            window.scrollTo(0, pos);
    }

    windowPosition() {
        this.props.saveWindowPosition(document.body.scrollTop);
    }

    render() {
        return (
            <main className="main">
                <section id="about" className="container center">
                    <h1>About</h1>
                    <article>
                        <p>Did you know I was a fireman?</p>
                        <img width="960" height="638" src="https://res.cloudinary.com/flere/image/upload/film_imgs/jkiee_zprvqd.jpg"
                             alt="me"/>
                    </article>
                </section>
            </main>
        )
    }
}


export default About;
