import React from 'react';

class LinkTo extends React.Component {
    redirect(site){
        window.location.href = site.link;
    }
    render() {
        const { url } = this.props.params;
        const i = this.props.data.sitesList.findIndex((site) => site.url === url);
        const site = this.props.data.sitesList[i];

        return (
            this.redirect(site)
        )
    }

}


export default LinkTo;