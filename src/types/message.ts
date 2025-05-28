export interface Alert {
   id?: number;
   type?: 'success' | 'error' | 'warning' | 'info';
   title?: string;
   message: any;
   dismissible?: boolean;
}
