/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Contact } from '../entities/contact';
import {
  createConnection,
  ConnectionOptions,
  getConnection,
  Connection,
} from 'typeorm';
import { Employee } from '../entities/employee';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private platform: Platform) {}

  private createConnection() {
    let dbOptions: ConnectionOptions;
    if (
      this.platform.is('cordova') ||
      this.platform.is('capacitor') ||
      this.platform.is('android')
    ) {
      dbOptions = {
        type: 'cordova',
        database: '__maindb',
        location: 'default',
      };
    } else {
      dbOptions = {
        type: 'sqljs',
        location: 'browser',
        autoSave: true,
      };
    }
    Object.assign(dbOptions, {
      logging: ['error', 'query', 'schema'],
      synchronize: true,
      entities: [Contact, Employee],
    });

    return createConnection(dbOptions);
  }

  async ready() {
    try {
      await getConnection();
    } catch (e) {
      console.log('Connection not established!', e);
      await this.createConnection();
    }
  }
}
