import { Injectable } from '@nestjs/common'
import * as cluster from 'cluster'
import { Logger } from './logger'
import { worker } from 'cluster'

@Injectable()
export class ClusterService {
    static clusterize(callback: () => void) {
        if (cluster.isMaster) {
            Logger.Log('마스터 프로세스가 실행되었습니다.')
            for (let i = 0; i < Number(process.env.CLUSTERS); i++) {
                cluster.fork()
            }
            cluster.on('exit', (worker) => {
                Logger.Log(
                    `워커 #${worker.id}이 종료되었습니다. 재시작중입니다....`,
                )
                cluster.fork()
            })
        } else {
            Logger.Log(`워커 #${worker.id}이 실행되었습니다.`)
        }
        callback()
    }
}
