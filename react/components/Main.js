import React from 'react';

import Header from './Header';
import Footer from './Footer';


class Main extends React.Component{
    render() {
        return (
            <section>
                <Header/>
                {React.cloneElement(this.props.children, {...this.props})}
                {/*<Footer/>*/}
            </section>
        )
    }
}

export default Main;