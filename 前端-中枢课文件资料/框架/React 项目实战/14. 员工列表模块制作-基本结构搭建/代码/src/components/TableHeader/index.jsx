import React from 'react';
import { Button, Pagination } from 'antd';
import iconMap from '../IconMap';
import classNames from 'classNames';
import { useSelector} from 'umi';
import './index.less';

const TableHeader = ({
  page,
  size,
  total,
  changeCurrentPage,
  interfaceDelMethod,
}) => {
  const { collapse}  = useSelector((state) => state.common);

  return (
    <div className={classNames('table-header-container', { 'big-style': collapse})} >
      <div>
        <Button className="mr-10" size="small" shape="round" icon={iconMap.add}>
          创建
        </Button>
        <Button danger size="small" shape="round" icon={iconMap.del}>
          批量删除
        </Button>
      </div>
      <div className="pagination-container">
        <Pagination
          simple
          defaultCurrent={page}
          current={page}
          pageSize={size}
          total={total}
          onChange={(page) => changeCurrentPage(page)}
        />
        <span>共计{total} 条记录</span>
      </div>
    </div>
  );
};

export default TableHeader;
