import React from 'react';

import {Link} from 'react-router';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.windowPosition = this.windowPosition.bind(this);
        this.changePosition = this.changePosition.bind(this);
    }

    componentDidMount() {
        document.title = "Home - shemesh.info";
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
               <Madness/>
            </main>
        )
    }
}

class Madness extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            class: false
        };
    }

    maddnessClick(){
        const self = this;
        self.setState({class: true});
        setTimeout(function(){
            self.setState({class: false});
        }, 3000);
    }

    render() {
        return (
            <main className="main">
                <div id="eban" className={this.state.class ? 'show': ''}>
                    <img src="https://res.cloudinary.com/flere/image/upload/v1437997865/film_imgs/23_up8tzj.gif" alt="Piano man"/>
                </div>
                <div className="search_form">
                    <div className="wrapper">
                        <a className="waves-effect waves-light btn search_btn" onClick={this.maddnessClick.bind(this)}>Madness</a>
                    </div>
                </div>
            </main>
        )
    }
}


export default Home;
