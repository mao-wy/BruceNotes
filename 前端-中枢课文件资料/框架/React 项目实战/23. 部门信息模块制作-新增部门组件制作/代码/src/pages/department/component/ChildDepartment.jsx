import React, { useState } from 'react';
import { Table, Button, Modal } from 'antd';
import iconMap from 'components/IconMap';
import AddChildModal from './AddChildModal';

const { Column } = Table;
const childDepartment = ({ childList, pushOrUpdateList }) => {
  const [delIds, setDelIds] = useState([]);
  const [showDelModal, setShowDelModal] = useState(false);
  const [showChildModal, setShowChildModal] = useState(false);

  //- 增加子部门事件处理
  const getDepartmentList = () => {
    setShowChildModal(true);
  };

  //- 删除子部门
  const delDepartment = () => {
    console.log('del');
  };

  return (
    <>
      <Table
        dataSource={childList}
        rowSelection={{ onChange: (ids) => setDelIds(ids) }}
        pagination={false}
        expandIconColumnIndex={-1}
        rowKey={(record) => record._id}
      >
        <Column title="名称" dataIndex="departmentName" />
      </Table>
      {/* 操作按钮 */}
      <div className="operation">
        <Button
          type="primary"
          onClick={getDepartmentList}
          style={{ marginRight: '10px' }}
          icon={iconMap.api}
        >
          增加子部门
        </Button>
        <Button
          onClick={() => setShowDelModal(true)}
          disabled={!delIds.length}
          icon={iconMap.del}
        >
          解除子部门关联
        </Button>
      </div>

      {/* 新增子部门弹窗 */}
      <AddChildModal
        showChildModal={showChildModal}
        setShowChildModal={setShowChildModal}
        pushOrUpdateList={pushOrUpdateList}
      />

      {/* 删除子部门的弹窗 */}
      <Modal
        title="提示"
        visible={showDelModal}
        onOk={() => delDepartment}
        onCancel={() => setShowDelModal(false)}
      >
        确定要删除选择的部门么?
      </Modal>
    </>
  );
};

export default childDepartment;
