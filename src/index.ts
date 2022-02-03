import {SetupServer} from './server'

enum ExitStatus { Failure = 1, Success = 0,}

(async (): Promise<void> => {
    try {
        const server = new SetupServer(3001)
        await server.init()
        server.start()
    } catch (error) {
        console.log("Error start servidor")
        process.exit(ExitStatus.Failure)        
    }
})()
