const { Users } = require("../../app/Db");

const registUser = async (
  name,
  lastName,
  phone,
  user,
  email,
  password,
  active,
  image,
  type_rol
) => {
  const users = Users.Create({
    name,
    lastName,
    phone,
    user,
    email,
    password,
    active,
    image,
    type_rol,
  });

  return "Se ha registrado el usuario correctamente!";
};

const updateUser = async (
  name,
  lastName,
  phone,
  user,
  email,
  password,
  active,
  image
) => {
  const updateUsers = await Users.update(
    {
      name,
      lastName,
      phone,
      user,
      email,
      password,
      active,
      image,
    },
    {
      where: { id: id },
    }
  );
  return "Los datos del usuazrio han sido actualizados correctamente!";
};

const deleteUserProfile = async (id, active) => {
  const deleteUsersProfile = await Users.update(
    {
      active: active,
    },
    {
      where: { id: id },
    }
  );

  if (active !== true)
    return "El usuario permanecera inactivo por un periodo de 3 dias, luego de esto sera eliminado.";
  else return "El usuario volvio a ser activo!";
};

module.exports = {
  registUser,
  updateUser,
  deleteUserProfile,
};
