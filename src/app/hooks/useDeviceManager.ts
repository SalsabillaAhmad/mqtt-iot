import { useDeviceView } from "./useDeviceView";
import { publisherOptions } from "./publisherOptions";
import { subscriberOptions } from "./subscriberOptions";

export function useDeviceManager(){
    const deviceView = useDeviceView()
    
return {
    ...deviceView, publisherOptions,subscriberOptions
}


}