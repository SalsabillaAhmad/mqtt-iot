import { useState } from "react";

export function useDeviceView(){
    const[view,setView]= useState<"subscriber"|"publisher"|null>(null);

return {
    view, 
    setView
}
}