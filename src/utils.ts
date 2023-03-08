export function findMaxKey(map: Map<number, any>): number {
    let maxKey = -1;
    for (const key of map.keys()) {
        if (key > maxKey) {
            maxKey = key;
        }
    }
    return maxKey;
}