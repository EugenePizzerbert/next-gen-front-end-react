import * as globalVars from './global-vars';

function constructCarouselItems(docs, modelType) {
  const iiifUrlKey =
    modelType === globalVars.COLLECTION_MODEL
      ? 'thumbnail_iiif_url'
      : 'representative_file_url'; // this may not hold true as we get other types...

  const items = docs.map(doc => {
    let obj = {
      id: doc._id,
      type: modelType,
      imageUrl: doc._source[iiifUrlKey]
        ? `${doc._source[iiifUrlKey]}${globalVars.IIIF_MEDIUM_ITEM_REGION}`
        : '',
      label: getESTitle(doc._source),
      description: getESDescription(doc._source)
    };

    return obj;
  });
  return items;
}

export function extractCarouselData(elasticsearchResponse, modelType) {
  let obj = {};

  obj.numFound = elasticsearchResponse.hits.total;
  obj.items = constructCarouselItems(
    elasticsearchResponse.hits.hits,
    modelType
  );
  return obj;
}

/**
 * Returns 'description' from ElasticSearch data structure
 * For now, just returns the first description if there are multiples
 * @param {Object} _source
 */
export function getESDescription(_source) {
  return _source.description && _source.description.length > 0
    ? _source.description[0]
    : '';
}

/**
 * Returns 'title' from ElasticSearch data structure
 * For now, just returns the first title if there are multiples
 * @param {Object} _source
 */
export function getESTitle(_source) {
  if (!_source.title) {
    return '';
  }
  const { title } = _source;
  let primary = title.primary.length > 0 ? title.primary[0] : '';
  let alternate =
    title.alternate && title.alternate.length > 0 ? title.alternate : '';

  return `${primary} ${alternate ? ` (${alternate})` : ''}`;
}

function getIIIFUrlKey(modelType) {
  return modelType === globalVars.COLLECTION_MODEL
    ? 'thumbnail_iiif_url'
    : 'representative_file_url';
}

/**
 * Map data from elastic search response, to what the PhotoGrid component needs
 * @param {Object} elasticsearchResponse Raw elastic search response object
 * @param {String} modelType // Item or Collection?
 */
export function prepPhotoGridItems(elasticsearchResponse, modelType) {
  const iiifUrlKey = getIIIFUrlKey(modelType);
  const { hits } = elasticsearchResponse.hits;
  console.log('hits', elasticsearchResponse.hits);

  return hits.map(hit => ({
    id: hit._id,
    type: modelType,
    imageUrl: hit._source[iiifUrlKey]
      ? `${hit._source[iiifUrlKey]}${globalVars.IIIF_MEDIUM_ITEM_REGION}`
      : '',
    label: getESTitle(hit._source),
    description: getESDescription(hit._source)
  }));
}

/**
 * Mapping of all possible work types Solr knows about, to how these work types are represented in a Hyrax URL
 * ie. 'Image' translates into 'images' in the following url: http://devbox.library.northwestern.edu/concern/images/7e2ca0a5-3a2e-4074-a475-944710e07b2f
 * @return {Map} An ES2015 Map, which is like an Object, but better suited here for a key/value store.
 */
function getModelUriMap() {
  let modelUriMap = new Map();
  modelUriMap.set('Image', 'images');
  return modelUriMap;
}

export function getModelUriSegment(has_model_ssim) {
  const modelUriMap = getModelUriMap();
  const segment = modelUriMap.get(has_model_ssim[0]);
  return segment;
}
