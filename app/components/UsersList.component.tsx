"use client";

import { Link, List, ListItem } from "@chakra-ui/react";

export default function UsersList({ users }: { users: any[] }) {
  return (
    <List>
      {users.map((user, _i) => (
        <ListItem key={_i}>
          <Link href={`/dashboard/users/${user.name}`}>{user.name}</Link>
        </ListItem>
      ))}
    </List>
  );
}
