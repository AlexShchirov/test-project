import React, { useState, useMemo, useCallback } from "react";
import { Card } from "flowbite-react";
import { UserType } from "../../types/userType";
import usersData from "../../mocks/users.json"
import { EMPTY_STRING } from "../../constants/shared";
import { TextInput } from "../TextInput/TextInput";
import { TableRow } from "../TableRow/TableRow";
import { TRANSLATION } from "../../constants/translations";

export const UserList = () => {
  const [userItem, setUserItem] = useState(EMPTY_STRING);

  const filteredUsers = useMemo(
    () => (usersData || []).filter((u: UserType) => u.name.toLowerCase().startsWith(userItem.toLowerCase())),
    [userItem]
  );

  const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserItem(e.target.value);
  }, []);

  return (
    <Card className="max-w-xl mx-auto p-4 border border-gray-200 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">{TRANSLATION.USER_LIST}</h3>
      <TextInput
        placeholder="Search by name"
        onChange={onChangeHandler}
        value={userItem}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{TRANSLATION.USER_NAME}</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{TRANSLATION.USER_AGE}</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{TRANSLATION.USER_CITY}</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredUsers.map((user: UserType) => (
              <TableRow key={user.name} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};