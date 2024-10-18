import React from 'react';
import { UserType } from '../../types/userType';

interface TableRowProps {
  user: UserType;
}

const TableRow: React.FC<TableRowProps> = ({ user }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="font-bold">{user.name}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">{user.age}</td>
      <td className="px-6 py-4 whitespace-nowrap">{user.city}</td>
    </tr>
  );
};

export default TableRow;