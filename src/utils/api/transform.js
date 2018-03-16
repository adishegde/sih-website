/* This file exports functions to make transformation of response data easy */

function objectTransformThunk(mapping) {
    // Return function that transforms object according to mapping
    return data =>
        Object.keys(data).reduce((acc, key) => {
            // If mapping does not exist, preserve old key
            let newKey = mapping[key];
            if (!newKey) newKey = key;

            acc[newKey] = data[key];

            return acc;
        }, {});
}

// Mapping is the object which maps the final keys to the response keys
export function transformResponseData(mapping) {
    // Invert the mapping given to transform response data
    const invertedMapping = Object.keys(mapping).reduce((acc, key) => {
        acc[mapping[key]] = key;
        return acc;
    }, {});

    // Return a function which uses the already computed invertedMapping to
    // return the tranformed data
    return objectTransformThunk(invertedMapping);
}

export function transformRequestData(mapping) {
    return objectTransformThunk(mapping);
}
