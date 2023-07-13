// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/hangang/Documents/渡一教育/织信管理系统相关内容/课程代码/各版本代码/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/layouts/index.jsx').default,
    "routes": [
      {
        "path": "/404Page",
        "exact": true,
        "component": require('@/pages/404Page/index.jsx').default
      },
      {
        "path": "/assessment",
        "exact": true,
        "component": require('@/pages/assessment/index.jsx').default
      },
      {
        "path": "/attendance",
        "exact": true,
        "component": require('@/pages/attendance/index.jsx').default
      },
      {
        "path": "/attendanceInfo",
        "exact": true,
        "component": require('@/pages/attendanceInfo/index.jsx').default
      },
      {
        "path": "/dashboard",
        "exact": true,
        "component": require('@/pages/dashboard/index.jsx').default
      },
      {
        "path": "/department",
        "exact": true,
        "component": require('@/pages/department/index.jsx').default
      },
      {
        "path": "/level",
        "exact": true,
        "component": require('@/pages/level/index.jsx').default
      },
      {
        "path": "/rewardRecord",
        "exact": true,
        "component": require('@/pages/rewardRecord/index.jsx').default
      },
      {
        "path": "/salary",
        "exact": true,
        "component": require('@/pages/salary/index.jsx').default
      },
      {
        "path": "/staff",
        "exact": true,
        "component": require('@/pages/staff/index.jsx').default
      },
      {
        "path": "/users/forgetPassword",
        "exact": true,
        "component": require('@/pages/users/forgetPassword.jsx').default
      },
      {
        "path": "/users/login",
        "exact": true,
        "component": require('@/pages/users/login.jsx').default
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
