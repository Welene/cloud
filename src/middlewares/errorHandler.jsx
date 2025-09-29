export function sendResponse(status, data = {}, message = null) {
	const body = { ...data };
	if (message) body.message = message;
	return { status, body };
}

export function errorHandler(error) {
	const status = error.response?.status || 500;
	const message =
		error.response?.data?.message ||
		error.message ||
		'Internal server error';
	return sendResponse(status, {}, message);
}
