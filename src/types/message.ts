export interface Alert {
   type?: 'success' | 'error' | 'warning' | 'info';
   title?: string;
   message: any;
   dismissible?: boolean;
}
