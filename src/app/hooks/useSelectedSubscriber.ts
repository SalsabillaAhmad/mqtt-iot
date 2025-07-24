import { useState } from "react"

export function useSelectedSubscriber(){
    const[selectedSubscriber, setSelectedSubscriber]= useState<string|null>(null)

return {
    selectedSubscriber, setSelectedSubscriber
}
}