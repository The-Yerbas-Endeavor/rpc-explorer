db.createUser(
  {
    user: "rpcexplorer",
    pwd: "3xp!0reR",
    roles: [
      {
        role: "readWrite",
        db: "explorerdb"
      }
    ]
  }
);
