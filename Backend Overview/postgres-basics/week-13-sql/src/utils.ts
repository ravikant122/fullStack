import { Client } from 'pg';

export async function getClient() {
    // connection string is - postgresql://username:password@host/db
    const client = new Client("postgresql://test_owner:1hUSJ3jqGBtE@ep-sparkling-bonus-a5qepujv.us-east-2.aws.neon.tech/test?sslmode=require");
    await client.connect();
    return client;
}