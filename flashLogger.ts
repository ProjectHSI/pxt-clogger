let enableLogging = true

function createCV(sourcesString: string, level: LogLevel, content: string) {
    return [
        datalogger.createCV("Source", level),
        datalogger.createCV("Log Level", level.shortenedLevelString),
        datalogger.createCV("Content", content)
    ]
}

function logToFlashLog(sourcesString: string, level: LogLevel, content: string) {
    let cv = createCV(sourcesString, level, content)
    datalogger.log(cv[0], cv[1], cv[2])
}

function initFlashLog() {
    datalogger.deleteLog()
    datalogger.mirrorToSerial(false)
    datalogger.includeTimestamp(FlashLogTimeStampFormat.Milliseconds)
    datalogger.setColumns(["Source", "Log Level", "Content"])
}

datalogger.onLogFull(function() {
    enableLogging = false
})