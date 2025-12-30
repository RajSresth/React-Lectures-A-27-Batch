import Role from "../model/rolesModel.js";

export const addRoles = async () => {
  const admin = await Role.findOne({ role: "admin" });

  if (!admin) {
    await Role.create({
      role: "admin",
      permissions: ["create", "read", "update", "delete"],
    });

  }

  const user = await Role.findOne({ role: "user" });
  if (!user) {
    await Role.create({
      role: "user",
      permissions: ["read"],
    });

  }

  console.log("Role is Ready!!");
};
