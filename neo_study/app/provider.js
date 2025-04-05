"use client"
import React, { useEffect } from 'react'
import { db } from '@/configs/db'
import { useUser } from '@clerk/nextjs'
import { USER_TABLE } from '@/configs/schema'
import { eq } from 'drizzle-orm'

function provider({ children }) {
  const { user } = useUser();

  const checkIsNewUser = async () => {
    // Check if user already exists
    const result = await db.select().from(USER_TABLE)
      .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress));
    console.log(result);
    if (result?.length === 0) {
      // If no matching record exists, add the user to the database
      const userResp = await db.insert(USER_TABLE).values({
        name: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress
      }).returning({ id: USER_TABLE.id });
      console.log(userResp);
    }
  };

  useEffect(() => {
    if (user) {
      checkIsNewUser();
    }
  }, [user]);

  return (
    <div>
      {children}
    </div>
  );
}

export default provider;