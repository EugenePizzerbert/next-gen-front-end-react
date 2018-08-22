import { ELASTICSEARCH_PROXY_BASE } from '../services/global-vars';

const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
  host: ELASTICSEARCH_PROXY_BASE + '/search',
  log: 'trace'
});

export async function getItem(id) {
  const response = await client.get({
    index: 'common',
    ignore: [404],
    type: '_all',
    id: id
  });
  return response;
}

export async function getCollection(id) {
  const response = await client.get({
    index: 'common',
    ignore: [404],
    type: '_all',
    id: id
  });
  return response;
}

export async function getAllCollections() {
  const response = await client.search({
    index: 'common',
    body: {
      query: {
        match: { 'model.name': 'Collection' }
      }
    }
  });
  return response;
}

export async function getCollectionItems(id) {
  const response = await client.search({
    index: 'common',
    body: {
      query: {
        bool: {
          must: [
            { match: { 'model.name': 'Image' } },
            {
              nested: {
                path: 'collection',
                query: { match: { 'collection.id': id } }
              }
            }
          ]
        }
      }
    }
  });
  return response;
}

export async function getAdminSetItems(id) {
  const response = await client.search({
    index: 'common',
    body: {
      query: {
        bool: {
          must: [
            { match: { 'model.name': 'Image' } },
            {
              nested: {
                path: 'admin_set',
                query: { match: { 'admin_set.id': id } }
              }
            }
          ]
        }
      }
    }
  });
  return response;
}

export async function getCollectionsByKeyword(keyword) {
  const response = await client.search({
    index: 'common',
    body: {
      query: {
        bool: {
          must: [
            { match: { 'model.name': 'Collection' } },
            { match: { keyword: keyword } }
          ]
        }
      }
    }
  });
  return response;
}

export async function getRecentlyDigitizedItems() {
  const response = await client.search({
    index: 'common',
    body: {
      query: {
        match: { 'model.name': 'Image' }
      }
    }
  });
  return response;
}
