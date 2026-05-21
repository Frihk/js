function defaultCurry(firstObj) {
    return function(secondObj) {
        return { ...firstObj, ...secondObj };
    }
}

function mapCurry(transformer) {
    return function(obj) {
        let result = {};
        let entries = Object.entries(obj);
        
        for (let i = 0; i < entries.length; i++) {
            let [oldKey, oldValue] = entries[i];
            let [newKey, newValue] = transformer([oldKey, oldValue]);
            result[newKey] = newValue;
        }
        return result;
    }
}

function reduceCurry(combiner) {
    return function(obj, start) {
        let entries = Object.entries(obj);
        
        let total = start !== undefined ? start : entries[0];
        let startIndex = start !== undefined ? 0 : 1;
        
        for (let i = startIndex; i < entries.length; i++) {
            total = combiner(total, entries[i]);
        }
        return total;
    }
}

function filterCurry(validator) {
    return function(obj) {
        let result = {};
        let entries = Object.entries(obj);
        
        for (let i = 0; i < entries.length; i++) {
            let [key, value] = entries[i];
            if (validator([key, value])) {
                result[key] = value;
            }
        }
        return result;
    }
}

function reduceScore(people, start = 0) {
    let forceUsers = filterCurry(([name, info]) => info.isForceUser)(people);
    
    return reduceCurry((total, [name, info]) => {
        return total + info.pilotingScore + info.shootingScore;
    })(forceUsers, start);
}

function filterForce(people) {
    return filterCurry(([name, info]) => {
        return info.isForceUser && info.shootingScore >= 80;
    })(people);
}

function mapAverage(people) {
    return mapCurry(([name, info]) => {
        let average = (info.pilotingScore + info.shootingScore) / 2;
        return [name, { ...info, averageScore: average }];
    })(people);
} 