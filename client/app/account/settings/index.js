'use strict';

import angular from 'angular';
import SettingsController from './settings.controller';

export default angular.module('fullstackProjectApp.settings', [])
  .controller('SettingsController', SettingsController)
  .name;
