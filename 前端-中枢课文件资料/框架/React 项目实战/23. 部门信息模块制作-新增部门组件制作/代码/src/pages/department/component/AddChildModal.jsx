import React, { useState } from 'react';
import { Modal, Table } from 'antd';
import { useSelector } from 'umi';
const { Column } = Table;

const AddChildModal = ({
  showChildModal,
  setShowChildModal,
  pushOrUpdateList,
}) => {
  const [childList, setChildList] = useState([]);
  const departmentList = useSelector((state) => {
    return state.department.departmentList.filter((item) => {
      return !item.parentLists.length;
    });
  });
  //- 清空+ 关闭弹窗的操作
  const clearSelect = () => {
    setShowChildModal(false);
  };

  //- 新增子部门操作
  const addChildList = () => {
    const sendData = { list: childList, type: 'add' };
    pushOrUpdateList(sendData);
    setShowChildModal(false);
  };

  return (
    <Modal
      title="增加子部门"
      visible={showChildModal}
      onCancel={clearSelect}
      onOk={addChildList}
      destroyOnClose
    >
      <Table
        dataSource={departmentList}
        rowSelection={{ onChange: (ids, record) => setChildList(record) }}
        pagination={false}
        expandIconColumnIndex={-1}
        rowKey={(record) => record._id}
      >
        <Column title="部门名称" dataIndex="departmentName" />
      </Table>
    </Modal>
  );
};

export default AddChildModal;
