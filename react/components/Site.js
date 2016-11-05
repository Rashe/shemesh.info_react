import React from 'react';
import {Link} from 'react-router';

class Site extends React.Component {

    componentDidMount() {
        const site = this.getSite();
        document.title = site.name + " - Virtual reality porno list";
        window.scrollTo(0,0);
    }

    getSite(){
        const {url} = this.props.params;
        const i = this.props.data.sitesList.findIndex((site) => site.url === url);
        return this.props.data.sitesList[i];
    }

    render() {
       const site = this.getSite();
        return (
            <section>
                <div className="itemType">
                    <div className="goBack">
                        <Link to={'/'}>
                            Go back
                        </Link>
                    </div>
                    <main>
                        <Link to={`/link/${site.url}`} target='_blank'>
                            <h1 className="center">{site.name}</h1>
                        </Link>
                        <div className="center visitSite">
                            <Link to={`/link/${site.url}`} className="red" target='_blank'>
                                Visit Site
                            </Link>
                        </div>

                        <Reviews data={site.text}/>
                        <ImageList data={site.image_preview} name={site.name}/>
                        <VideoList data={site.videos}/>

                    </main>
                </div>
            </section>
        )
    }
}

class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            generate: true
        };
    }

    getnerateData(data) {
        let arr = [];
        data.map(function (item, index) {
            arr.push(
                <article key={index}>
                    <p>{item}</p>
                </article>
            );
        });
        return arr;
    }

    showHide() {
        if (this.state.show) {
            this.setState({show: false})
        } else {
            this.setState({show: true})
        }
    }

    render() {
        return (
            <section className="review">
                <h2>Reviews
                    <span className="showItems"
                          onClick={this.showHide.bind(this)}>{this.state.show ? 'Hide' : 'Show'}</span>
                </h2>
                <div className={this.state.show ? '' : 'hide'}>
                     {this.props.data && this.state.generate ? this.getnerateData(this.props.data) :
                         <ErrorOutput data="There are no reviews right now"/>}
                </div>
            </section>
        )
    }
}

class ImageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            generate: true
        };
    }

    getnerateData(data, name) {
        let arr = [];
        data.map(function (item, index) {
            arr.push(
                <div className="center mediaPreview" key={index}>
                    <img src={item} alt={name} title={name}/>
                </div>
            );
        });
        return arr;
    }

    showHide() {
        if (this.state.show) {
            this.setState({show: false})
        } else {
            this.setState({show: true})
        }
    }

    render() {
        return (
            <section className="imageList">
                <h2>Images
                    <span className="showItems"
                          onClick={this.showHide.bind(this)}>{this.state.show ? 'Hide' : 'Show'}</span>
                </h2>
                <div className={this.state.show ? '' : 'hide'}>
                     {this.props.data ? this.getnerateData(this.props.data, this.props.name) :
                         <ErrorOutput data="There are no images right now"/>}
                </div>
            </section>
        )
    }
}

class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            generate: true
        };
    }

    getnerateData(data) {
        let arr = [];
        data.map(function (item, index) {
            arr.push(
                <div className="center mediaPreview" key={index}>
                    <video controls poster={item.poster}>
                        <source src={item.video}
                                type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'/>
                    </video>
                </div>
            );
        });
        return arr;
    }

    showHide() {
        if (this.state.show) {
            this.setState({show: false})
        } else {
            this.setState({show: true})
        }
    }

    render() {
        return (
            <section className="videoList">
                <h2>Videos <span className="showItems"
                                 onClick={this.showHide.bind(this)}>{this.state.show ? 'Hide' : 'Show'}</span>
                </h2>
                <div className={this.state.show ? '' : 'hide'}>
                     {this.props.data ? this.getnerateData(this.props.data) :
                         <ErrorOutput data="There are no videos right now"/>}
                </div>
            </section>
        )
    }
}

class ErrorOutput extends React.Component {
    render() {
        return (
            <div className="errorOutput center">
                <p>
                    {this.props.data}
                </p>
            </div>
        )
    }
}


export default Site;