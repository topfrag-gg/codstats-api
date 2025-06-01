import prettyMs from 'pretty-ms';

// Cache CPU, memory usage, and uptime
let cachedUptime = prettyMs(process.uptime());

// Cache uptime to avoid recalculating it for every request
setInterval(() => {
	cachedUptime = prettyMs(process.uptime());
}, 1000); // Update every second

// Function to get cached uptime
export const getCachedUptime = (): string => cachedUptime;
