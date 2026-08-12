import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Caching is left at the adapter defaults. When ISR/on-demand revalidation is
// needed, wire an incremental cache here (KV or R2) and add the matching
// binding to wrangler.jsonc.
export default defineCloudflareConfig();
