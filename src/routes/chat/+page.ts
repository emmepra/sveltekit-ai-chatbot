import { PUBLIC_BE_ENDPOINT } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export async function load({ env }) {
	return {
    backend_endpoint: PUBLIC_BE_ENDPOINT
	};
}