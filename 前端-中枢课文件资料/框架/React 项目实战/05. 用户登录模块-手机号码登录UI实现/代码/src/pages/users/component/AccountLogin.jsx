// @ts-nocheck
import React from 'react';
import IconMap from 'components/IconMap';

const AccountLogin = ({ Input, FormItem }) => {
  return (
    <>
      <FormItem>
        <Input placeholder="请输入用户名" prefix={IconMap.userIcon} />
      </FormItem>
      <FormItem>
        <Input placeholder="请输入密码" prefix={IconMap.passwordIcon} />
      </FormItem>
    </>
  );
};

export default AccountLogin;
