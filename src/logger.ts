import { LoggerService } from '@nestjs/common'
import * as chalk from 'chalk'
import * as cluster from 'cluster'

export class Logger implements LoggerService {
    static format = `${chalk.blue('[TTUKU]')}${chalk.green(
        `[${cluster.isMaster ? 'MASTER' : 'WORKER #' + cluster.worker.id}]`,
    )}`

    static Log(message: any): any {
        console.log(`${Logger.format} ${message}`)
    }

    static Error(message: any): any {
        console.error(`${Logger.format} ${message}`)
    }

    static Warn(message: any): any {
        console.warn(`${Logger.format} ${message}`)
    }

    static Debug(message: any): any {
        console.debug(`${Logger.format} ${message}`)
    }

    log = Logger.Log
    error = Logger.Error
    warn = Logger.Warn
    debug = Logger.Debug

    verbose(): any {
        // do noting
    }
}
