import * as cluster from 'cluster'

export const masterOnly = (...args: any[]) => (cluster.isMaster ? args : [])
