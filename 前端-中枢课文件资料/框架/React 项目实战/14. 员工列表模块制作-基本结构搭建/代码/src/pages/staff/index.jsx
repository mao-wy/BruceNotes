import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'umi';
import TableHeader from '../../components/TableHeader';

const staff = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { staffTotal } = useSelector((state) => state.staff);

  useEffect(() => {
    _initStaffList(page);
  }, []);

  const _initStaffList = (currentPage) =>
    dispatch({ type: 'staff/_initStaffList', payload: { size: 10, page: currentPage } });

  //- 改变当前展示列表的页数
  const changeCurrentPage = (currentPage) => {
    //- currentPage => 获取到的最新的页数
    setPage(currentPage);
    _initStaffList(currentPage)
  };

  return (
    <div className="main-container">
      {/* 公共的表格头部组件 */}
      <TableHeader
        page={page}
        total={staffTotal}
        size={10}
        changeCurrentPage={changeCurrentPage}
        interfaceDelMethod={'deleteStaffs'}
      />
    </div>
  );
};

export default staff;
