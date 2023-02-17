db.createUser(
  {
    user: "yerbuser",
    pwd: "pass",
    roles: [
      {
        role: "readWrite",
        db: "yerbexplorer"
      }
    ]
  }
);