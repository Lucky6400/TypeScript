/*
Flatland is a country with a number of cities, some of which have space stations. Cities are numbered consecutively and each has a road of 1km length connecting it to the next city. It is not a circular route, so the first city doesn't connect with the last city. Determine the maximum distance from any city to its nearest space station.
*/

function flatlandSpaceStations(n: number, c: number[]): number {
    c.sort((a, b) => a - b);
    if (n === c.length) return 0;

    let maxDist = c[0];

    for (let i = 1; i < c.length; i++) {
        let dist = Math.floor((c[i] - c[i - 1]) / 2);
        maxDist = Math.max(dist, maxDist);
    }

    let last_gap = (n - 1) - c[c.length - 1];

    return Math.max(last_gap, maxDist);
}
