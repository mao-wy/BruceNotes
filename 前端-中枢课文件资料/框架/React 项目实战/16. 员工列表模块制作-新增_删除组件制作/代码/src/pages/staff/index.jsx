import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'umi';
import SearchContainer from '../../components/SearchContainer';
import TableHeader from '../../components/TableHeader';
import FilterForm from './component/FilterForm';
import TableList from './component/TableList';

const staff = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { staffTotal, staffList } = useSelector((state) => state.staff);
  const { userInfo } = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state);

  useEffect(() => {
    _initStaffList(page);
  }, []);

  const _initStaffList = (currentPage) =>
    dispatch({
      type: 'staff/_initStaffList',
      payload: { size: 10, page: currentPage },
    });

  //- 改变当前展示列表的页数
  const changeCurrentPage = (currentPage) => {
    //- currentPage => 获取到的最新的页数
    setPage(currentPage);
    _initStaffList(currentPage);
  };

  return (
    <div className="main-content">
      {/* 公共的表格头部组件 */}
      <TableHeader
        page={page}
        total={staffTotal}
        size={10}
        changeCurrentPage={changeCurrentPage}
        interfaceDelMethod={'deleteStaffs'}
      />
      {/* 左侧搜索区域 */}
      <SearchContainer render={() => <FilterForm />} />
      <TableList userInfo={userInfo} staffList={staffList} loading={loading} />
    </div>
  );
};

export default staff;
