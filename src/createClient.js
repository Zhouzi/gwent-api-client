/* @flow */

import { requestList, requestOne } from './request';
import * as helpers from './helpers';
import type { Client } from './types';

const APIRootURL = 'https://api.gwentapi.com/v0';

function getURL(resource: string): string {
    return `${APIRootURL}/${resource}`;
}

function createClient(): Client {
    const resources = {
        cards: 'cards',
        leaders: 'cards/leaders',
        categories: 'categories',
        factions: 'factions',
        groups: 'groups',
        rarities: 'rarities'
    };
    return Object.keys(resources).reduce(
        (acc, resource) =>
            Object.assign(acc, {
                [resource]: requestList.bind(null, getURL(resources[resource]))
            }),
        Object.assign({}, { one: requestOne }, helpers)
    );
}

export default createClient;
