import React, { useState } from 'react';
import { Table } from 'antd';
import { EditableRow, EditableCell } from 'components/Editable';
import Columns from './Columns';
import Dialog from 'components/Dialog';
import RecordTable from './RecordTable';

const TableList = ({ userInfo, staffList, loading }) => {
  const [currentRecord, setCurrentRecord] = useState(null);
  const [dialogStatus, setDialogStatus] = useState(false);

  //- 修改成功之后的保存事件
  const handleSave = (...args) => {
    console.log(args);
  };

  //- 打开员工指定表格
  const openReviewRecord = (record) => {
    setCurrentRecord(record);
    setDialogStatus(true);
  };

  return (
    <>
      <Table
        components={{
          body: {
            row: EditableRow,
            cell: EditableCell,
          },
        }}
        // rowClassName={() => 'editable-row'}
        bordered
        scroll={{ x: true }}
        dataSource={staffList}
        pagination={false}
        rowKey={(record) => record._id}
        loading={loading.effects['staff/_initStaffList']}
        columns={Columns({ userInfo, handleSave, openReviewRecord })}
      />
      <Dialog
        title={currentRecord?.title}
        dialogStatus={dialogStatus}
        setDialogStatus={setDialogStatus}
        render={() => <RecordTable {...currentRecord} />}
      />
    </>
  );
};

export default TableList;
