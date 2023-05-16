export interface IMenu {
  label: string;
  items: IMenuItems[];
  separator?: string;

}

export interface IMenuItems {
  label: string;
  to: string;
  name: string;
  disabled?:boolean
}
