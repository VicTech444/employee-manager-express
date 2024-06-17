interface formProps {
  role_name: string
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  roleId: string;
}

export default function EmployeeList({employees} : {employees: formProps[]}) {

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo Electrónico</th>
          <th>Teléfono</th>
          <th>Rol</th>
        </tr>
      </thead>
      <tbody>
        {employees?.map((emp) => (
          <tr key={emp.roleId}>
            <td>{emp.firstName}</td>
            <td>{emp.lastName}</td>
            <td>{emp.email}</td>
            <td>{emp.phone}</td>
            <td>{emp.role_name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
