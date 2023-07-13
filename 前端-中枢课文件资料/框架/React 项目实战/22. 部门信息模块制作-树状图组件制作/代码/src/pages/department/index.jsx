import React, { useState } from 'react';
import { Button } from 'antd';
import classnames from 'classnames';
import { useSelector, useDispatch } from 'umi';
import iconMap from 'components/IconMap';
import Tree from './component/Tree';
import Dialog from 'components/Dialog';

const department = () => {
  const { collapse } = useSelector((state) => state.common);
  const [modalTitle, setModalTitle] = useState('创建部门');
  const [modalType, setModalType] = useState('update');
  const [dialogStatus, setDialogStatus] = useState(false);
  const dispatch = useDispatch();

  //- 新增部门弹窗打开
  const openDialog = () => {
    setDialogStatus(true);
    setModalTitle('创建部门');
    setModalType('add');
  };

  //- 点击树状图获取部门详情
  const getDepartmentDetail = (_id, name) => {
    setDialogStatus(true);
    setModalTitle(name);
    setModalType('update');
    dispatch({
      type: 'department/_getDepartmentDetail',
      payload: { _id },
    });
  };

  //- 指定弹窗头部内容生成
  const modalTitleComponent = (
    <div className="department-modal-title">
      <span className="ft-b">{modalTitle}</span>
      {modalType === 'update' && (
        <span className="delete-icon">{iconMap.del}</span>
      )}
    </div>
  );

  return (
    <div className="department-container">
      {/* 头部内容 */}
      <Button
        className={classnames('create-department-btn', { small: collapse })}
        size="small"
        shape="round"
        icon={iconMap.add}
        onClick={openDialog}
      >
        创建
      </Button>
      <Tree getDepartmentDetail={getDepartmentDetail} />
      {/* 新增部门与部门详情对话框 */}
      <Dialog
        title={modalTitleComponent}
        dialogStatus={dialogStatus}
        setDialogStatus={setDialogStatus}
        width={800}
        render={() => {}}
      />
    </div>
  );
};

export default department;
