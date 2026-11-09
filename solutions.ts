function multiplyValue(value: number, multiplier?: number): number{
    if(multiplier === undefined){
        return value * 2
    }
    else{
        return value * multiplier
    }
}

function processInput(value: string | number | boolean): string | number{
    if(typeof value === "string"){
        return value.trim().toLowerCase()
    }
    else if(typeof value === "number"){
        return value * 10
    }
    else{
        if(value){
            return "Active"
        }
        else{
            return "Inactive"
        }
    }
}


function formatCoordinate(location: readonly [number, number, string] ): string{
    const latitude = location[0]
    const longitude = location[1]
    const locationName = location[2]

    return `Location: ${locationName} (${latitude}, ${longitude})`
}
