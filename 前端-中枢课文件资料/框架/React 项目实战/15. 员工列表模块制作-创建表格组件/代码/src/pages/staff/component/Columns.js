import { Tag } from 'antd';
import { formatYear, formatDate } from 'utils/format';

const Columns = ({ handleSave, userInfo }) => {
  /* 
  accountName: "letvpn"
avatar: "https://reactoa.hyfarsight.com/FrBl9IMFBoOS3a6tvN9DnjMSs_cK"
bankNumber: "123456789123456789"
education: 1
graduatedSchool: "天津大学"
hometown: "北京市朝阳区"
idNumber: "211302198305112819"
identity: 0
marriage: 0
onboardingTime: "2021-11-12T09:43:26.939Z"
salary: "4000"
   */
  const normalList = [
    {
      title: '姓名',
      dataIndex: 'userName',
      width: '200px',
      editable: true,
    },
    {
      title: '联系电话',
      width: '200px',
      editable: true,
      dataIndex: 'mobile',
    },
    {
      title: '职级描述',
      dataIndex: 'level',
      render: (data) => data?.levelDescription || '暂无职级描述',
    },
    {
      title: '性别',
      dataIndex: 'gender',
      width: '200px',
      editable: true,
      render: (gender) => <Tag> {gender === 1 ? '男' : '女'}</Tag>,
    },
    {
      title: '部门',
      dataIndex: 'department',
      render: (data) => data?.departmentName || '---',
    },
    {
      title: '部门负责人',
      dataIndex: 'department',
      render: (data) => data?.departmentLeader?.userName || '---',
    },
    {
      title: '年龄',
      dataIndex: 'idNumber',
      width: '200px',
      editable: true,
      render: (idNumber) => formatYear(idNumber, 'age'),
    },
  ];

  const authList = [
    {
      title: '入职时间',
      dataIndex: 'onboardingTime',
      width: '200px',
      editable: true,
      render: (date) => formatDate(date, 'YYYY-MM-DD'),
    },
  ];

  let renderColumnsList =
    userInfo.identity === 0 ? normalList : [...normalList, ...authList];

  renderColumnsList = renderColumnsList.map((col) => {
    if (!col.editable) {
      return col; //- 直接返回当前的渲染单元格
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: handleSave,
      }),
    };
  });

  return renderColumnsList;
};

export default Columns;
