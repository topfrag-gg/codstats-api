export interface LivenessResponse {
	status?: string;
	service?: string;
	version?: string;
	timestamp?: string;
	uptime?: string;
}

export interface ReadinessResponse {
	status?: string;
	message?: string;
	database?: string;
	service?: string;
	version?: string;
	uptime?: string;
}
