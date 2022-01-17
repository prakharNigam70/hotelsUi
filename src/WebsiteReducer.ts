interface IWebsiteAction{
    payload : string[],
    type : string
}

export const WebsiteReducer = (state : string[], action : IWebsiteAction):string[] => {
    switch(action.type){
        case "WebsiteStarted" : return [];
        case "WebsiteCompleted" : return [...state, ...action.payload];
    }
    return [];
}

