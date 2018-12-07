import { Injectable } from '@angular/core';
import { CordovaProperty, IonicNativePlugin, Plugin } from '@ionic-native/core';

declare const window: any;

/**
 * @name Aronia
 * @description
 * Access information about the underlying device and platform.
 */

@Plugin({
  pluginName: 'cordova-plugin-aronia',
  plugin: 'cordova-plugin-aronia',
  pluginRef: 'Aronia',
  repo: 'https://github.com/C00kie-jAR/ARonia',
  platforms: ['Android', 'Browser', 'iOS', 'macOS', 'Windows']
})

@Injectable()
export class Aronia extends IonicNativePlugin {

  // /** Get the version of Cordova running on the device. */
  // @CordovaProperty
  // cordova: string;

  // /**
  //  * The device.model returns the name of the device's model or product. The value is set
  //  * by the device manufacturer and may be different across versions of the same product.
  //  */
  // @CordovaProperty
  // model: string;

  // /** Get the device's operating system name. */
  // @CordovaProperty
  // platform: string;

  // /** Get the device's Universally Unique Identifier (UUID). */
  // @CordovaProperty
  // uuid: string;

  // /** Get the operating system version. */
  // @CordovaProperty
  // version: string;

  // /** Get the device's manufacturer. */
  // @CordovaProperty
  // manufacturer: string;

  // /** Whether the device is running on a simulator. */
  // @CordovaProperty
  // isVirtual: boolean;

  // /** Get the device hardware serial number. */
  // @CordovaProperty
  // serial: string;

}