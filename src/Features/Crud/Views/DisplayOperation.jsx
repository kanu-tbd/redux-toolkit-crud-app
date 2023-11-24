import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, editUsers, getUsers } from "../../../Api/Contents";
import { useMemo } from "react";
import {
  MRT_EditActionButtons,
  MantineReactTable,
  useMantineReactTable,
} from "mantine-react-table";
import { ActionIcon, Box, Button, Flex, Stack, Title } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import FormModal from "../../../Component/Common/FormModal";

const DisplayOperation = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [isEdit,setIsEdit] = useState("Add User")
  const dispatch = useDispatch();
  const user = useSelector((y) => y.user.data);
  const isRefresh = useSelector((y) => y.user.isRefresh);
  console.log(isRefresh, "bbbbbbb");
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch, isRefresh]);
  console.log(user);
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "id", //access nested data with dot notation
        header: "ID",
      },
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "phone", //normal accessorKey
        header: "Phone",
      },
      {
        accessorKey: "createdAt",
        header: "Created At",
      },
    ],
    []
  );
  const data = user.length > 0 ? user : [];
  const table = useMantineReactTable({
    columns,
    data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableRowActions: true,
    positionActionsColumn: "last",
    renderTopToolbarCustomActions: ({ table }) => (
      <Button
        onClick={() => {
          toggle();
          setIsEdit("Add User")
        }}
      >
        Create New User
      </Button>
    ),
    renderRowActions: ({ row }) => (
      <Box sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}>
        <ActionIcon
          color="orange"
          onClick={() => {
            // table.setEditingRow(row);
            dispatch(editUsers(row.original.id));
            setIsEdit("Update")
            toggle();
            console.log(row.original.id,"edit");
          }}
        >
          <IconEdit />
        </ActionIcon>
        <ActionIcon
          color="red"
          onClick={() => {
            console.log(row.original.id);
            dispatch(deleteUsers(row.original.id));
          }}
        >
          <IconTrash />
        </ActionIcon>
      </Box>
    ),
  });

  return (
    <React.Fragment>
      <FormModal modal={modal} toggle={toggle} isEdit={isEdit}/>
      <MantineReactTable table={table} />;
    </React.Fragment>
  );
};

export default DisplayOperation;
