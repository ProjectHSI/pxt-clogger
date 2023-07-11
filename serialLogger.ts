function logToSerialConsole(sourcesString: string, level: LogLevel, content: string) {
    serial.writeLine(`[${sourcesString}] (${level.shortenedLevelString}) : ${content}`)
}