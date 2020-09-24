import { plugin, prop,  } from '@typegoose/typegoose';
import {
  ArrayPropOptions,
  Func,
  BasePropOptions,
} from '@typegoose/typegoose/lib/types';
import {
  Expose,
  ExposeOptions,
  TypeHelpOptions,
  TypeOptions
} from 'class-transformer';
import { AutoMap } from 'nestjsx-automapper';

export const ExposedProp = (
  propOptions?: BasePropOptions,
  exposeOptions?: ExposeOptions
) => (target: any, propertyKey: string) => {
  Expose(exposeOptions)(target, propertyKey);
  prop(propOptions)(target, propertyKey);
};

export const ExposedArrayProp = (
  arrayPropOptions?: ArrayPropOptions,
  exposeOptions?: ExposeOptions
) => (target: any, propertyKey: string) => {
  Expose(exposeOptions)(target, propertyKey);
  prop(arrayPropOptions)(target, propertyKey);
};

export const AutoMapProp = (
  typeFn: (opts?: TypeHelpOptions) => any,
  propOptions?: BasePropOptions,
  exposeOptions?: ExposeOptions,
  typeOptions?: TypeOptions
) => (target: any, propertyKey: string) => {
  AutoMap(typeFn)(target, propertyKey);
  // AutoMap(typeFn, exposeOptions, typeOptions)(target, propertyKey);
  prop(propOptions)(target, propertyKey);
};

export const AutoMapArrayProp = (
  typeFn: (opts?: TypeHelpOptions) => any,
  arrayPropOptions?: ArrayPropOptions,
  exposeOptions?: ExposeOptions,
  typeOptions?: TypeOptions
) => (target: any, propertyKey: string) => {
  AutoMap(typeFn)(target, propertyKey);
  // AutoMap(typeFn, exposeOptions, typeOptions)(target, propertyKey);
  prop(arrayPropOptions)(target, propertyKey);
};

export const multiPlugins = (
  ...plugins: Array<{ plugin: Func; options?: any }>
) => {
  function decorator(target: any) {
    plugins.forEach(p => {
      plugin(p.plugin, p.options)(target);
    });
  }

  return decorator as any;
};
