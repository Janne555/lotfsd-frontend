// from https://github.com/piotrwitek/typesafe-actions#extending-internal-types-to-enable-type-free-syntax-with-createreducer
import { ActionType } from 'typesafe-actions';

export type RootAction = ActionType<typeof import('../Redux/actions')>;

declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootAction;
  }
}