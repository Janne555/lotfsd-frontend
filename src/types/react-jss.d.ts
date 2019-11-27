// from https://github.com/cssinjs/jss/issues/1203#issuecomment-547983799
declare module "react-jss" {
  export function createUseStyles<TStyle>(
    style: TStyle
  ): TStyle extends (...args: any) => any
    ? (data?: any) => Record<Extract<keyof ReturnType<TStyle>, string>, string>
    : (data?: any) => Record<Extract<keyof TStyle, string>, string>;
}

export * from "react-jss";