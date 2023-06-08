"use client";

import { Link, List, ListItem } from "@chakra-ui/react";

export default function UsersList({ users }: { users: any[] }) {
  return (
    // list of users using chakra components
    <List>
      {users.map((user) => (
        <ListItem key={user.id}>
          <Link href={`/dashboard/users/${user.id}`}>
            <a>{user.name}</a>
          </Link>
        </ListItem>
      ))}
    </List>
  );
}
