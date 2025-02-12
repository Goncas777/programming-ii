const winston = require("winston");

const logger = winston.createLogger({
    level : "error",
    transports: [new winston.transports.File({
        filename: "cenas.log"
    })]
})

class ValidationError extends Error{
    constructor(message){
        super(message);
        this.bananas = message;
        logger.info(`ValidationError ${this.bananas} created`);

    }
}

try{
    const cenas = false;
    if(!cenas){
        logger.Error("Cenas is not valid")
        throw new ValidationError("BANG")
    }

} catch(e) {
    if (e instanceof(ValidationError)){
        logger.error("cenas", e);
        console.info("ValidationError")
    } else 
    logger.error(e)
    console.error("Common error")
}

