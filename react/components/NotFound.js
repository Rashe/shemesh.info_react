import React from 'react';

class NoMatch extends React.Component {

    redirect(){
        window.location.href = 'https://shemesh.info/';
    }

    render() {
        return (
            <section>
                <section>Loading</section>
                {this.redirect()}
            </section>
        )
    }
}

export default NoMatch;