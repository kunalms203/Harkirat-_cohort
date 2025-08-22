type EventType = "click"|"Hover"|"Touch"

type ExcludeEvent = Exclude<EventType,"Hover">;

const HandleEvent = (event : ExcludeEvent):void=>{
    console.log(`You have just ${event}`)
}

HandleEvent("click")