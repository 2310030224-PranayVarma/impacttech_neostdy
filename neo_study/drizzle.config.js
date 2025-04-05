
//backend setup
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_qraVCAGeQ2O0@ep-silent-morning-a5k5wkg3-pooler.us-east-2.aws.neon.tech/NeonStudy-DB?sslmode=require',
  }
});