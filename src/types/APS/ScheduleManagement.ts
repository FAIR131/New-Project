export interface IColums {
    name: string;
    label: string;
    align?: string;
    width: string;
    tree?: boolean;
  }
  
  export interface IDatas {
    id:number
    OrderId?: string;
    machineId?: string;
    number?:number;
    request_delivery?:string;
    text: string;
    start_date: string;
    end_date:string;
    open?: boolean;
    parent?: number;
  }
  
  export interface ILinks {
    id: number;
    source: number;
    target: number;
    type: string;
  }
  
  export interface ITabalData {
    orderId:string,
    nachineId: string,
    model: string,
    number: number,
    deadLine: string,
    Quantity: number,
    framesNum: number,
    mapping: number,
    mapping_start: string,
    mapping_end: string,
    BOM: number,
    BOM_start: string,
    BOM_end: string,
    blank: number,
    blank_start:string,
    blank_end: string,
    frame: number,
    frame_start: string,
    frame_end: string,
    paint: number,
    paint_start: string,
    paint_end: string,
    assembly: number,
    assembly_start:string,
    assembly_end:string,
  }
  