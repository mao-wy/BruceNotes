// @ts-nocheck
import React from 'react';
import IconMap from 'components/IconMap';
import { Button } from 'antd';

const SmCodeLogin = ({ FormItem, Input }) => {
  return (
    <>
      <FormItem>
        <Input placeholder="请输入手机号码" prefix={IconMap.mobileIcon} />
      </FormItem>
      <FormItem>
        <Input
          placeholder="请输入验证码"
          prefix={IconMap.codeIcon}
          addonAfter={<Button>发送验证码</Button>}
        />
      </FormItem>
    </>
  );
};

export default SmCodeLogin;
