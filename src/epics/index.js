import { ofType } from 'redux-observable'
import { ajax } from 'rxjs/ajax'
import { map, mergeMap, delay } from 'rxjs/operators'

import { fetchUserFulfilled } from '../actions'

export const pingEpic = action$ =>
    action$.pipe(
        ofType('FETCH_USER'),
        delay(1000),
        mergeMap(action =>
            ajax.getJSON(`https://api.github.com/users/${action.payload}`).pipe(
                map(response => fetchUserFulfilled(response))
            )
        )
    )
