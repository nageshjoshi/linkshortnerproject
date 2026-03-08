import { pgTable, text, timestamp, uniqueIndex, index, bigint } from 'drizzle-orm/pg-core';

export const shortenedLinks = pgTable(
  'shortened_links',
  {
    id: bigint('id', { mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
    userId: text('user_id').notNull(),
    originalUrl: text('original_url').notNull(),
    shortCode: text('short_code').notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => {
    return {
      shortCodeUnique: uniqueIndex('short_code_unique').on(table.shortCode),
      userIdIndex: index('user_id_index').on(table.userId),
    };
  }
);
