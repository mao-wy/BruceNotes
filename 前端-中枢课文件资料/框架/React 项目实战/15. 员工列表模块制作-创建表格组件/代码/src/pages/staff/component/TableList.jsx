import React from 'react';
import { Table } from 'antd';
import { EditableRow, EditableCell } from 'components/Editable';
import Columns from './Columns';

//- 修改成功之后的保存事件
const handleSave = (...args) => {
  console.log(args);
};

const TableList = ({ userInfo, staffList, loading }) => {
  return (
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
      columns={Columns({ userInfo, handleSave })}
    />
  );
};

export default TableList;
