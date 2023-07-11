interface LogLevel {
    levelString: string,
    shortenedLevelString: string
}

type loggerFunction = (sourcesString: string, level: LogLevel, content: string) => void

let loggers: loggerFunction[] = [
    logToSerialConsole
]

namespace CLogger {
    export function log(sources: string[], level: LogLevel, content: string): void {
        let sourcesString = sources.join("::")

        loggers.forEach(function(value: loggerFunction) {
            value(sourcesString, level, content)
        })
    }

    // optional here to avoid overriding flash data
    export function allowFlashLog() {

        initFlashLog()
        loggers[1] = logToFlashLog
    }
}

control.fail("test")