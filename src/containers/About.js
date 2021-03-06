import React from 'react';
import FeatureBox from '../components/FeatureBox';
import { Link } from 'react-router-dom';
import iranianCinema from '../images/feature-box-collection-iranian-cinema.jpg';
import colonialism from '../images/feature-box-collection-colonialism.jpg';
import bursarsOffice from '../images/feature-box-collection-bursars-office.jpg';
import cassas from '../images/feature-box-collection-cassas.jpg';
import roadTrip from '../images/feature-box-collection-road-trip.jpg';
import wwII from '../images/feature-box-collection-wwII.jpg';
import { productionIds } from '../services/global-vars';

const featuredCollections = [
  {
    description: 'Posters depicting the social history of Iranian cinema.',
    id: productionIds.hamidNaficy,
    image: iranianCinema,
    label: 'Hamid Naficy Iranian Movie Posters Collection'
  },
  {
    description: `Photographs representing colonialism in East Africa over the span
    of 100 years.`,
    id: productionIds.vernonMcKay,
    image: colonialism,
    label: 'Vernon McKay Photographs'
  },
  {
    description: `Images documenting the 1968 takeover of the Northwestern University Bursar's office.`,
    id: productionIds.bursarsOffice,
    image: bursarsOffice,
    label: 'Records of the Bursar’s Office Takeover, May 1968'
  },
  {
    description: 'US Government posters from WWII.',
    id: productionIds.wpa,
    image: wwII,
    label: 'World War II Poster Collection at Northwestern University Library'
  },
  {
    description: 'Late sketches from modernist artist Ramón Casas.',
    id: productionIds.ramonCasas,
    image: cassas,
    label: 'Ramón Casas sketchbooks'
  },
  {
    description: `Photographs from a 1915 road trip from Iowa to the Panama-Pacific
    exposition.`,
    id: productionIds.kateAndLou,
    image: roadTrip,
    label: 'Kate and Lou. Souvenir of auto trip to San Francisco, 1915'
  }
];

const About = props => {
  const bgImage = require(`../images/about-hero.jpg`);
  const styles = {
    heroBg: {
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  };

  return (
    <div className="landing-page">
      <div className="section hero contain-1440">
        <div className="hero-image" style={styles.heroBg}>
          <div className="contain-1120">
            <h2>Repository and Digital Curation</h2>
            <p>What we do and why it matters</p>
          </div>
        </div>
      </div>

      <div id="page">
        <main id="main-content" className="content" tabIndex="0">
          <div className="section contain-1120">
            <p>
              {`Digital Collections contains XXXXX items from Northwestern
              University Libraries. While only a fraction of materials from the
              Libraries' collections are represented, the site is representative
              of the distinction and diversity of collections from the `}
              <a
                href="https://www.library.northwestern.edu/libraries-collections/government-collection/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Northwestern Government and Geographic Information collection
              </a>
              ,{' '}
              <a
                href="https://www.library.northwestern.edu/libraries-collections/herskovits-library/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Herskovits Library of African Studies
              </a>
              ,{' '}
              <a
                href="https://www.library.northwestern.edu/libraries-collections/music/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Music Library
              </a>
              ,{' '}
              <a
                href="https://www.library.northwestern.edu/libraries-collections/special-collections/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                McCormick Library of Special Collections
              </a>
              ,{' '}
              <a
                href="https://www.library.northwestern.edu/libraries-collections/transportation/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Transportation Library
              </a>
              , and{' '}
              <a
                href="https://www.library.northwestern.edu/libraries-collections/university-archives/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                University Archives
              </a>
              .
            </p>
          </div>

          <div className="contain-1120">
            <h3>Collection Highlights</h3>
            <p>
              Our collections are comprised of a range of media covering many
              topics. Highlights include:
            </p>
          </div>

          <div className="section contain-1120">
            <div className="feature-three-col">
              {featuredCollections.map(
                (feature, index) =>
                  index < 3 ? (
                    <FeatureBox key={feature.id} item={feature} />
                  ) : null
              )}
            </div>
          </div>

          <div className="section contain-1120">
            <div className="feature-three-col">
              {featuredCollections.map(
                (feature, index) =>
                  index > 2 ? (
                    <FeatureBox key={feature.id} item={feature} />
                  ) : null
              )}
            </div>
            <p>
              Not all of our digital collections are available to the public. If
              you have questions about these collections or the software behind
              this site, please <Link to="/contact-us">contact us</Link>.
            </p>
          </div>

          <div className="section contain-1120">
            <h3>Using the collections</h3>
            <p>
              All of the content in Digital Collections has a statement that
              indicates how it can be reused. This is found at{' '}
              <Link to="/">XYZlocation</Link>. For more information, go to{' '}
              <a
                href="https://rightsstatements.org/page/1.0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://rightsstatements.org/page/1.0/
              </a>
            </p>

            <p>
              We currently make all content metadata and images available as
              IIIF manifests backed by a IIIF compliant image server. This
              allows researchers to see detailed, zoomable images on this site
              as well as use the content in outside tools such as
              {` `}
              <a
                href="http://projectmirador.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mirador
              </a>
              , embed on third-party websites, and programmatically query the
              data. More information about IIIF and related projects is
              available on on the{' '}
              <a
                href="https://iiif.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                IIIF website
              </a>
              .
            </p>
          </div>
          <div className="section contain-1120">
            <h3>Platform</h3>
            <ul>
              <li>
                The repository and metadata management software is a{' '}
                <a
                  href="https://rubyonrails.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ruby on Rails application
                </a>{' '}
                built from{' '}
                <a
                  href="https://samvera.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Samvera Community
                </a>{' '}
                components.
              </li>
              <li>
                The Digital Collections front end is built using{' '}
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ReactJS
                </a>
                .
              </li>
              <li>
                Our zoomable, high-resolution images are are driven by{' '}
                <a
                  href="https://iiif.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IIIF
                </a>
                .
              </li>
              <li>
                {`Northwestern's code
              is open by default and published on `}
                <a
                  href="https://github.com/nulib/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub.
                </a>
              </li>
              <li />
              <li />
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;
