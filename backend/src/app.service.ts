import { Injectable } from '@nestjs/common';
import { join } from 'path';
import * as yml from 'js-yaml';
import { readFileSync } from 'fs';
import { BaseGroceryTypesConfig } from './common/base-grocery-types.dto';

@Injectable()
export class AppService {
  constructor() {
    this.parseYamlFile();
  }

  private parseYamlFile() {
    const dir = join(__dirname, '..', 'base-grocery-types.yaml');
    const fileContents = readFileSync(dir).toString();
    const contents = yml.load(fileContents) as BaseGroceryTypesConfig;
    for (const category in contents) {
      if (Object.prototype.hasOwnProperty.call(contents, category)) {
        const element = contents[category];
      }
    }
  }
}
