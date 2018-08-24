import React, { Component } from 'react';
import { DONUT_URL } from '../services/global-vars';
import { withRouter } from 'react-router';

/* eslint-disable */
class UniversalViewerContainer extends Component {
  componentDidMount() {
    this.loadUVEmbedScript();
  }

  componentDidUpdate(prevProps) {
    console.log('UPDATED');
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.removeUVEmbedScript();
      this.loadUVEmbedScript();
    }
  }

  componentWillUnmount() {
    this.removeUVEmbedScript();
  }

  loadUVEmbedScript() {
    const script = document.createElement('script');

    script.id = 'uv-embed-script';
    script.src = `${location.origin}/uv-2.0.2/lib/embed.js`;
    script.async = true;
    document.body.appendChild(script);
  }

  removeUVEmbedScript() {
    const el = document.getElementById('uv-embed-script');
    el.parentNode.removeChild(el);

    // This is a hack to get UV to re-render
    window.embedScriptIncluded = false;
  }

  render() {
    const { id, item } = this.props;
    console.log('id', id);

    if (!item) {
      return null;
    }

    return (
      <section className="item-viewer-wrapper">
        <div className="contain-1120">
          <div
            className="uv"
            data-locale="en-GB:English (GB),cy-GB:Cymraeg"
            data-config=""
            data-uri={`${DONUT_URL}concern/images/${id}/manifest`}
            data-collectionindex="0"
            data-manifestindex="0"
            data-sequenceindex="0"
            data-canvasindex="0"
            data-xywh="-1742,-20,4698,2007"
            data-rotation="0"
            style={styles.uvWrapper}
          />
        </div>
      </section>
    );
  }
}

const styles = {
  uvWrapper: {
    width: '100%',
    height: '600px',
    backgroundColor: '#000'
  }
};

export default withRouter(UniversalViewerContainer);
/* eslint-enable */
