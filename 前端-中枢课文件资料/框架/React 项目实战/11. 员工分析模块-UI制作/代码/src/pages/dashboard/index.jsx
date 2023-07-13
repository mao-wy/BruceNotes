import React, { useEffect } from 'react';
import StaffAmount from './component/StaffAmount';
import OldStaffTable from './component/OldStaffTable';
import { useSelector, useDispatch } from 'umi';
import './css/index.less';

const index = () => {
  const {
    amountDataList,
    pieList,
    columnList,
    marriageData,
    staffData,
    constellationData,
  } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  console.log(
    amountDataList,
    pieList,
    columnList,
    marriageData,
    staffData,
    constellationData,
  );

  useEffect(() => {
    dispatch({ type: 'dashboard/initDashboardList' });
  }, []);

  return (
    <div className="dashboard-container">
      {/* 员工展示组件 执行四次 */}
      {amountDataList.map((item, index) => (
        <StaffAmount key={index} {...item} />
      ))}

      {/* 最老的十个员工 */}
      <OldStaffTable {...staffData} />
    </div>
  );
};

export default index;
