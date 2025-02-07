import { en } from './en/common.js';
import { vi } from './vi/common.js';

// Convert JSON strings back to objects
const convertJSONStrings = (obj) => {
    const newObj = { ...obj };
    Object.keys(newObj).forEach(key => {
        if (typeof newObj[key] === 'string' && newObj[key].startsWith('[')) {
            try {
                newObj[key] = JSON.parse(newObj[key]);
            } catch (e) {
                // Keep original string if parsing fails
            }
        }
    });
    return newObj;
};

export const resources = {
    en: {
        translation: convertJSONStrings(en)
    },
    vi: {
        translation: convertJSONStrings(vi)
    }
};