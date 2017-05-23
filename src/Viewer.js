import React, {Component} from 'react';

class Viewer extends Component {

    componentDidMount() {
        var urlid = '18de111a137f4aa0b2852f9ebe89ce3f';
        var client = new window.Sketchfab('1.0.0', this.iframe);
        client.init(urlid, {
            success: (api) => {
                api.start();
                api.addEventListener('viewerready', function() {
                    api.setCameraLookAt( [20,20,20], [0,0,0] );
                });
            },
            error: function onError() {
                console.log('Viewer error');
            }
        });
    }

    render() {
        return (
            <div className="sketchfab-viewer">
                <iframe ref={(iframe) => {
                    this.iframe = iframe;
                }} src="about:blank" allowFullScreen="allowfullscreen" title="Sketchfab Viewer" width="640" height="400"></iframe>
            </div>
        );
    }
}

export default Viewer;
