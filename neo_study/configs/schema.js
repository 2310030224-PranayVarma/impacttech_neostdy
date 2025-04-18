//backend setup

import { pgTable, serial, text, varchar, integer, boolean } from 'drizzle-orm/pg-core';

export const USER_TABLE=pgTable('users',{
    id:serial().primaryKey(),
    userName:varchar().notNull(),
    email:varchar().notNull(),
    isMember:boolean().default(false )
})