export default {
	async fetch(request, env, ctx): Promise<Response> {
		const {body, headers } = request

		if (request.method === 'GET') {
			const route = request.url;
			if (route === '/signin') {
				// do sign in
			} else if (route === '/signout') {

			}
		}
		return new Response('Hello World!');
	},
	
	/*
		above function is all we have and we've to do routing like this, and we can't use express
		because express uses nodejs dependencies and its functions a lot and cloudflare's runtime is not suitable for that

		so we are gonna use HONO, library like express that we can use in cloudflare 
		we can also use middlewares and do same thing as express, hono provides some basic middlewares
	*/
} satisfies ExportedHandler<Env>;
