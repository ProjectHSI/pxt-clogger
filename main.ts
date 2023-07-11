interface LogLevel {
    levelString: string
}

declare namespace CLogger {
    export function log(source: Array<string>, level: LogLevel): void {
        
    }
}