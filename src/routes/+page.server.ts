import 'dotenv/config';
import type { PageServerLoad } from './$types';

let channel: string = process.env.CHANNEL || '';
let host: string = process.env.API_HOST || '';

export const load: PageServerLoad = async () => {
    return {
        channel,
        host
    }
}
